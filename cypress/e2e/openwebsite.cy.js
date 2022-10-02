describe('Nop Commerce Admin Module', () => {
  it('Admin Login Test', () => {
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
    cy.viewport(1920, 1080)
    cy.visit('https://admin-demo.nopcommerce.com/login', { timeout: 60000 })
    cy.get('#Email')
      .clear()
      .type('admin@yourstore.com')
    cy.get('#Password')
      .clear()
      .type('admin')
    cy.get("button[type='submit']").click()

    cy.get("ul[class*='nav-pills']>li>a>p").as('MenuList')

    cy.get('@MenuList').each((item, index, list) => {
      expect(
        Cypress.$(item)
          .text()
          .trim()
      ).eq(menuList[index])
      //cy.wrap(item).should('contain.text',menuList[index])
    })

    cy.wait(10000)
   
    cy.get('@MenuList').each((item, index, list) => {
      if (index > 0) {
        const subMenu = new Array()
        cy.get(item).click()
        cy.get("li[class*='menu-open']>ul>li").as('SubMenuList')
        cy.get('@SubMenuList').each((item, index, list) => {
          subMenu.push(
            Cypress.$(item)
              .text()
              .trim()
          )
        })
        cy.log(subMenu)
        subMenu.splice(0,subMenu.length)
      }
    })

    /* ==== Generated with Cypress Studio ==== */
    // cy.get('.nav-pills > :nth-child(2) > :nth-child(1) > p').click();
    // cy.get('[style="display: block;"] > :nth-child(1) > .nav-link > p').click();
    // cy.get('#SearchProductName').clear('Apple MacBook Pro 13-inch');
    // cy.get('#SearchProductName').type('Apple MacBook Pro 13-inch');
    // cy.get('#SearchCategoryId').select('1');
    // cy.get('#SearchIncludeSubCategories').check();
    // cy.get('#search-products').click();
    // cy.get('#SearchIncludeSubCategories').uncheck();
    /* ==== End Cypress Studio ==== */
  })
})
