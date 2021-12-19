import { useEffect, useState } from "react";
import ArgumentNullError from "../../helpers/errors/ArgumentNullError";
import createViewerWrapperInstance from "./createViewerWrapperInstance";
import Release from "./Release";
import ViewerWrapper from "./ViewerWrapper";
import Showcase from "./ViewerWrapper/Showcase";


declare global {
  interface Window {

    /**
     * Apviz 3D engine callback.
     */
    apvizShowcaseReady(showcase: Showcase): Promise<void>;

  }
}


export default function useViewer(
  release: Release,
  divId: string,
  onError: (error: Error) => void
) {
  if (!release.integrationUrl) {
    throw new ArgumentNullError("release.integrationUrl");
  }

  if (release.isPublic === null || release.isPublic === undefined) {
    throw new ArgumentNullError("release.isPublic");
  }

  if (!divId) {
    throw new ArgumentNullError("divId");
  }

  const [viewer, setViewer] = useState<ViewerWrapper>();
  const [progress, setProgress] = useState<number>(0);

  /**
   * Handles viewer creation.
   */
  useEffect(() => {
    let proceedOncePromiseResolved = true;
    let viewerInstance;
    let scriptElement: HTMLScriptElement;

    async function createViewer(showcase: Showcase): Promise<void> {
      viewerInstance = await createViewerWrapperInstance(showcase, { divId });

      if (proceedOncePromiseResolved) {
        setViewer(viewerInstance);
      } else {
        await viewerInstance.dispose();
      }
    }

    function onLoadError() {
      onError(new Error(`Failed to load ${release.integrationUrl}.`));
    }

    if (!viewer) {
      window.apvizShowcaseReady = createViewer;
      scriptElement = document.createElement("script");
      scriptElement.setAttribute("src", release.integrationUrl);
      scriptElement.setAttribute("defer", "true");
      scriptElement.setAttribute("crossorigin", release.isPublic ? "anonymous" : "use-credentials");
      scriptElement.setAttribute("data-apviz-callback", "apvizShowcaseReady");
      scriptElement.addEventListener("error", onLoadError);
      document.body.append(scriptElement);
    }

    return () => {
      proceedOncePromiseResolved = false;

      // Dispose viewer when component unmounts.
      if (viewer) {
        viewer.dispose();
        scriptElement.removeEventListener("error", onLoadError);
        scriptElement.remove();
      }
    };
  }, [release.integrationUrl, release.isPublic, divId, onError, viewer]);

  /**
   * Handles progress event.
   */
  useEffect(() => {
    function onUpdate(value: number): void {
      setProgress(value);
    }

    if (viewer) {
      viewer.addUpdatingListener(onUpdate);
    }

    return () => {
      if (viewer) {
        viewer.removeUpdatingListener(onUpdate);
      }
    };
  }, [viewer]);

  return [{
    viewer,
    progress
  }];
}
