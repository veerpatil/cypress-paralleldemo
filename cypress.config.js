const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const getspecFiles = require("cypress-gitlab-parallel-runner")
module.exports = defineConfig({
 
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // getspecFiles('./cypress/e2e',true)
      allureWriter(on, config);
      return config;
    },
    experimentalStudio:true,
    experimentalWebKitSupport: true,
    experimentalSessionAndOrigin:true,
    video:false,
    include: ["./node_modules/cypress", "cypress/**/*.js"],
    baseUrl:'https://admin-demo.nopcommerce.com'
  },
});