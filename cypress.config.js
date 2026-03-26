const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blogdoagi.com.br',
    specPattern: 'cypress/e2e/**/*.cy.js',
  }
});
