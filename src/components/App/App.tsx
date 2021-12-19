import React, { useCallback, useState } from "react";
import Viewer from "../Viewer";
import "./App.css";


interface AppProps {
  integrationUrl: string;
  defaultConfiguration: {
    [key: string]: string;
  };
}


function App(props: AppProps) {
  const [configuration] = useState<{ [key: string]: string }>(props.defaultConfiguration);

  const onReady = useCallback(async viewer => {
    // eslint-disable-next-line no-console
    console.log("viewer", viewer);
  }, []);

  const onError = useCallback(error => {
    // eslint-disable-next-line no-console
    console.log("error", error);
  }, []);

  return (
    <div className="App">
      <Viewer
        release={{
          integrationUrl : props.integrationUrl,
          isPublic : true
        }}
        configuration={configuration}
        renderLoader={progress => progress < 100 && (
          <p style={{ position: "absolute", bottom: 16, left: 16 }}>
            {progress} %
          </p>
        )}
        onReady={onReady}
        onError={onError}
      />
    </div>
  );
}

export default App;
