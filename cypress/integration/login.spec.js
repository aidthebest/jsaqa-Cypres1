beforeEach(() => {
  cy.visit("/booksNode");
});

it("Should open the main page", () => {
  cy.contains("Books list");
});

it("Should succesfully login", () => {
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать").should("be.visible");
});

it("Should not login with empty login", () => {
  cy.login(" ", "test");
  cy.checkIfElementInvalid("#mail");
  cy.get("#mail")
    .then(($el) => $el[0].validationMessage)
    .should("contain", "Please fill out this field.");
});

it("Should not login with empty password", () => {
  cy.contains("Log in").click();
  cy.get("#mail").type("test@test.com");
  cy.contains("Submit").click();
  cy.checkIfElementInvalid("#pass");
});
