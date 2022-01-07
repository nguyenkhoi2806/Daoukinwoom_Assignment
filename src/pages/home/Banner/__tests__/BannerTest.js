import { shallow } from "enzyme";
import React from "react";

import { findByTestAttribute } from "../../../../test/testUtils";
import Banner from "../";

const getComponent = isMobile => {
  return shallow(<Banner isMobile={isMobile} />);
};

const testRenderBanner = [
  [
    {
      description:
        "Will render menu top and menu service and not render menu mobile if is not on mobile screen",
      isMobile: false
    }
  ],
  [
    {
      description:
        "Will not render menu top and menu service, and render menu mobile if is on mobile screen",
      isMobile: true
    }
  ]
];

describe.each(testRenderBanner)(
  "Test render banner ",
  ({ description, isMobile }) => {
    let bannerComponent;

    beforeEach(() => {
      bannerComponent = getComponent(isMobile);
    });

    test(description, () => {
      expect(
        findByTestAttribute(bannerComponent, "menu-service").exists()
      ).toBe(!isMobile);

      expect(findByTestAttribute(bannerComponent, "menu-top").exists()).toBe(
        !isMobile
      );

      expect(findByTestAttribute(bannerComponent, "menu-mobile").exists()).toBe(
        isMobile
      );
    });
  }
);
