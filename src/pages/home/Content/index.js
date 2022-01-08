import "./content.scss";

import React from "react";

import AccountImage from "../../../assets/images/accounting.png";
import ComputerImage from "../../../assets/images/computer.png";
import CustomerImage from "../../../assets/images/customer.png";
import HrImage from "../../../assets/images/hr.png";
import SaleImage from "../../../assets/images/sales.png";
import SecurityImage from "../../../assets/images/security.png";
import Department from "./Department";
import Item from "./Department/Item";

const Content = () => {
  return (
    <div className="home-page-content">
      <h1>IT CLOUD SEA’S IT SERVICE</h1>
      <Department
        leftHtml={<img src={ComputerImage} />}
        rightHtml={
          <div className="department__item">
            <span className="department__item-name">Assets</span>
            <Item name="Inventory Management" description="G-Book" />
          </div>
        }
      />
      <Department
        leftHtml={
          <div className="department__item">
            <span className="department__item-name">Accounting</span>
            <Item name="Accounting" description="G-Book" />
          </div>
        }
        rightHtml={<img src={AccountImage} />}
      />
      <Department
        leftHtml={<img src={HrImage} />}
        rightHtml={
          <div className="department__item">
            <span className="department__item-name">HR & Admin</span>
            <div className="department__item-list">
              <div className="department__item-list--top">
                <Item name="Webmail" description="E-office" />
                <Item name="E- Apporval" description="E-office" />
                <Item name="E- Document" description="E-office" />
              </div>
              <div className="department__item-list--bottom">
                <Item name="E- Check in.out" description="E-office" />
                <Item name="Co-work/Project" description="E-office" />
              </div>
            </div>
          </div>
        }
      />
      <Department
        leftHtml={
          <div className="department__item">
            <span className="department__item-name">Sales</span>
            <Item
              name="Create Homepage </br> Youtube & Instagram"
              description="Fieldmake"
            />
          </div>
        }
        rightHtml={<img src={SaleImage} />}
      />
      <Department
        leftHtml={<img src={CustomerImage} />}
        rightHtml={
          <div className="department__item">
            <span className="department__item-name">Customer</span>
            <Item
              name="Customer Request Management"
              classNameWrapper="customer"
              description="OQUFIE"
            />
          </div>
        }
      />
      <Department
        leftHtml={
          <div className="department__item">
            <span className="department__item-name">Security</span>
            <Item
              name="SSL server"
              classNameWrapper="security"
              description="SECTIGO"
            />
          </div>
        }
        rightHtml={<img src={SecurityImage} />}
      />
    </div>
  );
};

export default Content;
