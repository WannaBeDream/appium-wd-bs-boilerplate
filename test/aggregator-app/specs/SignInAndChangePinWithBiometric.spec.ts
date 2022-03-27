import { expect } from "chai";
import SignInPage from "../pages/signInPage";
import EntryPage from "../pages/entryPage";
import AccountPage from "../pages/accountPage";
import Page from "../pages/entryPage";
import WalletPage from "../pages/walletPage";
import AccountSecurityHelper from "../pages/accountSecurityHelper";
import formdata from "test/aggregator-app/data/formdata.json"

const entryPage = new EntryPage();
const signInPage = new SignInPage();
const walletPage = new WalletPage();
const accountPage = new AccountPage();
const accountSecurityHelper = new AccountSecurityHelper();
const page = new Page();

const devModeText = "Development Mode";
const devEmail = "skhk@163.com";
const devPass = "hodlnaut123";
const pinEnterTitle = "Enter Pin"
const email = formdata.email;

describe("Sign in with dev mode and change pin and biometric auth", () => {
  after("tern off biometric, pin features and log out", () => {
    accountSecurityHelper.toogleBiometricAuth()
    page.deactivateApp(2);
    accountSecurityHelper.enterPin()
    accountSecurityHelper.ternOffPin()
    page.deactivateApp(2);
    accountPage.logOut();
  });

  it("Tern on dev mode", () => {
    entryPage.switchToModeByMsg(devModeText);
    expect(entryPage.getSubTitleText()).equal(devModeText);
  });

  it("Sign in with prepared data", () => {
    entryPage.clickSignIn()
    expect(signInPage.isRegisterLinkVisible()).to.be.true
    signInPage.setInputsAndLogin(devEmail, devPass)
    expect(walletPage.isTotalAccountValueTextVisible()).to.be.true
  });

  it("Enable PIN Lock function and check with deactivation", () => {
    accountSecurityHelper.ternOnPin()
    expect(accountSecurityHelper.isChangePasswordTextVisible()).to.be.true
    page.deactivateApp(2);
    expect(accountSecurityHelper.getEnterPinTitleText()).equal(pinEnterTitle)
    accountSecurityHelper.enterPin()
    expect(accountSecurityHelper.isChangePasswordTextVisible()).to.be.true
  });

  it("Disable PIN Lock function and check with deactivation", () => {
    accountSecurityHelper.ternOffPin()
    expect(accountSecurityHelper.isChangePasswordTextVisible()).to.be.true
    page.deactivateApp(2);
    expect(accountSecurityHelper.isChangePasswordTextVisible()).to.be.true
  });

  it("Enable PIN Lock function and check with deactivation again", () => {
    accountSecurityHelper.ternOnPin()
    expect(accountSecurityHelper.isChangePasswordTextVisible()).to.be.true
    page.deactivateApp(2);
    expect(accountSecurityHelper.getEnterPinTitleText()).equal(pinEnterTitle)
    accountSecurityHelper.enterPin()
    expect(accountSecurityHelper.isChangePasswordTextVisible()).to.be.true
  });

  it("Enable Biometric auth function", () => {
    accountSecurityHelper.toogleBiometricAuth()
    page.deactivateApp(2);
    page.clickAcceptAlert()

  });

  it("Disable Biometric auth function", () => {
    accountSecurityHelper.toogleBiometricAuth()
    page.deactivateApp(2);
    expect(accountSecurityHelper.getEnterPinTitleText()).equal(pinEnterTitle)
    accountSecurityHelper.enterPin()
    expect(accountSecurityHelper.isChangePasswordTextVisible()).to.be.true
  });

  it("Enable Biometric auth function again", () => {
    accountSecurityHelper.toogleBiometricAuth()
    page.deactivateApp(2);
    page.clickAcceptAlert()
  });





});
