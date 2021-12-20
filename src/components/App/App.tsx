import React, { useCallback, useState } from "react";
import Menu from "../Menu";
import Viewer from "../Viewer";
import GetFieldsOutput from "../Viewer/ViewerWrapper/GetFieldsOutput";
import Configuration from "./Configuration";
import "./App.css";


interface AppProps {
  integrationUrl: string;
  defaultConfiguration: Configuration;
}


function App(props: AppProps) {
  const [configuration, setConfiguration] = useState<Configuration>(props.defaultConfiguration);
  const [fields, setFields] = useState<GetFieldsOutput["fields"]>();

  const onReady = useCallback(async viewer => {
    // eslint-disable-next-line no-console
    console.log("viewer", viewer);
    setFields((await viewer.getFields()).fields);
  }, []);

  const onError = useCallback(error => {
    // eslint-disable-next-line no-console
    console.log("error", error);
  }, []);

  const handleConfigurationChange = (newConfiguration: Configuration) => {
    setConfiguration(currentConfiguration => ({
      ...currentConfiguration,
      ...newConfiguration
    }));
  };

  return (
    <div className="App">
      <Menu
        fields={fields}
        configuration={configuration}
        onConfigurationChange={handleConfigurationChange}
      />
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
