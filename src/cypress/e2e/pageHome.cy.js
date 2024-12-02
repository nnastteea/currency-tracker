describe("Home Component E2E Tests", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://apoi.currencyapi.com/v3/latest?apikey=cur_live_yx0eSQu4SAyABplt8gUzsvPCSq5KmHR76P9llbZT",
      {
        statusCode: 200,
        body: {
          cards: [
            {
              id: 3,
              title: "Commercial Dollar",
              value: "1.0",
              abbreviation: "USD",
            },
            {
              id: 4,
              title: "Argentine Perso",
              value: "1008.98959",
              abbreviation: "ARS",
            },
            {
              id: 5,
              title: "Canadian Dollar",
              value: "1.4",
              abbreviation: "CAD",
            },
            {
              id: 6,
              title: "Yen",
              value: "149.76213",
              abbreviation: "JPY",
            },
            {
              id: 7,
              title: "Australian Dollar",
              value: "1.5358",
              abbreviation: "AUD",
            },
            {
              id: 8,
              title: "Yuan",
              value: "7.23399",
              abbreviation: "CNY",
            },
            {
              id: 9,
              title: "Euro",
              value: "0.94508",
              abbreviation: "EUR",
            },
            {
              id: 10,
              title: "Bitcoin",
              value: "0.0001",
              abbreviation: "BTC",
            },
            {
              id: 11,
              title: "Libra",
              value: "0.7851",
              abbreviation: "GBP",
            },
          ],
        },
      },
    ).as("fetchCurrencyData");

    cy.visit("http://localhost:8080");
  });

  it("Should render header and footer", () => {
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
  });

  it("Should display currency data after loading", () => {
    cy.wait(1000);
    cy.wait("@fetchCurrencyData");
    cy.get(".block-with-cards").should("exist");
    cy.get(".block-with-cards").contains("Commercial Dollar").should("exist");
    cy.get(".block-with-cards").contains("Argentine Perso").should("exist");
  });

  it("Should open modal on card click", () => {
    cy.wait("@fetchCurrencyData");
    cy.get(".block-with-cards").contains("Commercial Dollar").click();
    cy.get("div.modal-overlay").should("exist");
    cy.get("h2").should("contain", "Commercial Dollar");
  });

  it("Should close modal when close button is clicked", () => {
    cy.wait("@fetchCurrencyData");
    cy.get(".block-with-cards").contains("Commercial Dollar").click();
    cy.get("button").contains("✖").click({ force: true });
    cy.get("div.modal-overlay").should("not.exist");
  });
});
