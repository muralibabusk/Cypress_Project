const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zp4ov3',
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      this.screenshotOnRunFailure=true;
      },
    },
    reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "My HTML Test Report",
  },
  },
);
