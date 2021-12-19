import ArgumentNullError from "../../helpers/errors/ArgumentNullError";
import ViewerWrapper from "./ViewerWrapper";
import CreateViewerInput from "./ViewerWrapper/CreateViewerInput";
import Showcase from "./ViewerWrapper/Showcase";


export default async function createViewerWrapperInstance(
  showcase: Showcase,
  params: CreateViewerInput
): Promise<ViewerWrapper> {
  if (!showcase) {
    throw new ArgumentNullError("showcase");
  }

  return new ViewerWrapper(
    showcase,
    await showcase.createViewer(params)
  );
}
