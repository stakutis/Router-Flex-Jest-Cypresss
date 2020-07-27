it("Basic startup test", () => {
  cy.visit("http://localhost:3000");
  cy.get(".App-header-middle").should("contain", "Welcome to my TEST app!");
});

it("can assert on the alert text visiting un-auth Page-1", () => {
  const stub = cy.stub();

  cy.visit("http://localhost:3000");
  cy.on("window:alert", stub);

  cy.get(".App-link")
    .first()
    .click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith("Please click Login FIRST!");
    });
});

it("Login test", () => {
  cy.visit("http://localhost:3000");
  cy.get(".App-link").contains("Login/Out").parent().click();
  cy.get(".Main").contains("This is page 2 authenticated");
});
