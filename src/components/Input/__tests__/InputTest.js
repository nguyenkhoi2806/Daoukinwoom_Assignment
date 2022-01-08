import { shallow } from "enzyme";
import React from "react";

import { PASSWORD, SELECT, TEXT } from "../../../constants/inputType";
import { findByTestAttribute } from "../../../test/testUtils";
import Input from "../";

const getComponent = (type, label = null) => {
  return shallow(<Input type={type} label={label} />);
};

const testRenderInput = [
  [
    {
      description: "Will render input text with type is text",
      type: TEXT
    }
  ],
  [
    {
      description: "Will render input password with type is password",
      type: PASSWORD
    }
  ],
  [
    {
      description: "Will render select when type is select",
      type: SELECT
    }
  ]
];

describe.each(testRenderInput)(
  "Test render Input by type",
  ({ description, type }) => {
    let inputComponent;

    beforeEach(() => {
      inputComponent = getComponent(type);
    });

    test(description, () => {
      expect(findByTestAttribute(inputComponent, type).exists()).toBe(true);
    });
  }
);
