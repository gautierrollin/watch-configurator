import CaptureImageInput from "./CaptureImageInput";
import CaptureImageOutput from "./CaptureImageOutput";
import GetCurrentViewpointOutput from "./GetCurrentViewpointOutput";
import SetViewpointInput from "./SetViewpointInput";
import UpdateConfigurationInput from "./UpdateConfigurationInput";


export default interface Viewer {

  /**
   * Updates the current configuration.
   */
  updateConfiguration(input: UpdateConfigurationInput): Promise<void>;

  /**
   * Gets current camera state.
   */
  getCurrentViewpoint(): Promise<GetCurrentViewpointOutput>;

  /**
   * Sets current viewpoint.
   */
  setViewpoint(input: SetViewpointInput): Promise<void>;

  /**
   * Takes a screenshot of what the viewer is currently displaying.
   */
  captureImage(input: CaptureImageInput): Promise<CaptureImageOutput>;

  /**
   * Adds updating listener.
   */
  addUpdatingListener(listener: (value: number) => void): Promise<void>;

  /**
   * Removes updating listener.
   */
  removeUpdatingListener(listener: (value: number) => void): Promise<void>;

  /**
   * Disposes the viewer to free up memory.
   */
  dispose(): Promise<void>;

}
