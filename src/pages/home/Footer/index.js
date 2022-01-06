import "./style.scss";

import React from "react";
import { Container, Row } from "react-bootstrap";

import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-container">
        <Row>
          <FooterItem
            name="Vietnam Office"
            content={
              <>
                <li>
                  14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh
                  city
                </li>
                <li>Business resigtration: 0315421202</li>
                <li>
                  <span>Tel: 028-3520-2367</span>
                  <span>sales@dkinno.com</span>
                </li>
                <li>Copyright 2021 DaouKiwoom Innocation C0., Ltd</li>
              </>
            }
          />
          <FooterItem
            name="Indonesia Office"
            content={
              <>
                <li>
                  Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta,
                  DKI Jakarta 12190, Indonsia
                </li>
                <li>Tel: +62-21-5082-0038</li>
              </>
            }
          />
          <FooterItem
            name="Korea Office"
            content={
              <>
                <li>
                  5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si,
                  Gyeonggi-do, Korea
                </li>
              </>
            }
          />
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
