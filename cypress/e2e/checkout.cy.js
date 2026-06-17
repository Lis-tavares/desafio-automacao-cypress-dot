describe("Feature: Checkout", () => {

  beforeEach(() => {
    cy.login();
    cy.addProductToCart();
    cy.goToCart();
    cy.startCheckout();
  });

  it("CT-009 - Validar campos obrigatórios no checkout", () => {

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "First Name is required");

  });

  it("CT-011 - Finalizar compra com sucesso", () => {

    cy.fillCheckoutInformation(
      "Lislaine",
      "Tavares",
      "09960000"
    );

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="finish"]').click();

    cy.get('[data-test="complete-header"]')
      .should("have.text", "Thank you for your order!");

  });

});