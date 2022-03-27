exports.config = {
  // ====================
  // Runner and framework
  // Configuration
  // ====================
  runner: "local",
  framework: "mocha", // https://webdriver.io/docs/frameworks.html#using-mocha
  mochaOpts: {
    ui: "bdd",
    require: ["tsconfig-paths/register"],
    timeout: 200000,
  },
  sync: true,
  logLevel: "warn",
  deprecationWarnings: true,
  bail: 0,
  waitforTimeout: 30000,
  connectionRetryTimeout: 200000,
  connectionRetryCount: 3,
  reporters: [
    "spec", // https://webdriver.io/docs/spec-reporter.html
    [
      "junit",
      {
        outputDir: "./reporters/junit-results", // https://webdriver.io/docs/junit-reporter.html
      },
    ],
    // [
    //   "allure",
    //   {
    //     // https://docs.qameta.io/allure/#_mocha
    //     outputDir: "./reporters/allure-results", // https://webdriver.io/docs/allure-reporter.html
    //   },
    // ],
  ],
  maxInstances: 1,

  specs: [
    // "./test/aggregator-app/specs/SignInAndChangePinWithBiometric.spec.ts",
    // "./test/aggregator-app/specs/SignInAndShare.spec.ts",
    
    // ===> first flow
    // "./test/aggregator-app/specs/IndividualRegistrationAndForgetPassword/Registration.spec.ts",
    // "./test/aggregator-app/specs/IndividualRegistrationAndForgetPassword/LoginAndChangePassword.spec.ts",

    // "./test/aggregator-app/specs/IndividualRegistrationAndForgetPassword/LoginAndEnableTFA.spec.ts",
    // "./test/aggregator-app/specs/IndividualRegistrationAndForgetPassword/LoginAndDisableTFA.spec.ts",
    
    // "./test/aggregator-app/specs/IndividualRegistrationAndForgetPassword/Login.spec.ts",
    
    // ===> second flow - part 1
    // "./test/aggregator-app/specs/VerifyProfileIndividual/1/Registration.spec.ts",
    // "./test/aggregator-app/specs/VerifyProfileIndividual/1/LoginAndEnableTFA.spec.ts",
    // "./test/aggregator-app/specs/VerifyProfileIndividual/1/LoginAndVerifyAccount.spec.ts",
    
    // ===> second test flow part 2
    // "./test/aggregator-app/specs/VerifyProfileIndividual/2/Registration.spec.ts",
    // "./test/aggregator-app/specs/VerifyProfileIndividual/2/LoginAndEnableTFA.spec.ts",
    // "./test/aggregator-app/specs/VerifyProfileIndividual/2/LoginAndVerifyAccount.spec.ts",
    

    // ===> third flow - part 1
    "./test/aggregator-app/specs/NonWhitelistWithdraw/LoginAndWithdrawWithoutAddressBook.spec.ts",
  ],
};
