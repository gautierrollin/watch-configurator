export default interface GetCurrentViewpointOutput {

  /**
   * Camera target X coordinate (in meters).
   */
  targetX: number;

  /**
   * Camera target Y coordinate (in meters).
   */
  targetY: number;

  /**
   * Camera target Z coordinate (in meters).
   */
  targetZ: number;

  /**
   * Distance from camera to target (in meters).
   */
  distance: number;

  /**
   * Longitudinal camera rotation (in degrees).
   */
  yaw: number;

  /**
   * Latitudinal camera rotation (in degrees).
   */
  pitch: number;

  /**
   * Focal length (in millimeters).
   */
  focalLength: number;

}
