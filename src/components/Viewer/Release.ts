export default interface Release {

  /**
   * URL of the public release entry point for integration.
   */
  integrationUrl: string;

  /**
   * Whether the public integration URL is accessible to anonymous users.
   */
  isPublic: boolean;

}
