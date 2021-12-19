import CreateViewerInput from "./CreateViewerInput";
import GetFieldsOutput from "./GetFieldsOutput";
import Viewer from "./Viewer";


export default interface Showcase {

  /**
   * Create a new viewer attached to an HTML <div>.
   */
  createViewer(input: CreateViewerInput): Promise<Viewer>;

  /**
   * Get all available configurable fields with their values.
   */
  getFields(): GetFieldsOutput;

}
