# e2e-tests

e2e-test for Hodlnaut

- npm run test:android     (ready)
- npm run test:android:bs  (need accessibilityId for browserstack)    
- npm run test:android     (waiting for code)
- npm run test:android:bs  (need accessibilityId for browserstack)

## Setup

### Install software and check out the project

- Download and install Node.JS ( at least 10.X or 14.17.0 )
- Install Visual Studio Code
- Clone and checkout the github project
- Go to the terminal and execute "npm install" inside the checked out folder

### How to run the android tests on windows

We defined a default configuration (config/wdio.android.conf.js) for Android which will be executed when you run "npm run test:android".

Be sure that you have:

- installed the latest Android Studio version.
- Set the environment variable called 'JAVA_HOME' to the jre directory (C:\Program Files\Android\Android Studio\jre\)
- plugged in any android device into your computer. Leave it unlocked.
- allowed USB-Debugging on the connected android device
- set the platform version inside android config (config/wdio.adndroid.conf.js) to the version on your android device.

### How to run the android tests on BrowserStack

We defined a default configuration (config/wdio.android.bs.conf.js) for Android which will be executed when you run "npm run test:android:bs".

### How to run the iOS tests on BrowserStack

We defined a default configuration (config/wdio.ios.bs.conf.js) for iOS which will be executed when you run "npm run test:ios:bs".

### Linter

We use eslint to lint the typescript files. The prettier plugin in eslint tries to autoformat the code on every run.

### Test structure

All test cases should be coded inside the test folder. There you can organize tests for different apps (e.g. msb-app) and define generic classes with getters and setters to use classes those methods inside other classes.

We work with the Page Object Pattern described in <https://webdriver.io/docs/pageobjects.html>. The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.
For instance we defined the LoginPage and the element as attributes in a class and reuse them in the code.
