export default interface SetViewpointInput {

  readonly viewpoint: {

    /**
     * Camera target X coordinate (in meters).
     */
    readonly targetX: number;

    /**
     * Camera target Y coordinate (in meters).
     */
    readonly targetY: number;

    /**
     * Camera target Z coordinate (in meters).
     */
    readonly targetZ: number;

    /**
     * Distance from camera to target (in meters).
     */
    readonly distance: number;

    /**
     * Longitudinal camera rotation (in degrees).
     */
    readonly yaw: number;

    /**
     * Latitudinal camera rotation (in degrees).
     */
    readonly pitch: number;

    /**
     * Focal length (in millimeters).
     */
    readonly focalLength: number;

    /**
     * Distance restriction enabled.
     */
    readonly distanceRestrictionEnabled: boolean;

    /**
     * Minimum distance from camera to target (in meters).
     */
    readonly distanceRestrictionMin?: number;

    /**
     * Maximum distance from camera to target (in meters).
     */
    readonly distanceRestrictionMax?: number;

    /**
     * Yaw restriction enabled.
     */
    readonly yawRestrictionEnabled: boolean;

    /**
     * Pitch restriction enabled.
     */
    readonly pitchRestrictionEnabled: boolean;

    /**
     * Enable/Disable smart camera.
     */
    readonly smartCameraEnabled: boolean;

  };

}
