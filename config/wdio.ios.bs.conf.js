const { config } = require("./wdio.shared.browserstack.conf");

const newConf = {
  ...config,
  capabilities: [
    {
      app: process.env.BROWSERSTACK_APP_ID || "put here new",
      "os_version": "14.0",
      build: "iOS",
      device: "iPhone 11",
      autoWebview: false,
      "browserstack.appium_version": "1.20.2",
      "browserstack.debug": true,
      "browserstack.console": "verbose",
      "browserstack.networkLogs": "true",
      'browserstack.networkProfile': '4g-lte-advanced-good'
    },
  ],
};

exports.config = newConf;
