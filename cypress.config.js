const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
    supportFile: false,
    // baseUrl: 'http://localhost:8080',
    baseUrl: "https://demo.testkube.io",
    env: {
      API_URL: "https://demo.testkube.io/results/v1/",
    },
    video: false, //disabled because of this issue: https://github.com/kubeshop/testkube/issues/1540#issuecomment-1304850859
  },
});
