Cypress.Commands.add("login", () => {
  cy.visit("https://www.saucedemo.com/");

  cy.get('[data-test="username"]').type("standard_user");

  cy.get('[data-test="password"]').type("secret_sauce");

  cy.get('[data-test="login-button"]').click();
  
   cy.url()
    .should('include', '/inventory.html')
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
  (firstName, lastName, zipCode) => {
    cy.get('[data-test="firstName"]').type(firstName);

    cy.get('[data-test="lastName"]').type(lastName);

    cy.get('[data-test="postalCode"]').type(zipCode);
  },
);
