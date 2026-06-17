beforeEach(() => {
  cy.login();
});

it("CT-009 - Validar campos obrigatórios", () => {
  cy.addProductToCart();
  cy.goToCart();
  cy.startCheckout();

  cy.get('[data-test="continue"]').click();

  cy.get('[data-test="error"]').should("contain", "First Name is required");
});

it("CT-011 - Finalizar compra com sucesso", () => {
  cy.addProductToCart();
  cy.goToCart();
  cy.startCheckout();

  cy.fillCheckoutInformation("Teste", "Silva", "09960000");

  cy.get('[data-test="continue"]').click();

  cy.get('[data-test="finish"]').click();

  cy.get('[data-test="complete-header"]').should(
    "have.text",
    "Thank you for your order!",
  );
});
