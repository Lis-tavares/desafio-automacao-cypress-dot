describe("Feature: Carrinho", () => {
  beforeEach(() => {
    cy.login();
  });

  it("CT-004 - Adicionar produto ao carrinho", () => {
    cy.addProductToCart();

    cy.get(".shopping_cart_badge").should("have.text", "1");
  });
});
