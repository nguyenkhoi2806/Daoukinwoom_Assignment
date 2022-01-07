import "./menu-mobile.scss";

import React, { useState } from "react";
import { Button } from "react-bootstrap";

import MenuMobile from "./";

const MenuMobileContainer = () => {
  const [isShowMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(!isShowMenu);
  return (
    <>
      <Button
        variant="primary"
        className="menu-mobile-button"
        onClick={handleShowMenu}
      />
      {isShowMenu && <MenuMobile handleShowMenu={handleShowMenu} />}
    </>
  );
};

export default MenuMobileContainer;
