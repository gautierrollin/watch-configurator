import CaptureImageInput from "./CaptureImageInput";
import CaptureImageOutput from "./CaptureImageOutput";
import GetCurrentViewpointOutput from "./GetCurrentViewpointOutput";
import GetFieldsOutput from "./GetFieldsOutput";
import SetViewpointInput from "./SetViewpointInput";
import Showcase from "./Showcase";
import UpdateConfigurationInput from "./UpdateConfigurationInput";
import Viewer from "./Viewer";


export default class ViewerWrapper {

  private readonly showcase: Showcase;

  private readonly viewer: Viewer;

  public constructor(showcase: Showcase, viewer: Viewer) {
    this.showcase = showcase;
    this.viewer = viewer;
  }

  /**
   * Updates the current configuration.
   *
   * @param input Complete or parts of a configuration as a plain key/value object.
   */
  public async updateConfiguration(input: UpdateConfigurationInput): Promise<void> {
    return this.viewer.updateConfiguration(input);
  }

  /**
   * Gets current camera state.
   */
  public async getCurrentViewpoint(): Promise<GetCurrentViewpointOutput> {
    return this.viewer.getCurrentViewpoint();
  }

  /**
   * Sets current viewpoint.
   */
  public async setViewpoint(input: SetViewpointInput): Promise<void> {
    return this.viewer.setViewpoint(input);
  }

  /**
   * Takes a screenshot of what the viewer is currently displaying.
   */
  public async captureImage(input: CaptureImageInput): Promise<CaptureImageOutput> {
    return this.viewer.captureImage(input);
  }

  /**
   * Adds updating listener.
   *
   * @param listener The callback function
   */
  public async addUpdatingListener(listener: (value: number) => void): Promise<void> {
    return this.viewer.addUpdatingListener(listener);
  }

  /**
   * Removes updating listener.
   *
   * @param listener The callback function
   */
  public async removeUpdatingListener(listener: (value: number) => void): Promise<void> {
    return this.viewer.removeUpdatingListener(listener);
  }

  /**
   * Disposes the viewer to free up memory.
   */
  public async dispose(): Promise<void> {
    return this.viewer.dispose();
  }

  /**
   * Get all available configurable fields with their values.
   */
  public async getFields(): Promise<GetFieldsOutput> {
    return this.showcase.getFields();
  }

}
