import { shallow } from "enzyme";
import React from "react";

import PriceItem from "../";

const getComponent = money => {
  return shallow(<PriceItem money={money} />);
};

const testRenderPriceItem = [
  [
    {
      description: "Will render class money free if money is 0",
      money: 0
    }
  ],
  [
    {
      description: "Will not render class money free if money is not 0",
      money: 100
    }
  ]
];

describe.each(testRenderPriceItem)(
  "Test render class money price item",
  ({ description, money }) => {
    let priceItemComponent;

    beforeEach(() => {
      priceItemComponent = getComponent(money);
    });

    test(description, () => {
      expect(
        priceItemComponent.find(".price-item__money-number-free").exists()
      ).toBe(money == 0);
    });
  }
);
