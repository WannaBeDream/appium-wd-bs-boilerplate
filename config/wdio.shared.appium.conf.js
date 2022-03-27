const { config } = require("./wdio.shared.conf");

// overwrite because only relevant for android
const newConf = {
  ...config,
  // ====================
  // Appium Configuration
  // ====================
  services: [
    ["appium"],
    {
      args: {
          '--relaxed-security': true
    },
      command: 'appium'
    },
],
  appium: {
    // For options see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    args: ["--allow-insecure"],
  },
  port: 4723,
};

exports.config = newConf;
