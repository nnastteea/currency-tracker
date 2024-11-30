describe("CardBank E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/cardbank");
  });

  it("Should load the map", () => {
    cy.get(".mapboxgl-map", { timeout: 10000 }).should("exist");
  });

  it("Should filter currencies by search input", () => {
    cy.get('input[placeholder="Currency search"]', { timeout: 10000 }).type(
      "Euro",
    );
    cy.get("li", { timeout: 10000 }).should("contain", "Euro");
  });

  it("Should update banks on currency selection", () => {
    cy.get('input[placeholder="Currency search"]', { timeout: 10000 }).type(
      "Euro",
    );

    cy.contains("Euro", { timeout: 10000 }).click();

    cy.get(".mapboxgl-marker", { timeout: 15000 }).should(
      "have.length.greaterThan",
      0,
    );
  });

  it("Should display popup on marker click", () => {
    cy.get(".mapboxgl-marker", { timeout: 15000 }).first().click();
    cy.get(".mapboxgl-popup", { timeout: 10000 }).should("be.visible");
  });
});
