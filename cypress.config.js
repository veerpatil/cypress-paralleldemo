const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio:true,
    experimentalWebKitSupport: true,
    include: ["./node_modules/cypress", "cypress/**/*.js"],
    baseUrl:'https://admin-demo.nopcommerce.com',
  },
});
