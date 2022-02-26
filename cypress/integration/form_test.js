describe("Lambda Eats App", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000");
  });
});
const nameInput = () => cy.get("input[name=name]");
const orderBtn = () => cy.get('button[id="order-button"]');

it("sanity check to make sure tests work", () => {
  expect(1 + 2).to.equal(3);
});

it("name input test", () => {
  nameInput()
    .should("have.value", "")
    .type("sallie")
    .should("have.value", "sallie");
});

it("checks all checkboxes with one command", () => {
  cy.get(' input[type="checkbox"]').as("checkboxes").check();

  cy.get("@checkboxes").each((checkbox) => {
    expect(checkbox[0].checked).to.equal(true);
  });
});

it("checks to see if you can submit a form", () => {
  cy.get("form").submit();
});
