// 全局数据存储（模拟原项目 getApp().globalData）
let globalTraceCodeImage: string | null = null;

export const setTraceCodeImage = (imagePath: string) => {
  globalTraceCodeImage = imagePath;
};

export const getTraceCodeImage = () => {
  const img = globalTraceCodeImage;
  globalTraceCodeImage = null;
  return img;
};
