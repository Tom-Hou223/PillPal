"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var RecognitionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecognitionService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
const prisma_service_1 = require("../prisma/prisma.service");
let RecognitionService = RecognitionService_1 = class RecognitionService {
    prisma;
    configService;
    logger = new common_1.Logger(RecognitionService_1.name);
    baiduAccessToken = null;
    baiduTokenExpireTime = null;
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
    }
    get BarcodeApiUrl() {
        return 'https://jumbarcode.market.alicloudapi.com/bar-code/query';
    }
    get BaiduOcrUrl() {
        return 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic';
    }
    get BaiduTokenUrl() {
        return 'https://aip.baidubce.com/oauth/2.0/token';
    }
    async recognizeBarcode(barcode) {
        try {
            const appCode = this.configService.get('aliyun.appCode') || '';
            if (!appCode) {
                this.logger.warn('阿里云条形码API未配置，返回模拟数据');
                return this.getMockBarcodeData(barcode);
            }
            const url = `${this.BarcodeApiUrl}?code=${barcode}`;
            const response = await axios_1.default.get(url, {
                headers: { 'Authorization': `APPCODE ${appCode}` },
            });
            if (response.data && response.data.code === 200 && response.data.data) {
                const data = response.data.data;
                return {
                    success: true,
                    data: {
                        name: data.name || '',
                        manufacturer: data.manuName || '',
                        specification: data.spec || '',
                        category: this.parseCategoryFromRemark(data.remark),
                        dosage: this.parseDosageFromRemark(data.remark),
                        daysToExpiry: 365,
                    },
                };
            }
            throw new Error(response.data.msg || '未找到该药品信息');
        }
        catch (error) {
            this.logger.error('条形码识别失败，使用模拟数据');
            return this.getMockBarcodeData(barcode);
        }
    }
    getMockBarcodeData(barcode) {
        const mockMedicines = [
            { name: '阿莫西林胶囊', manufacturer: '哈药集团', specification: '0.25g×24粒', category: '抗生素', dosage: '口服，一次1粒，一日3次', expiryDate: '2026.12.31', daysToExpiry: 365 },
            { name: '布洛芬缓释胶囊', manufacturer: '芬必得', specification: '0.3g×24粒', category: '解热镇痛', dosage: '口服，一次1粒，一日2次', expiryDate: '2026.06.30', daysToExpiry: 365 },
            { name: '感冒灵颗粒', manufacturer: '999感冒灵', specification: '9g×10袋', category: '感冒用药', dosage: '开水冲服，一次1袋，一日3次', expiryDate: '2027.03.15', daysToExpiry: 730 },
            { name: '维生素C片', manufacturer: '东北制药', specification: '100mg×100片', category: '维生素', dosage: '口服，一次1-2片，一日3次', expiryDate: '2027.08.20', daysToExpiry: 730 },
        ];
        const index = Math.abs(barcode.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)) % mockMedicines.length;
        return { success: true, data: { ...mockMedicines[index], barcode } };
    }
    parseCategoryFromRemark(remark) {
        if (!remark)
            return '其他';
        const parts = remark.split('#');
        for (const part of parts) {
            if (part.includes('感冒'))
                return '感冒用药';
            if (part.includes('消炎') || part.includes('抗生素'))
                return '抗生素';
            if (part.includes('维生素'))
                return '维生素';
            if (part.includes('止痛') || part.includes('镇痛'))
                return '解热镇痛';
            if (part.includes('胃') || part.includes('消化'))
                return '消化系统';
            if (part.includes('咳嗽') || part.includes('化痰'))
                return '止咳化痰';
            if (part.includes('外用'))
                return '外用药';
        }
        return '其他';
    }
    parseDosageFromRemark(_remark) {
        return '';
    }
    async recognizeImage(imageBuffer) {
        try {
            const apiKey = this.configService.get('baidu.apiKey') || '';
            const secretKey = this.configService.get('baidu.secretKey') || '';
            if (!apiKey || !secretKey) {
                this.logger.warn('百度AI API密钥未配置，返回模拟数据');
                return this.getMockImageData();
            }
            const accessToken = await this.getBaiduAccessToken();
            const imageBase64 = imageBuffer.toString('base64');
            const url = `${this.BaiduOcrUrl}?access_token=${accessToken}`;
            const response = await axios_1.default.post(url, `image=${encodeURIComponent(imageBase64)}`, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            if (response.data.error_code) {
                throw new Error(response.data.error_msg || '识别失败');
            }
            return {
                success: true,
                data: this.parseOCRResult(response.data),
            };
        }
        catch (error) {
            this.logger.error('图片识别失败，返回模拟数据');
            return this.getMockImageData();
        }
    }
    getMockImageData() {
        const mockMedicines = [
            { name: '阿莫西林胶囊', manufacturer: '哈药集团', specification: '0.25g×24粒', category: '抗生素', dosage: '口服，一次1粒，一日3次', daysToExpiry: 365 },
            { name: '布洛芬缓释胶囊', manufacturer: '芬必得', specification: '0.3g×24粒', category: '解热镇痛', dosage: '口服，一次1粒，一日2次', daysToExpiry: 365 },
            { name: '感冒灵颗粒', manufacturer: '999感冒灵', specification: '9g×10袋', category: '感冒用药', dosage: '开水冲服，一次1袋，一日3次', daysToExpiry: 730 },
            { name: '维生素C片', manufacturer: '东北制药', specification: '100mg×100片', category: '维生素', dosage: '口服，一次1-2片，一日3次', daysToExpiry: 730 },
            { name: '复方甘草片', manufacturer: '同仁堂', specification: '100片', category: '止咳化痰', dosage: '口服，一次1-2片，一日3次', daysToExpiry: 730 },
        ];
        const randomIndex = Math.floor(Math.random() * mockMedicines.length);
        return { success: true, data: mockMedicines[randomIndex] };
    }
    async getBaiduAccessToken() {
        if (this.baiduAccessToken && this.baiduTokenExpireTime && Date.now() < this.baiduTokenExpireTime) {
            return this.baiduAccessToken;
        }
        const apiKey = this.configService.get('baidu.apiKey');
        const secretKey = this.configService.get('baidu.secretKey');
        if (!apiKey || !secretKey) {
            throw new common_1.InternalServerErrorException('百度AI API密钥未配置');
        }
        const response = await axios_1.default.get(this.BaiduTokenUrl, {
            params: {
                grant_type: 'client_credentials',
                client_id: apiKey,
                client_secret: secretKey,
            },
        });
        if (response.data.access_token) {
            this.baiduAccessToken = response.data.access_token;
            this.baiduTokenExpireTime = Date.now() + 29 * 24 * 60 * 60 * 1000;
            return this.baiduAccessToken;
        }
        throw new common_1.InternalServerErrorException('获取百度AI access_token 失败');
    }
    parseOCRResult(ocrData) {
        const result = {
            name: '',
            manufacturer: '',
            specification: '',
            category: '其他',
            dosage: '',
            expiryDate: '',
            daysToExpiry: 730,
            traceCode: '',
        };
        if (!ocrData.words_result || ocrData.words_result.length === 0) {
            this.logger.warn('未识别到文字');
            return result;
        }
        const words = ocrData.words_result.map((item) => item.words);
        const fullText = words.join('\n');
        let foundName = false;
        const drugNameMatch = fullText.match(/【药品名称】\s*[\s\S]*?通用名称[：:]\s*([^\n]+)/);
        if (drugNameMatch && drugNameMatch[1]) {
            result.name = drugNameMatch[1].trim();
            foundName = true;
        }
        if (!foundName) {
            const productNameMatch = fullText.match(/【产品名称】\s*([^\n]+)/);
            if (productNameMatch && productNameMatch[1]) {
                result.name = productNameMatch[1].trim();
                foundName = true;
            }
        }
        if (!result.name) {
            let mainNameIndex = -1;
            let mainName = '';
            for (let i = 0; i < words.length; i++) {
                const trimmed = words[i].trim();
                if (trimmed.length >= 3 && trimmed.length <= 50 && (trimmed.includes('片') || trimmed.includes('胶囊') ||
                    trimmed.includes('颗粒') || trimmed.includes('丸') ||
                    trimmed.includes('软膏') || trimmed.includes('溶液') ||
                    trimmed.includes('注射液') || trimmed.includes('散') ||
                    trimmed.includes('滴眼液') || trimmed.includes('眼膏') ||
                    trimmed.includes('乳膏') || trimmed.includes('凝胶') ||
                    trimmed.includes('酊') || trimmed.includes('膏') ||
                    trimmed.includes('气雾剂') || trimmed.includes('保险液') ||
                    trimmed.toLowerCase().includes('tablet') ||
                    trimmed.toLowerCase().includes('capsule') ||
                    trimmed.toLowerCase().includes('pill') ||
                    trimmed.toLowerCase().includes('softgel') ||
                    trimmed.toLowerCase().includes('syrup') ||
                    trimmed.toLowerCase().includes('cream') ||
                    trimmed.toLowerCase().includes('ointment') ||
                    trimmed.toLowerCase().includes('liquid'))) {
                    if (!trimmed.includes('用法') && !trimmed.includes('用量') &&
                        !trimmed.includes('症状') && !trimmed.includes('【') &&
                        !trimmed.includes('】') && !trimmed.includes('[') &&
                        !trimmed.toLowerCase().includes('suggested') &&
                        !trimmed.toLowerCase().includes('direction')) {
                        mainNameIndex = i;
                        mainName = trimmed;
                        break;
                    }
                }
            }
            if (mainNameIndex !== -1) {
                let fullName = mainName;
                if (mainNameIndex > 0) {
                    const prevWord = words[mainNameIndex - 1].trim();
                    if (prevWord.length > 0 && prevWord.length <= 30 &&
                        (prevWord.includes('牌') || prevWord.includes('维生素') ||
                            prevWord.includes('叶') || prevWord.includes('素') ||
                            prevWord.includes('钙') || prevWord.includes('锌') ||
                            prevWord.includes('铁') || prevWord.includes('镁') ||
                            prevWord.includes('药') || prevWord.includes('白'))) {
                        fullName = prevWord + mainName;
                    }
                    else if (prevWord.length > 0 && prevWord.length <= 15 &&
                        !prevWord.includes('【') && !prevWord.includes('OTC')) {
                        fullName = prevWord + mainName;
                    }
                }
                if (fullName.includes('说明书')) {
                    fullName = fullName.replace('说明书', '').trim();
                }
                result.name = fullName;
            }
        }
        const specPatterns = [
            /【产品规格】\s*([^【\[]+)/i,
            /【产[\s\S]*?品[\s\S]*?规[\s\S]*?格】\s*([^【\[]+)/i,
            /【规格】\s*([^【\[]+)/i,
            /【规[\s\S]*?格】\s*([^【\[]+)/i,
            /【规格类型】\s*([^【\[]+)/i,
            /\[规格\]\s*([^【\[]+)/i,
            /规格[：:]\s*([^【\[]+)/i,
            /净含量[：:]\s*([^【\[\n]+)/i,
            /serving[ \t]*size[ \t]*:[\s\S]*?([^\n]+)/i,
            /strength[ \t]*:[\s\S]*?([^\n]+)/i,
            /dosage[ \t]*:[\s\S]*?([^\n]+)/i,
            /size[ \t]*:[\s\S]*?([^\n]+)/i,
        ];
        for (const pattern of specPatterns) {
            const match = fullText.match(pattern);
            if (match && match[1]) {
                let specText = match[1].trim();
                const lines = specText.split(/\n/);
                let fullSpec = '';
                for (const line of lines) {
                    if (!line.trim())
                        continue;
                    if (line.includes('【') || line.includes('[') ||
                        line.includes('用法') || line.includes('用量'))
                        break;
                    if (fullSpec)
                        fullSpec += ' ';
                    fullSpec += line.trim();
                    if (fullSpec.includes('克') && fullSpec.length > 10)
                        break;
                }
                result.specification = fullSpec || lines[0].trim();
                break;
            }
        }
        const packPatterns = [
            /包装[：:]\s*([^\n]+)/, /【包装】\s*([^\n]+)/,
            /(\d+袋\/盒)/, /(\d+片\/盒)/, /(\d+粒\/盒)/,
            /(\d+丸\/盒)/, /(\d+胶囊\/盒)/, /(\d+包\/盒)/,
            /(\d+瓶\/盒)/, /(\d+支\/盒)/, /(\d+盒)/,
            /铝罐包装[\s\S]*?(\d+瓶)/,
        ];
        for (const pattern of packPatterns) {
            const match = fullText.match(pattern);
            if (match) {
                const packStr = match[1] || match[0];
                if (packStr && packStr.length <= 30) {
                    if (result.specification) {
                        if (!result.specification.includes(packStr)) {
                            result.specification += ' ' + packStr;
                        }
                    }
                    else {
                        result.specification = packStr;
                    }
                    break;
                }
            }
        }
        const dosagePatterns = [
            /【用法用量】(?:\s*\n)?([^【\[]+)/i,
            /【用[\s\S]*?法[\s\S]*?用[\s\S]*?量】(?:\s*\n)?([^【\[]+)/i,
            /【使用方法】(?:\s*\n)?([^【\[]+)/i,
            /【使[\s\S]*?用[\s\S]*?方[\s\S]*?法】(?:\s*\n)?([^【\[]+)/i,
            /【食用方法】(?:\s*\n)?([^【\[]+)/i,
            /【食[\s\S]*?用[\s\S]*?方[\s\S]*?法】(?:\s*\n)?([^【\[]+)/i,
            /\[用法用量\](?:\s*\n)?([^【\[]+)/i,
            /用法用量[：:](?:\s*\n)?([^【\[]+)/i,
            /使用方法[：:](?:\s*\n)?([^【\[]+)/i,
            /食用及食用方法[：:](?:\s*\n)?([^【\[]+)/i,
            /食用方法[：:](?:\s*\n)?([^【\[]+)/i,
            /suggested[ \t]*use[ \t]*:[\s\S]*?([^\n]+)/i,
            /directions[ \t]*:[\s\S]*?([^\n]+)/i,
            /how[ \t]*to[ \t]*use[ \t]*:[\s\S]*?([^\n]+)/i,
        ];
        for (const pattern of dosagePatterns) {
            const match = fullText.match(pattern);
            if (match && match[1]) {
                let dosageText = match[1].trim();
                const lines = dosageText.split(/\n/).filter((line) => line.trim().length > 0);
                let validDosage = '';
                let startIndex = -1;
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    if (line.includes('口服') || line.includes('外用') ||
                        line.includes('一次') || line.includes('一日') ||
                        line.includes('每次') || line.includes('每日') ||
                        line.toLowerCase().includes('take') ||
                        line.toLowerCase().includes('adult') ||
                        line.toLowerCase().includes('tablet') ||
                        line.toLowerCase().includes('chew') ||
                        line.toLowerCase().includes('once') ||
                        line.toLowerCase().includes('twice')) {
                        startIndex = i;
                        break;
                    }
                }
                if (startIndex !== -1) {
                    validDosage = lines[startIndex].trim();
                    const endings = ['。', '！', '？', '）', ')', '；', ';', '】', ']'];
                    let needsMore = validDosage.length < 8;
                    if (!needsMore) {
                        needsMore = true;
                        for (const end of endings) {
                            if (validDosage.endsWith(end)) {
                                needsMore = false;
                                break;
                            }
                        }
                    }
                    if (needsMore && startIndex + 1 < lines.length) {
                        const nextLine = lines[startIndex + 1].trim();
                        if (!nextLine.includes('【') && !nextLine.includes('[') &&
                            !nextLine.includes('成份') && !nextLine.includes('性状') &&
                            !nextLine.includes('规格')) {
                            validDosage += nextLine;
                            if (validDosage.length < 15 && startIndex + 2 < lines.length) {
                                const thirdLine = lines[startIndex + 2].trim();
                                if (!thirdLine.includes('【') && !thirdLine.includes('[')) {
                                    validDosage += thirdLine;
                                }
                            }
                        }
                    }
                }
                if (!validDosage && lines.length > 0) {
                    validDosage = lines[0].trim();
                }
                if (validDosage) {
                    result.dosage = validDosage;
                    break;
                }
            }
        }
        let expiryDateStr = null;
        const hasExpiryToTag = /【有效期】\s*至/.test(fullText) ||
            /\[有效期\]\s*至/.test(fullText) ||
            /有效期[:：]?\s*至/.test(fullText) ||
            /【有效期至】/.test(fullText) || /\[有效期至\]/.test(fullText) ||
            /有效期至/.test(fullText) || /【保质期至】/.test(fullText) ||
            /\[保质期至\]/.test(fullText) || /保质期至/.test(fullText) ||
            /exp[ \t]*:/.test(fullText.toLowerCase()) ||
            /expiry[ \t]*:/.test(fullText.toLowerCase()) ||
            /best[ \t]*by/.test(fullText.toLowerCase()) ||
            /use[ \t]*by/.test(fullText.toLowerCase());
        if (hasExpiryToTag) {
            const allDatePatterns = [
                /【保质期至】\s*[:：]?\s*(\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?(?:\d{0,2}日)?)/i,
                /\[保质期至\]\s*[:：]?\s*(\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?(?:\d{0,2}日)?)/i,
                /保质期至\s*[:：]?\s*(\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?(?:\d{0,2}日)?)/i,
                /【有效期至】\s*[:：]?\s*(\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?(?:\d{0,2}日)?)/i,
                /\[有效期至\]\s*[:：]?\s*(\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?(?:\d{0,2}日)?)/i,
                /有效期至\s*[:：]?\s*(\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?(?:\d{0,2}日)?)/i,
                /【有效期】\s*至\s*(\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?(?:\d{0,2}日)?)/i,
                /\[有效期\]\s*至\s*(\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?(?:\d{0,2}日)?)/i,
                /有效期[:：]?\s*至\s*(\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?(?:\d{0,2}日)?)/i,
                /exp[ \t]*[:][ \t]*(\d{1,2}[\/]\d{4})/i,
                /expiry[ \t]*[:][ \t]*(\d{1,2}[\/]\d{4})/i,
                /best[ \t]*by[ \t]*[:][ \t]*(\d{1,2}[\/]\d{4})/i,
                /use[ \t]*by[ \t]*[:][ \t]*(\d{1,2}[\/]\d{4})/i,
                /exp[ \t]*[:][ \t]*(\d{4}[\/]\d{1,2})/i,
                /expiry[ \t]*[:][ \t]*(\d{4}[\/]\d{1,2})/i,
            ];
            for (const pat of allDatePatterns) {
                const m = fullText.match(pat);
                if (m && m[1]) {
                    expiryDateStr = m[1];
                    break;
                }
            }
            if (!expiryDateStr) {
                const labelPatterns = ['【保质期至】', '[保质期至]', '保质期至',
                    '【有效期至】', '[有效期至]', '有效期至',
                    '【有效期】至', '[有效期]至', '有效期：至', '有效期:至', '有效期至'];
                let expiryToIndex = -1;
                for (const label of labelPatterns) {
                    const idx = fullText.indexOf(label);
                    if (idx !== -1) {
                        expiryToIndex = idx;
                        break;
                    }
                }
                if (expiryToIndex !== -1) {
                    const searchAfter = fullText.substring(expiryToIndex, Math.min(expiryToIndex + 60, fullText.length));
                    let nearbyMatch = searchAfter.match(/(\d{4}\.\d{1,2}(?:\.\d{1,2})?)/) ||
                        searchAfter.match(/(\d{4}-\d{1,2}(?:-\d{1,2})?)/) ||
                        searchAfter.match(/(\d{4}\/\d{1,2}(?:\/\d{1,2})?)/) ||
                        searchAfter.match(/(\d{4}年\d{1,2}月(?:\d{1,2}日)?)/) ||
                        searchAfter.match(/(\d{8})/);
                    if (nearbyMatch && nearbyMatch[1]) {
                        expiryDateStr = nearbyMatch[1];
                    }
                    else {
                        const searchBefore = fullText.substring(Math.max(0, expiryToIndex - 100), expiryToIndex);
                        const datePatterns = [
                            /(\d{4}\.\d{1,2}(?:\.\d{1,2})?)/g,
                            /(\d{4}-\d{1,2}(?:-\d{1,2})?)/g,
                            /(\d{4}\/\d{1,2}(?:\/\d{1,2})?)/g,
                            /(\d{4}年\d{1,2}月(?:\d{1,2}日)?)/g,
                            /(\d{8})/g,
                        ];
                        const allFound = [];
                        for (const dp of datePatterns) {
                            for (const dm of searchBefore.matchAll(dp)) {
                                allFound.push({ date: dm[1], index: dm.index || 0 });
                            }
                        }
                        allFound.sort((a, b) => a.index - b.index);
                        if (allFound.length > 0) {
                            expiryDateStr = allFound[allFound.length - 1].date;
                        }
                    }
                }
            }
        }
        if (!expiryDateStr) {
            const fxSectionMatch = fullText.match(/失效日期[\s\S]*?(\d{8})/);
            if (fxSectionMatch && fxSectionMatch[1]) {
                const y = parseInt(fxSectionMatch[1].substring(0, 4));
                if (y >= 1990 && y <= 2100) {
                    expiryDateStr = fxSectionMatch[1];
                }
            }
        }
        if (!expiryDateStr) {
            const allPatterns = [
                /【失效日期】\s*[:：]?\s*(\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?\d{0,2})/,
                /失效日期\s*[:：]?\s*(\d{8}|\d{4}[\.\-\/年]?\d{1,2}[\.\-\/月]?\d{0,2})/,
                /(\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))/,
                /(\d{4}年\d{1,2}月(?:\d{1,2}日)?)/,
                /(\d{4}\.\d{1,2}(?:\.\d{1,2})?)/,
                /(\d{4}-\d{1,2}(?:-\d{1,2})?)/,
                /(\d{4}\/\d{1,2}(?:\/\d{1,2})?)/,
            ];
            for (const pat of allPatterns) {
                const m = fullText.match(pat);
                if (m) {
                    let ds = null;
                    for (let i = 1; i < m.length; i++) {
                        if (m[i]) {
                            ds = m[i];
                            break;
                        }
                    }
                    if (!ds)
                        ds = m[0];
                    if (ds.length >= 4) {
                        const y = parseInt(ds.substring(0, 4));
                        if (y >= 1990 && y <= 2100) {
                            const matchIndex = m.index || 0;
                            const context = fullText.substring(Math.max(0, matchIndex - 20), matchIndex + 20);
                            const blacklist = ['说明书编制日期', '生产日期', '生产批号', '产品批号', '有效期三年', '批准文号'];
                            const isBlacklisted = blacklist.some(k => context.includes(k));
                            if (!isBlacklisted) {
                                expiryDateStr = ds;
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (expiryDateStr) {
            result.expiryDate = this.formatOcrDate(expiryDateStr);
        }
        const mfgPatterns = [
            /【药品上市许可持有人\/生产企业】[\s\S]*?([^\n]+)/,
            /制造[\s\S]*?商[：:]\s*([^\n]+)/,
            /制造商[：:]\s*([^\n]+)/,
            /【备案人\/生产企业】[：:]\s*([^\n]+)/,
            /【备案人\/生产单位\/售后服务单位】[：:]\s*([^\n]+)/,
            /【上市许可持有人】[\s\S]*?名\s*称[：:]\s*([^\n]+)/,
            /【生产企业】[\s\S]*?企业名称[：:]\s*([^\n]+)/,
            /【生产企业】[：:]\s*([^\n]+)/,
            /备案人\/生产企业[：:]\s*([^\n]+)/,
            /【生产企业】[^\n]+?([^\n]{5,})/,
            /\[上市许可持有人\][：:]\s*([^\n]+)/,
            /\[生产企业\][：:]\s*([^\n]+)/,
            /生产企业[：:]\s*([^\n]+)/,
            /生产厂家[：:]\s*([^\n]+)/,
        ];
        for (const pat of mfgPatterns) {
            const m = fullText.match(pat);
            if (m && m[1]) {
                let mfgName = m[1].trim();
                mfgName = mfgName.split(/[·、\n]/)[0].trim();
                if (mfgName.length >= 3) {
                    result.manufacturer = mfgName;
                    break;
                }
            }
        }
        if (!result.manufacturer) {
            for (const word of words) {
                let trimmed = word.trim();
                trimmed = trimmed.replace(/^【上市许可持有人】|^\[上市许可持有人\]|^上市许可持有人|^【生产企业】|^\[生产企业\]|^生产企业|^【备案人\/生产企业】|^\[备案人\/生产企业\]|^备案人\/生产企业/, '').trim();
                if ((trimmed.includes('制药') || trimmed.includes('药业')) &&
                    !trimmed.includes('评价') && trimmed.length <= 50 && trimmed.length >= 4) {
                    result.manufacturer = trimmed;
                    break;
                }
            }
        }
        const tracePatterns = [
            /药品追溯码[\s\S]*?(\d{20})/,
            /药品标识码[：:]\s*(\d+)\s*序列号[：:]\s*(\d+)/,
            /药品追溯码[\s\S]*?(\d+)/,
            /追溯码[：:]\s*(\d+)/,
        ];
        for (const pat of tracePatterns) {
            const m = fullText.match(pat);
            if (m) {
                if (m.length === 3 && m[1] && m[2]) {
                    result.traceCode = m[1] + m[2];
                }
                else if (m[1]) {
                    result.traceCode = m[1];
                }
                if (result.traceCode)
                    break;
            }
        }
        if (result.name) {
            if (result.name.includes('感冒') || result.name.includes('退热') || result.name.includes('抗病毒') || result.name.includes('板蓝根')) {
                result.category = '感冒用药';
            }
            else if (result.name.includes('消炎') || result.name.includes('阿莫西林') || result.name.includes('头孢') || result.name.includes('霉素')) {
                result.category = '抗生素';
            }
            else if (result.name.includes('维生素')) {
                result.category = '维生素';
            }
            else if (result.name.includes('止痛') || result.name.includes('布洛芬') || result.name.includes('镇痛')) {
                result.category = '解热镇痛';
            }
            else if (result.name.includes('胃') || result.name.includes('消化')) {
                result.category = '消化系统';
            }
            else if (result.name.includes('止咳') || result.name.includes('化痰')) {
                result.category = '止咳化痰';
            }
        }
        return result;
    }
    formatOcrDate(dateStr) {
        if (!dateStr)
            return '';
        let year = '', month = '', day = '';
        if (/^\d{8}$/.test(dateStr)) {
            year = dateStr.substring(0, 4);
            month = dateStr.substring(4, 6);
            day = dateStr.substring(6, 8);
        }
        else if (dateStr.includes('年') && dateStr.includes('月')) {
            const mf = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
            if (mf) {
                year = mf[1];
                month = mf[2].padStart(2, '0');
                day = mf[3].padStart(2, '0');
            }
            else {
                const mm = dateStr.match(/(\d{4})年(\d{1,2})月/);
                if (mm) {
                    year = mm[1];
                    month = mm[2].padStart(2, '0');
                    day = '01';
                }
            }
        }
        else if (dateStr.includes('-')) {
            const parts = dateStr.split('-');
            if (parts.length >= 2) {
                year = parts[0];
                month = parts[1].padStart(2, '0');
                day = parts[2] ? parts[2].padStart(2, '0') : '01';
            }
        }
        else if (dateStr.includes('/')) {
            const parts = dateStr.split('/');
            if (parts.length >= 2) {
                if (parseInt(parts[0]) > 1000) {
                    year = parts[0];
                    month = parts[1].padStart(2, '0');
                    day = parts[2] ? parts[2].padStart(2, '0') : '01';
                }
                else {
                    month = parts[0].padStart(2, '0');
                    year = parts[1];
                    day = '01';
                }
            }
        }
        else if (dateStr.includes('.')) {
            const parts = dateStr.split('.');
            if (parts.length >= 2) {
                year = parts[0];
                month = parts[1].padStart(2, '0');
                day = parts[2] ? parts[2].padStart(2, '0') : '01';
            }
        }
        if (year && (parseInt(year) < 1900 || parseInt(year) > 2100))
            return '';
        if (year && month && day) {
            return `${year}.${month}.${day}`;
        }
        return '';
    }
    async saveHistory(userId, familyId, type, inputData, recognitionResult) {
        try {
            await this.prisma.recognitionHistory.create({
                data: {
                    userId: BigInt(userId),
                    familyId,
                    type,
                    inputData,
                    recognitionResult,
                },
            });
        }
        catch (error) {
            this.logger.error('保存识别历史失败', error);
        }
    }
    async getHistory(userId, familyId, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [items, total] = await Promise.all([
            this.prisma.recognitionHistory.findMany({
                where: { userId: BigInt(userId), familyId },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            this.prisma.recognitionHistory.count({
                where: { userId: BigInt(userId), familyId },
            }),
        ]);
        return {
            items,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
};
exports.RecognitionService = RecognitionService;
exports.RecognitionService = RecognitionService = RecognitionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], RecognitionService);
//# sourceMappingURL=recognition.service.js.map