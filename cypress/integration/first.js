it("dummy test", () => {
  cy.visit("http://localhost:3000");
  cy.get(".App-link").should("contain", "Learn React");
});
