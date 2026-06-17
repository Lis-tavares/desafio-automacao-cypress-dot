describe("Feature: Login", () => {

  it("CT-001 - Realizar login com sucesso", () => {

    cy.login();

    cy.url()
      .should("include", "/inventory.html");

    cy.contains("Products")
      .should("be.visible");

  });

  it("CT-003 - Validar login com usuário bloqueado", () => {

    cy.loginLockedUser();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Sorry, this user has been locked out");

  });

});