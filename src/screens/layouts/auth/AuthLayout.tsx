import "./AuthLayout.scss";
import logo from "../../../assets/icons/logo.svg";
import login_image from "../../../assets/images/login-image.png";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth_main_container">
      {/* left container */}
      <div className="auth_left_container">
        <img src={logo} className="auth_left_logo_image"/>

        <img src={login_image} className="auth_left_login_image" />
      </div>

      {/* right container */}
      <div className="auth_right_container">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
