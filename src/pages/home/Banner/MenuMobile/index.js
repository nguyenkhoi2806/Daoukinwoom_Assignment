import "./menu-mobile.scss";

import React, { useState } from "react";
import { Accordion, Button, Offcanvas } from "react-bootstrap";

import AuthenticateMenuContainer from "../../../../components/AuthenticateMenu/AuthenticateMenuContainer";
import Input from "../../../../components/Input";
import { SELECT } from "../../../../constants/inputType";
import MenuServices from "../MenuServices";

const MenuMobile = () => {
  const [isShowMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(!isShowMenu);

  return (
    <>
      <Button
        variant="primary"
        className="menu-mobile-button"
        onClick={handleShowMenu}
      />
      {isShowMenu && (
        <Offcanvas
          show={true}
          onHide={handleShowMenu}
          className="menu-mobile"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <AuthenticateMenuContainer />
          </Offcanvas.Header>
          <Offcanvas.Body className="menu-mobile__body">
            <Accordion defaultActiveKey={["0"]}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Service</Accordion.Header>
                <Accordion.Body>
                  <MenuServices />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Input
              classnamewrapper="menu-mobile__menu"
              type={SELECT}
              options={["En"]}
              pleaseChooseText="Language"
            />
            <Input
              classnamewrapper="menu-mobile__menu"
              type={SELECT}
              options={["Company"]}
              pleaseChooseText="Department"
            />
            <Input
              classnamewrapper="menu-mobile__menu"
              type={SELECT}
              options={["Partner Market Place"]}
              pleaseChooseText="Market"
            />
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default MenuMobile;
