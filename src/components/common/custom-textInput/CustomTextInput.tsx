import { useState } from "react";
import "./CustomTextInput.scss";
import type { CustomTextInputProps } from "../../../types/appTypes";

const CustomTextInput = ({
  type,
  name,
  value,
  errorMessage,
  handleTextInput,
  placeholder,
  readOnly,
}: CustomTextInputProps) => {
  const [toggleVisibility, setToggleVisibility] = useState(false);

  const handleToggle = () => {
    setToggleVisibility(!toggleVisibility);
  };

  const renderCustomInput = () => {
    switch (type) {
      case "normal":
        return (
          <div className="normal_input_box">
            <input
              type="text"
              value={value}
              onChange={(e) => handleTextInput(name, e.target.value)}
              className={`normal_textinput ${
                errorMessage && "error_textInput"
              }`}
              placeholder={placeholder}
              autoComplete="off"
              readOnly={readOnly}
            />
            {errorMessage && (
              <span className="error_message">{errorMessage}</span>
            )}
          </div>
        );
        
      case "password":
        return (
          <div className="password_input_box">
            <div
              className={`password_textinput_container ${
                errorMessage && "error_textInput"
              }`}
            >
              <input
                type={toggleVisibility ? "text" : "password"}
                value={value}
                onChange={(e) => handleTextInput(name, e.target.value)}
                className="password_textinput"
                placeholder={placeholder}
                autoComplete="off"
              />
              <span onClick={handleToggle}>
                {toggleVisibility ? "HIDE": "SHOW"}
              </span>
            </div>
            {errorMessage && (
              <span className="error_message">{errorMessage}</span>
            )}
          </div>
        );
    }
  };
  return <>{renderCustomInput()}</>;
};

export default CustomTextInput;
