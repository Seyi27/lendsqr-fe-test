import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="dashboard_wrapper">
      <Topbar />

      <div>
        <Sidebar />

        <div className="dashboard_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
