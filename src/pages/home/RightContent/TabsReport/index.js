import "./styles.scss";

import React from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";

import ReportItem from "./ReportItem";

const TabReport = () => {
  return (
    <div className="tab-report">
      <Tabs
        defaultActiveKey="now"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="now" title="Now">
          <Container>
            <Row>
              <ReportItem
                number="6"
                description="<span>different</span> <span>IT Software</span> <span>Networks</span>"
              />
              <ReportItem number="32" description="partners" />
              <ReportItem number="4" description="countries" />
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="future" title="Future" />
      </Tabs>
    </div>
  );
};

export default TabReport;
