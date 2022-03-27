const { join } = require("path");
const { config } = require("./wdio.shared.appium.conf");

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: "iOS",
    // For W3C the appium capabilities need to have an extension prefix
    // This is `appium:` for all Appium Capabilities which can be found here
    // http://appium.io/docs/en/writing-running-appium/caps/
    "appium:deviceName": "iPhone 8",
    "appium:platformVersion": "14.5",
    "appium:server": " http://localhost:4723",
    // `automationName` will be mandatory, see
    // https://github.com/appium/appium/releases/tag/v1.13.0
    "appium:automationName": "XCUITest",
    // The path to the app
    "appium:app": join(process.cwd(), "./some.app"),
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    "appium:noReset": true,
    "appium:newCommandTimeout": 60,
    "appium:autoWebview": true, // !IMPORTANT
  },
];

exports.config = config;