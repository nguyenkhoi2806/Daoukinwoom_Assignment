import { shallow } from "enzyme";
import React from "react";

import AuthenticateUser from "../../../models/AuthenticatedUser";
import { findByTestAttribute } from "../../../test/testUtils";
import AuthenticateMenu from "../";

const getComponent = authenticatedUser => {
  return shallow(<AuthenticateMenu authenticatedUser={authenticatedUser} />);
};

const testRenderInfoUser = [
  [
    {
      description:
        "Will not render authenticate user menu if user is not authenticated",
      authenticatedUser: new AuthenticateUser()
    }
  ],
  [
    {
      description:
        "Will render authenticate user menu if user is authenticated",
      authenticatedUser: AuthenticateUser.create({
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
  ({ description, authenticatedUser }) => {
    let authenticateMenuComponent;

    beforeEach(() => {
      authenticateMenuComponent = getComponent(authenticatedUser);
    });

    test(description, () => {
      expect(
        findByTestAttribute(
          authenticateMenuComponent,
          "authenticate-menu"
        ).exists()
      ).toBe(authenticatedUser.isAuthenticated());

      expect(
        findByTestAttribute(authenticateMenuComponent, "login").exists()
      ).toBe(!authenticatedUser.isAuthenticated());
    });
  }
);
