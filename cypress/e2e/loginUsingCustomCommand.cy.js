import users from '../fixtures/users.json'

describe("Login Test",()=>{

  beforeEach(() => {
    cy.viewport(1980, 1080);
    cy.Login("admin@yourstore.com", "admin");
    cy.visit("/admin");
    // cy.Login("admin@yourstore.com", "admin");
  });
  Object.values(users).forEach(user => {
    it("Login Using Custom Command", ()=>{
      const menuList = [
          'Dashboard',
          'Catalog',
          'Sales',
          'Customers',
          'Promotions',
          'Content management',
          'Configuration',
          'System',
          'Reports',
          'Help'
        ]
        const Promotions = [
          'Discounts',
          'Affiliates',
          'Newsletter subscribers',
          'Campaigns'
        ]
      cy.viewport(1980,1080)
      // cy.visit("https://admin-demo.nopcommerce.com/login")
      // cy.Login(user,'admin')
      cy.verifyMenu("ul[class*='nav-pills']>li>a>p",menuList)
      cy.wait(10000)
      cy.get(':nth-child(5) > [href="#"] > p').click()
      cy.verifyMenu("li[class*='menu-open']>ul>li", Promotions)

  })
  })
    
})