import ViewerWrapper from "./ViewerWrapper";
import GetFieldsOutput from "./ViewerWrapper/GetFieldsOutput";


export default class PublicViewer {

  private readonly viewer: ViewerWrapper;

  public constructor(viewer: ViewerWrapper) {
    this.viewer = viewer;
  }

  /**
   * Get all available configurable fields with their values.
   */
  public async getFields(): Promise<GetFieldsOutput> {
    return this.viewer.getFields();
  }

}
