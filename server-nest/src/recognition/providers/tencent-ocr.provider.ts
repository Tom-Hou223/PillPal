/**
 * Tencent OCR Provider - Stub for future migration
 * Currently the main recognition service uses Baidu OCR API.
 * This provider is reserved for future Tencent OCR integration.
 */
export class TencentOcrProvider {
  // Future implementation for Tencent OCR
  async recognize(_imageBuffer: Buffer): Promise<any> {
    throw new Error('Tencent OCR not yet implemented');
  }
}
