beforeEach(() => {
  cy.visit("/");
});

it("shouldAddBook", () => {
  cy.login("test@test.com", "test");
  cy.addBook("Esenin", "Something go0d", "Some guy");
  cy.contains("Esenin").should("be.visible");
});

it("shouldAddBookToFavorites", () => {
  cy.login("test@test.com", "test");
  cy.addBookWithFavorite("NeEsenin", "Something", "guy");
  cy.get("h4").click;
  cy.contains("NeEsenin").should("be.visible");
});

it.only("shoulDeleteBookFromFavorites", () => {
  cy.login("test@test.com", "test");
  cy.addBookWithFavorite("12331", "Something go0d", "Some guy");
  cy.get("h4").click();
  cy.deleteBookFromFavoriteForTitle("12331");
  cy.contains("12331").should("be.false");
});
