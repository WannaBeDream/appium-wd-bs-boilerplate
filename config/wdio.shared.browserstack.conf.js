const { config } = require("./wdio.shared.conf");
const {envs} = require("./../env");

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
const newConf = {
  ...config,
  protocol: "https",
  hostname: "hub.browserstack.com",
  // port: 443,
  path: "/wd/hub",
  maxInstances: 1,
  // 'automationName': 'Appium',
  user: process.env.BROWSERSTACK_USERNAME || envs.dev["browserstack-user"],
  key: process.env.BROWSERSTACK_ACCESS_KEY || envs.dev["browserstack-key"],
};

exports.config = newConf;
