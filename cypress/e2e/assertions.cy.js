import users from "../fixtures/users.json";

describe("Assertions Demo", () => {
  // before(() => {
  //  // cy.viewport(1980, 1080);
  //   cy.visit("https://admin-demo.nopcommerce.com/login");
  //   cy.Login("admin@yourstore.com", "admin");
  // });
  beforeEach(() => {
    cy.viewport(1980, 1080);
    cy.Login("admin@yourstore.com", "admin");
   
    // cy.Login("admin@yourstore.com", "admin");
  });

  it("Text equal check", () => {
    cy.visit("/admin");
    cy.get(".content-header > h1")
      .should("be.visible")
      .then((h) => h.text().trim())
      .should("eq", "Dashboard");

    cy.get(".content-header > h1")
      .invoke("text")
      .should("contain", "Dashboard");
    cy.get(".content-header > h1")
      .invoke("text")
      .then((texts) => {
        expect(texts.trim()).to.be.eq("Dashboard");
      });
  });
  it("Visibility Check", () => {
    cy.visit("/admin");
    cy.get(
      "#nopcommerce-common-statistics-card > .card-header > .card-tools > .btn > .fas"
    ).click();
    cy.get(":nth-child(1) > .small-box > .inner").should('not.be.visible')
    cy.get(
      "#nopcommerce-common-statistics-card > .card-header > .card-tools > .btn > .fas"
    ).click();
    cy.get(":nth-child(1) > .small-box > .inner").should("be.visible");
    cy.get(":nth-child(1) > .small-box > .inner").should(
      "have.css",
      "display",
      "block"
    );
    cy.get(":nth-child(1) > .small-box > .inner").then(($ele) => {
      expect($ele).to.have.css("display", "block");
    });
  });

  it(" CSS Verification", () => {
    cy.visit("/admin");
    cy.wait(5000);
    cy.get(".small-box.bg-info").should(
      "have.css",
      "background-color",
      "rgb(23, 162, 184)"
    );
    cy.get(".small-box.bg-info").should(
        "have.css",
        "font-size",
        "16px"
      );
    cy.get(".small-box.bg-info").then(($ele) => {
      expect($ele).to.have.css("background-color", "rgb(23, 162, 184)");
    });
  });

  it(" Verify Length , List of Elements", () => {
    cy.visit("/Admin/Product/List");
    cy.wait(5000);
    cy.get(
      "div[class='dataTables_scrollHeadInner'] table[role='grid'] thead th"
    ).should("have.length", "8");
    cy.get(
      "div[class='dataTables_scrollHeadInner'] table[role='grid'] thead th"
    ).then(($ele) => {
      expect($ele).to.have.length(8);
    });

    // cy.get(
    //   "div[class='dataTables_scrollHeadInner'] table[role='grid'] thead th"
    // ).each((item, index, list) => {
    //   if (index > 0) {
    //     cy.get(item)
    //       .invoke("text")
    //       .should("be.oneOf", [
    //         "Picture",
    //         "Product name",
    //         "SKU",
    //         "Price",
    //         "Stock quantity",
    //         "Published",
    //         "Edit",
    //       ]);
    //   }
    // });

    let headers = users["tablHeader"];
    cy.get(
      "div[class='dataTables_scrollHeadInner'] table[role='grid'] thead th"
    ).each((header, index, list) => {
      cy.get(header)
        .invoke("text")
        .then((text) => expect(text).to.eql(headers[index]));
    });
  });

  it("Assert check uncheck", () => {
    cy.visit("/Admin/Order/List");
    cy.wait(10000);
    cy.get('[type="checkbox"]').check({ force: true });
    cy.get("[type='checkbox']").should("be.checked");
    cy.get('[type="checkbox"]').uncheck({ force: true });
    cy.get("[type='checkbox']").should("not.be.checked");
  });

  it("Assert empty and property", () => {
    cy.visit("/Admin/Product/List");
    cy.get("#SearchProductName").should("be.empty");
    // cy.get("#SearchProductName").type("Veer");
    cy.get("#SearchProductName").should("have.prop", "type", "text");
    
    cy.get("#SearchProductName").should("have.prop", "name", "SearchProductName");
    
  });
});
