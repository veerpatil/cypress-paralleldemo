describe("Visit", () => {
  it("Verify Cy visit PageLoadTimeOut options", () => {
    //using timeout , failOnStatusCode ,
    cy.visit("https://admin-demo.nopcommerce.com/", {
      timeout: 10000,
    }); // increase total time for the visit to resolve })
  });


  it("Verify Cy visit Basic Auth options", () => {
    //Basic AUth values with cy.visit
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
        auth: {
            username: 'admin',
            password: 'admin1',
          },
    }); 

    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
  });


  it("Cy visit with post options",()=>{
    cy.visit(
        { url: 'https://parabank.parasoft.com/parabank/',
        method: 'POST',
        body:{
        username:'veer.1109',
        password: 'veer.1109'
    }   })
    cy.wait(5000)
  })

  it("Verify cy.visit for Platform",()=>{
    cy.visit('https://www.google.com')
    .its('navigator.platform').should('equal','Linux x86_64')
  })

  it("Verify Cy visit Fail On Status Code options", () => {
    //using timeout , failOnStatusCode ,
    cy.visit("https://admin-demo.nopcommerce.com/test", {
      failOnStatusCode: false,
    }); // increase total time for the visit to resolve })
  });
});



describe("Navigation", () => {
      beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("/");
        cy.Login("admin@yourstore.com", "admin");
      });
    
      it("Verify go back or forward in the browser's history", () => {
        cy.visit("/admin");
        cy.location("pathname").should("include", "admin");
    
        cy.get(':nth-child(5) > [href="#"] > p').click();
        cy.get(".menu-open > .nav > :nth-child(1) > .nav-link").click();
        cy.location("pathname").should("include", "Discount");
    
        cy.go("back");
        cy.location("pathname").should("include", "admin");
    
        cy.go("forward");
        cy.location("pathname").should("include", "Discount");
    
        // clicking back
        cy.go(-1);
        cy.location("pathname").should("include", "admin");
    
        // clicking forward
        cy.go(1);
        cy.location("pathname").should("include", "Discount");
      });
    
      it("Verify - reload the page", () => {
        //Reloads the Page using the cache
        cy.visit("/admin");
        cy.reload();
    
        // reload the page without using the cache
        cy.reload(true);
      });
    });
    
