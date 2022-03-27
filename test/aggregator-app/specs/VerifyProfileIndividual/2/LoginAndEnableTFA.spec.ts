import { expect } from "chai";
import SignInPage from "../../../pages/signInPage";
import EntryPage from "../../../pages/entryPage";
import AccountPage from "../../../pages/accountPage";
import Page from "../../../pages/Page";
import WalletPage from "../../../pages/walletPage";
import AccountSecurityHelper from "../../../pages/accountSecurityHelper";
import formdata from "test/aggregator-app/data/formdata.json";


const entryPage = new EntryPage();
const signInPage = new SignInPage();
const walletPage = new WalletPage();
const accountPage = new AccountPage();
const accountSecurityHelper = new AccountSecurityHelper();

const devModeText = "Development Mode";
const email = formdata.email;
const password = formdata.password;
const newPassword = formdata.newPassword;

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
    expect(walletPage.isTotalAccountValueTextVisible()).to.be.true
  });
  
  it("Enable TFA", () => {
    accountSecurityHelper.enableTFA()

  });


  it("Log out", () => {
    accountPage.logOut();
  });




});
