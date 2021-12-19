export default interface CaptureImageOutput {

  /**
   * Image height in pixels.
   */
  height: number;

  /**
   * Image width in pixels.
   */
  width: number;

  /**
   * MIME type of the image.
   */
  mimeType: "image/png";

  /**
   * Function that returns the image as binary within a buffer.
   */
  toArrayBuffer(): Promise<ArrayBuffer>;

  /**
   * Function that returns the image encoded as Base64.
   */
  toBase64(): string;

}
