import React from "react";
import Configuration from "../App/Configuration";
import GetFieldsOutput from "../Viewer/ViewerWrapper/GetFieldsOutput";
import "./Menu.css";


function sanitizeText(text: string): string {
  return text.replace("_", " ");
}


interface MenuProps {
  configuration: Configuration
  onConfigurationChange(configuration: Configuration): void;
  fields?: GetFieldsOutput["fields"];
}


function Menu(props: MenuProps) {

  if (!props.fields) {
    return null;
  }

  return (
    <div className="Menu">
      {props.fields.map(field => (
        <div className="Menu__item">
          <span className="Menu__label">
            {sanitizeText(field.key)}
          </span>
          <div className="Menu__buttons">
            {field.values.map(({ value }) => (
              <button
                type="button"
                className={props.configuration[field.key] === value
                  ? "Menu__button Menu__button--selected"
                  : "Menu__button"}
                onClick={() => props.onConfigurationChange({
                  [field.key] : value
                })}
              >
                {sanitizeText(value)}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
