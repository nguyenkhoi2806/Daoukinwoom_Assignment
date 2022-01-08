import { shallow } from "enzyme";
import React from "react";

import AuthenticateUser from "../../../models/AuthenticatedUser";
import { findByTestAttribute } from "../../../test/testUtils";
import AuthenticateMenu from "../";

const getComponent = authenticateUser => {
  return shallow(<AuthenticateMenu authenticateUser={authenticateUser} />);
};

const testRenderInfoUser = [
  [
    {
      description:
        "Will not render authenticate user menu if user is not authenticated",
      authenticateUser: null
    }
  ],
  [
    {
      description:
        "Will render authenticate user menu if user is authenticated",
      authenticateUser: AuthenticateUser.create({
        avatar: "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg",
        createdAt: "2021-10-21T08:36:53.248Z",
        id: "",
        name: "Jimmie Thompson",
        username: "Mona_Kassulke14"
      })
    }
  ]
];

describe.each(testRenderInfoUser)(
  "Test render authenticate user menu",
  ({ description, authenticateUser }) => {
    let authenticateMenuComponent;

    beforeEach(() => {
      authenticateMenuComponent = getComponent(authenticateUser);
    });

    test(description, () => {
      expect(
        findByTestAttribute(
          authenticateMenuComponent,
          "authenticate-menu"
        ).exists()
      ).toBe(authenticateUser !== null);

      expect(
        findByTestAttribute(authenticateMenuComponent, "login").exists()
      ).toBe(authenticateUser === null);
    });
  }
);
