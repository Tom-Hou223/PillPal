declare const _default: () => {
    port: number;
    database: {
        url: string;
    };
    jwt: {
        accessSecret: string | undefined;
        refreshSecret: string | undefined;
        accessExpiresIn: string;
        refreshExpiresIn: string;
    };
    redis: {
        host: string;
        port: number;
        password: string | undefined;
    };
    wechat: {
        appId: string | undefined;
        appSecret: string | undefined;
        templates: {
            expiry: string | undefined;
            medication: string | undefined;
        };
    };
    baidu: {
        apiKey: string;
        secretKey: string;
        tokenUrl: string;
        ocrUrl: string;
    };
    aliyun: {
        appCode: string;
        barcodeApiUrl: string;
    };
    upload: {
        dir: string;
        maxSize: number;
    };
};
export default _default;
