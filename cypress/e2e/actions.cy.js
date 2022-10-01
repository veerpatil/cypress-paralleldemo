/// <reference types="cypress" />

describe("Actions Demo", () => {
  beforeEach(() => {
    cy.viewport(1920,1080)
    cy.visit("/");
    cy.Login("admin@yourstore.com", "admin");
  });

  it("Type in to element", () => {
    cy.visit("/Admin/Category/Create");
    cy.get("#Name")
      //  .type("Test")
      .type("Veer", { delay: 2000 })
       .type("6@{!}", { parseSpecialCharSequences: false });
      cy.get("#Name")
      .clear()
      .type("Some Text")
      .type("{del}{selectall}{backspace}")
      .type('VeerDemo_2')


    cy.getIframe("#Description_ifr").find("p").as("myp");
    cy.get("@myp").then((ele) => {
      Cypress.$(ele).append("some text more test to be added as description");
    });
    cy.get('[name="save"]').click();
  });

  it("Working with checkboxes", () => {
    cy.visit("/Admin/Order/List");
    cy.wait(10000);
    cy.get('[type="checkbox"]').check({ force: true });
  });

  it("Working with checkboxes", () => {
    cy.visit("/Admin/Category/List");
    cy.wait(10000);
    cy.get('[type="checkbox"]').check(["10", "2"]);
    cy.get('[type="checkbox"]').uncheck(["10", "2"]);
  });

  it("Working with SelectDropdowns", () => {
    cy.visit("/Admin/Order/List");
    cy.wait(10000);
    cy.get("#OrderStatusIds_taglist").click({ force: true });
    cy.get("div[id='OrderStatusIds-list'] li").each((item, index, list) => {
      cy.get("#OrderStatusIds_taglist").click({ force: true });
      cy.get(item).click({ controlKey: true });
      cy.get("#OrderStatusIds_taglist").click({ force: true });
      cy.wait(3000);
    });
  });

  it("Working with Select/ Dropdowns", () => {
    cy.visit("/Admin/Order/List");
    cy.wait(10000);
    cy.get("#OrderStatusIds_taglist").click({ force: true });
    cy.get("div[id='OrderStatusIds-list'] li").first().click()
  });
});
