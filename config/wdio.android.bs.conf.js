const { config } = require("./wdio.shared.browserstack.conf");
const {envs} = require("./../env");

const newConf = {
  ...config,
  capabilities: [
    {
      app: process.env.BROWSERSTACK_APP_ID || envs.dev["browserstack-app"],
      "os_version": "10.0",
      build: "Android",
      autoWebview: false,
      device: "Samsung Galaxy S20 Ultra",
      "browserstack.appium_version": "1.20.2",
      "browserstack.debug": true,
      "browserstack.console": "verbose",
      "browserstack.networkLogs": "true",
      'browserstack.networkProfile': '4g-lte-advanced-good',
      "browserstack.enableBiometric" : "true",
      'autoGrantPermissions': 'true'
    }
  ],
};

exports.config = newConf;
