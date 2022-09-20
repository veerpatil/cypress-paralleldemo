// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('Login',(email,password)=>{
    cy.get('#Email')
    .clear()
    .type(email)
  cy.get('#Password')
    .clear()
    .type(password)
  cy.get("button[type='submit']").click()

})


Cypress.Commands.add("verifyMenu",(locator,menulist)=>{
  const subMenu = new Array();
  cy.get(locator).as("MenuList")
    cy.get('@MenuList').each((item,index,list) =>{
      expect(
        Cypress.$(item)
          .text()
          .trim()
      ).eq(menulist[index])
      //cy.wrap(item).should('contain.text',menuList[index])
        subMenu.push(Cypress.$(item)
        .text()
        .trim())

    })
    cy.log(subMenu)
})

