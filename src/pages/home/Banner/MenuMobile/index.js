import PropTypes from "prop-types";
import React from "react";
import { Accordion, Offcanvas } from "react-bootstrap";

import AuthenticateMenuContainer from "../../../../components/AuthenticateMenu/AuthenticateMenuContainer";
import Input from "../../../../components/Input";
import { SELECT } from "../../../../constants/inputType";
import MenuServices from "../MenuServices";

const MenuMobile = props => {
  const { handleShowMenu } = props;

  return (
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
  );
};

MenuMobile.propTypes = {
  handleShowMenu: PropTypes.func
};

MenuMobile.defaultProps = {
  handleShowMenu: () => null
};

export default MenuMobile;
