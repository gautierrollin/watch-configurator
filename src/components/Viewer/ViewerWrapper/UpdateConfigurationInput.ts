export default interface UpdateConfigurationInput {

  /**
   * Fragment or complete configuration.
   */
  readonly configuration: {

    /**
     * Field key/value.
     */
    readonly [fieldKey: string]: string;

  };

}
