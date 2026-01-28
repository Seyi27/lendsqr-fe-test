import { useState } from "react";
import {
  BsBell,
  BsCaretDownFill,
  BsJustifyLeft,
  BsSearch,
} from "react-icons/bs";
import logo from "../../assets/icons/logo.svg";
import user_image from "../../assets/images/user-image.png";
import "./Topbar.scss";
import MenuSidebar from "../menu-sidebar/MenuSidebar";

const Topbar = () => {
  const [topbarSearch, setTopbarSearch] = useState("");
  const [openMenuSidebar, setOpenMenuSidebar] = useState(false);

  return (
    <>
      <div className="topbar_wrapper">
        {/* logo */}
        <div className="topbar_menu_ic_container">
          <BsJustifyLeft
            size={24}
            className="menu_ic"
            onClick={() => setOpenMenuSidebar(true)}
          />
          <img src={logo} />
        </div>

        {/* search */}
        <div className="topbar_search_container">
          <input
            value={topbarSearch}
            onChange={(e) => setTopbarSearch(e.target.value)}
            placeholder="Search for anything"
          />
          <div>
            <BsSearch size={15} color="white" />
          </div>
        </div>

        {/* docs and user details */}
        <div className="topbar_right_container">
          <p className="topbar_docs">Docs</p>

          <BsBell size={15} />

          <div className="topbar_user_container">
            <img src={user_image} className="topbar_avatar" />
            <p>Adedeji</p>

            <BsCaretDownFill color="#213F7D" size={15} />
          </div>
        </div>
      </div>

      <MenuSidebar
        isOpen={openMenuSidebar}
        closeModal={() => setOpenMenuSidebar(false)}
      />
    </>
  );
};

export default Topbar;
