export default interface CaptureImageInput {

  /**
   * Height of the desired image in pixels.
   *
   * Note that whatever height/width ratio your are choosing,
   * the aspect ratio of the image is preserved, leaving extra,
   * unused space in the area you are trying to fill.
   */
  readonly imageHeight: number;

  /**
   * Width of the desired image in pixels.
   *
   * Note that whatever height/width ratio your are choosing,
   * the aspect ratio of the image is preserved, leaving extra,
   * unused space in the area you are trying to fill.
   */
  readonly imageWidth: number;

}
