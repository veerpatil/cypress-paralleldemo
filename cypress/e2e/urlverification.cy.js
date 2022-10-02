describe("Verify URLS",()=>{

    beforeEach(() => {
        cy.viewport(1980, 1080);
        cy.visit("https://admin-demo.nopcommerce.com/login");
        cy.Login("admin@yourstore.com", "admin");
      });
    
 it("Check URL",()=>{
   cy.get("li[class*='nav-item']>a").invoke('attr','href')
 })

})