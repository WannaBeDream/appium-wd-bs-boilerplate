import { expect } from "chai";
import SignInPage from "../../pages/signInPage";
import EntryPage from "../../pages/entryPage";
import AccountPage from "../../pages/accountPage";
import Page from "../../pages/Page";
import WalletPage from "../../pages/walletPage";
import AccountSecurityHelper from "../../pages/accountSecurityHelper";
import formdata from "test/aggregator-app/data/formdata.json";
import { maildevAPI } from '../../api/mail';
import { verifyUrlFilter } from '../../utils/verifyUrlFilter';
import { writetoJson, readJson } from '../../utils/writetoJson';

const entryPage = new EntryPage();
const signInPage = new SignInPage();
const walletPage = new WalletPage();
const accountPage = new AccountPage();
const accountSecurityHelper = new AccountSecurityHelper();

const devModeText = "Development Mode";
const email = "non-whitelisted@automatedtester.com";
const password = "Testtest123!";
const tfaToken = "KZZFIOKYGNSG6Z2VOF2U43DJPA3HS2KHLJCXE6TQHBGDAWCDNN4Q"

describe("Log In", () => {

  it("Switch to development mode", () => {
    entryPage.switchToModeByMsg(devModeText);
    expect(entryPage.getSubTitleText()).equal(devModeText);
  });

  it("Click sign in button", () => {
    entryPage.clickSignIn()
    expect(signInPage.isRegisterLinkVisible()).to.be.true
  });

  it("Set email and password inputs then click login button", () => {
    signInPage.setInputsAndLogin(email, password)
  });

  it("Pass TFA", () => {
    accountSecurityHelper.passTFA(tfaToken)
    expect(walletPage.isTotalAccountValueTextVisible()).to.be.true
  });

  
  it("Click on the currency of BTC and check available balance", () => {
    walletPage.clickCoinsCardTextBtc()
    expect(walletPage.checkAvailableAmountText()).to.be.true
  });
  it("Click on balance withdraw button", () => {
    walletPage.clickBalanceDetailWithdrawBtn()
  });

  


  // it("Log out", () => {
  //   accountPage.logOut();
  // });

});

