/**
 * Configurable fields with their values.
 */
export default interface GetFieldsOutput {

  /**
   * Fields.
   */
  fields: Array<{

    /**
     * Field key.
     */
    key: string;

    /**
     * Field values.
     */
    values: Array<{

      /**
       * Field value.
       */
      value: string;

    }>;

  }>;

}
