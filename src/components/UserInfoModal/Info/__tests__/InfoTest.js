import { shallow } from "enzyme";
import React from "react";

import { findByTestAttribute } from "../../../../test/testUtils";
import Info from "../";

const getComponent = type => {
  return shallow(<Info type={type} />);
};

const testRenderInfoUser = [
  [
    {
      description: "Will render text if type is text",
      type: "text"
    }
  ],
  [
    {
      description: "Will render image if type is image",
      type: "image"
    }
  ]
];

describe.each(testRenderInfoUser)(
  "Test render info user",
  ({ description, type }) => {
    let infoComponent;

    beforeEach(() => {
      infoComponent = getComponent(type);
    });

    test(description, () => {
      expect(findByTestAttribute(infoComponent, "info-text").exists()).toBe(
        type === "text"
      );
      expect(findByTestAttribute(infoComponent, "info-image").exists()).toBe(
        type === "image"
      );
    });
  }
);
