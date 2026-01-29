import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../common/custom-button/CustomButton";
import CustomTextInput from "../../common/custom-textInput/CustomTextInput";
import "./LoginForm.scss";

const LoginForm = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const [textError, setTextError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleTextInput = (key: string, e: string) => {
    switch (key) {
      case "text":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        setText(e.trim());
        if (!e.trim()) {
          setTextError("Field cannot be empty");
        } else if (!emailRegex.test(e.trim())) {
          setTextError("Enter a valid email.");
        } else {
          setTextError(""); // Clear the error
        }
        break;

      case "password":
        setPassword(e.trim());
        if (!e.trim()) {
          setPasswordError("Password cannot be empty");
        } else {
          setPasswordError("");
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    navigate("/users");
  };

  const buttonDisabled =
    text.trim() != "" && password.trim() != "" && !textError && !passwordError;

  return (
    <div className="login_form_container">
      <h1 className="login_text1">Welcome</h1>
      <p className="login_text2">Enter details to login. </p>

      <form onSubmit={handleSubmit}>
        {/* Email Address */}
        <CustomTextInput
          type={"normal"}
          name={"text"}
          value={text}
          errorMessage={textError}
          handleTextInput={handleTextInput}
          placeholder="Email"
        />

        {/* Password */}
        <CustomTextInput
          type={"password"}
          name={"password"}
          value={password}
          errorMessage={passwordError}
          handleTextInput={handleTextInput}
          placeholder="Password"
        />

        {/* Forgot Password */}
        <p className="forgot_password_text">FORGOT PASSWORD?</p>

        {/* Login Button */}
        <CustomButton
          label="LOG IN"
          width={"100%"}
          height="50px"
          bgColor="#39CDCC"
          textColor="white"
          fontSize={14}
          fontWeight={600}
          // disabled={!buttonDisabled}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default LoginForm;
