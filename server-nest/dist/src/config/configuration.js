"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT || '3001', 10),
    database: {
        url: process.env.DATABASE_URL || '',
    },
    jwt: {
        accessSecret: process.env.JWT_ACCESS_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
        refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
        password: process.env.REDIS_PASSWORD,
    },
    wechat: {
        appId: process.env.WECHAT_APP_ID,
        appSecret: process.env.WECHAT_APP_SECRET,
        templates: {
            expiry: process.env.WECHAT_EXPIRY_TEMPLATE_ID,
            medication: process.env.WECHAT_MEDICATION_TEMPLATE_ID,
        },
    },
    baidu: {
        apiKey: process.env.BAIDU_API_KEY || '',
        secretKey: process.env.BAIDU_SECRET_KEY || '',
        tokenUrl: 'https://aip.baidubce.com/oauth/2.0/token',
        ocrUrl: 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic',
    },
    aliyun: {
        appCode: process.env.ALIYUN_APP_CODE || '',
        barcodeApiUrl: 'https://jumbarcode.market.alicloudapi.com/bar-code/query',
    },
    upload: {
        dir: process.env.UPLOAD_DIR ?? './uploads',
        maxSize: parseInt(process.env.MAX_FILE_SIZE || '5242880', 10),
    },
});
//# sourceMappingURL=configuration.js.map