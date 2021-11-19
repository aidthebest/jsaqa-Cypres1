Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("checkIfElementInvalid", (selector) => {
  cy.get(selector)
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});
