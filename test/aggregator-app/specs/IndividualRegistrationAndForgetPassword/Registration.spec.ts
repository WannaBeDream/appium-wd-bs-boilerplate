import { expect } from "chai";
import SignInPage from "../../pages/signInPage";
import EntryPage from "../../pages/entryPage";
import AccountPage from "../../pages/accountPage";
import Page from "../../pages/Page";
import WalletPage from "../../pages/walletPage";
import SignUpPage from "../../pages/signUpPage";
import AccountSecurityHelper from "../../pages/accountSecurityHelper";
import formdata from "test/aggregator-app/data/formdata.json"
import { maildevAPI } from '../../api/mail';
import { writetoJson, readJson } from '../../utils/writetoJson';
import randomEmail from 'random-email';

const pathFormData = "test/aggregator-app/data/formdata.json"

const entryPage = new EntryPage();
const signInPage = new SignInPage();
const signUpPage = new SignUpPage();
const walletPage = new WalletPage();
const accountPage = new AccountPage();
const accountSecurityHelper = new AccountSecurityHelper();
const page = new Page();

const devModeText = "Development Mode";

const random = randomEmail({ domain: 'automatedtesterf.com' })
const randomLastName = random.replace('@automatedtesterf.com', '')
const data = {
  "email": random,
  "password": "hodlnaut123",
  "firstName": "Automated Tester",
  "lastName": randomLastName,
  "newPassword": "hodlnaut123New"
}

describe("Registration", () => {

  it("Switch to development mode", () => {


    writetoJson(JSON.stringify(data), pathFormData)
    entryPage.switchToModeByMsg(devModeText);
    expect(entryPage.getSubTitleText()).equal(devModeText);

  });

  it("Set first name and last name inputs", () => {
    entryPage.clickSignUp()
    signUpPage.setNamesInputsAndClickNext(data.firstName, data.lastName)
  });

  it("Set email input", () => {
    signUpPage.setEmailInputAndClickNextBtn(data.email)
  });

  it("Set password input and terms checkbox", () => {
    signUpPage.setPasswordInputAndTermsCheckboxAndClickNext(data.password)
  });

  it("Set risk checkbox and click on submit button", () => {
    signUpPage.setRiskCheckboxAndSubmit()
  });

  it("Log out", () => {
    accountPage.logOut();
  });


});
