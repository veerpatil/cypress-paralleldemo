
import menus from '../fixtures/menu.json'

describe("Verify Menu",()=>{
  Object.keys(menus).forEach(key => {
    it("Verify SubMenu items in  " + key, ()=>{
      cy.viewport(1980,1080)
      cy.visit("https://admin-demo.nopcommerce.com/login", {retryOnNetworkFailure:false})
      cy.Login('admin@yourstore.com','admin')
      cy.wait(10000)
      let xpath = "//p[normalize-space()='"+key+"']"
      cy.xpath(xpath).first().click()
      cy.verifyMenu("li[class*='menu-open']>ul>li", menus[key])

  })
  })
    
  it("Network failure",()=>{
    cy.viewport(1980,1080)
    cy.intercept({
      method:'GET',
      url:'/Admin'

    },{forceNetworkError:true},
   { statusCode: 500,
    body: {
      error: 'Server has a day off',
    }}).as('Login')
    cy.visit('/',{retryOnNetworkFailure:true})
    cy.Login('admin@yourstore.com','admin')
    cy.get(':nth-child(5) > [href="#"] > p').click()
  })
})