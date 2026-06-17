Cypress.Commands.add("login", () => {
  cy.visit("/");

  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("loginLockedUser", () => {
  cy.visit("/");

  cy.get('[data-test="username"]').type("locked_out_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("addProductToCart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

Cypress.Commands.add("goToCart", () => {
  cy.get(".shopping_cart_link").click();
});

Cypress.Commands.add("startCheckout", () => {
  cy.get('[data-test="checkout"]').click();
});

Cypress.Commands.add(
  "fillCheckoutInformation",
  (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
  },
);
