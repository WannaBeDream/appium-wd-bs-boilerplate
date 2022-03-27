import { expect } from "chai";
import SignInPage from "../../../pages/signInPage";
import EntryPage from "../../../pages/entryPage";
import AccountPage from "../../../pages/accountPage";
import Page from "../../../pages/Page";
import WalletPage from "../../../pages/walletPage";
import AccountSecurityHelper from "../../../pages/accountSecurityHelper";
import formdata from "test/aggregator-app/data/formdata.json";
import { maildevAPI } from '../../../api/mail';
import { verifyUrlFilter } from '../../../utils/verifyUrlFilter';
import { writetoJson, readJson } from '../../../utils/writetoJson';

const entryPage = new EntryPage();
const signInPage = new SignInPage();
const walletPage = new WalletPage();
const accountPage = new AccountPage();
const accountSecurityHelper = new AccountSecurityHelper();

const pathMailDev = "test/aggregator-app/data/mailDev.json"
const devModeText = "Development Mode";
const email = formdata.email;
const password = formdata.password;
const newPassword = formdata.newPassword;

const emailSuccessResult = "Your email has been verified"
const tfaSuccessResult = "Your 2FA has been enabled"

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
    accountSecurityHelper.passTFA()
    expect(walletPage.isTotalAccountValueTextVisible()).to.be.true
  });

  it("Click on verify account button", () => {
    walletPage.clickVerifyContanerTextBtn()
  });

  it("Click on resend email button", () => {
    walletPage.clickResendEmailVerificationContainerTextBtn()
  });

  it("Fetch url from maildev and send request to app url", () => {
    let verifyUrl;
    browser.call(() => {
      return maildevAPI.getMails().then(response =>
        verifyUrl = { "token": verifyUrlFilter.getVerificationToken(response) }
      ).catch(err => console.log(err))
    })

    writetoJson(JSON.stringify(verifyUrl), pathMailDev,() => {
      expect(verifyUrl.token).to.be.a("string")

      browser.call(() => {
        return maildevAPI.VerifyUrl().then(status =>
          expect(status).to.be.true
        ).catch(err => console.log(err))
      })
    })
    browser.pause(6000)
  });

  it("Click on next step button", () => {
    expect(walletPage.getResultCardText()).to.equal(emailSuccessResult)
    walletPage.clickNextRootBtn()
  });
  // next
  it("Click on next step button", () => {
    expect(walletPage.getResultCardText()).to.equal(tfaSuccessResult)
    walletPage.clickNextRootBtn()
  });

  it("Set nationality input", () => {
    walletPage.setNationalityInputValue()
  });
  it("Set gender input", () => {
    walletPage.setGenderInputValue()
  });
  it("Set country of birth input", () => {
    walletPage.setCountryOfBirthInputValue()
  });
  it("Set date of birth inputs", () => {
    walletPage.setDateOfBirthInputValue()
  });
  // next
  it("Click on next step button", () => {
    walletPage.clickNextRootBtn()
  });
  it("Set indusctry input", () => {
    walletPage.setIndusctryInput()
  });
  it("Set occupation input", () => {
    walletPage.setOccupationInput()
  });
  it("Set employer input", () => {
    walletPage.setEmployerInput("www")
    walletPage.checkAndclickVerifyContanerTextBtnHelper(()=> {
      walletPage.setIndusctryInput()
      walletPage.setOccupationInput()
      walletPage.setEmployerInput("qqqq")
    })
  });
  it("Set annual total income input", () => {
    walletPage.setAnnualTotalIncomeInput()
    walletPage.checkAndclickVerifyContanerTextBtnHelper(()=> {
      walletPage.setIndusctryInput()
      walletPage.setOccupationInput()
      walletPage.setEmployerInput("Boss of world")
      walletPage.setAnnualTotalIncomeInput()
    })
  });
  it("Set public function input", () => {
    walletPage.setPublicFunctionInput("President of Mars")
    walletPage.checkAndclickVerifyContanerTextBtnHelper(()=> {
      walletPage.setIndusctryInput()
      walletPage.setOccupationInput()
      walletPage.setEmployerInput("Boss of world")
      walletPage.setAnnualTotalIncomeInput()
      walletPage.setPublicFunctionInput("President of Mars")
    })
  });
  // next
  it("Click on next step button", () => {
    walletPage.touchAndScrollDownAp(40, 40, 20)
    walletPage.clickNextRootBtn()
    walletPage.checkAndclickVerifyContanerTextBtnHelper(()=> {
      walletPage.setIndusctryInput()
      walletPage.setOccupationInput()
      walletPage.setEmployerInput("Boss")
      walletPage.setAnnualTotalIncomeInput()
      walletPage.setPublicFunctionInput("President of Mars")
      walletPage.touchAndScrollDownAp(40, 40, 20)
      walletPage.clickNextRootBtn()
    })
  });

  it("Set country of residence input", () => {
    walletPage.setCountryOfResidenceInputPicker()
    walletPage.checkAndclickVerifyContanerTextBtnHelper(() => {
      walletPage.setCountryOfResidenceInputPicker()
    })
  });
  it("Set address line one input", () => {
    walletPage.setAddressLineOneInput("Baker street 21")
    walletPage.checkAndclickVerifyContanerTextBtnHelper(() => {
      walletPage.setCountryOfResidenceInputPicker()
      walletPage.setAddressLineOneInput("Baker street 21")
    })
  });
  it("Set city input", () => {
    walletPage.setCityTextInput("Chickago")
    walletPage.checkAndclickVerifyContanerTextBtnHelper(() => {
      walletPage.setCountryOfResidenceInputPicker()
      walletPage.setAddressLineOneInput("Baker street 21")
      walletPage.setCityTextInput("Chickago")
    })
  });
  it("Set state and region input", () => {
    walletPage.setStateRegionInput()
    walletPage.checkAndclickVerifyContanerTextBtnHelper(() => {
      walletPage.setCountryOfResidenceInputPicker()
      walletPage.setAddressLineOneInput("Baker street 21")
      walletPage.setCityTextInput("Chickago")
      walletPage.setStateRegionInput()
    })
  });
  it("Set postal zip code input", () => {
    walletPage.setPostalZipCodeInput("118229")
    walletPage.checkAndclickVerifyContanerTextBtnHelper(() => {
      walletPage.setCountryOfResidenceInputPicker()
      walletPage.setAddressLineOneInput("Baker street 21")
      walletPage.setCityTextInput("Chickago")
      walletPage.setStateRegionInput()
      walletPage.setPostalZipCodeInput("118229")
    })
  });
  it("Set local phone number input", () => {
    walletPage.setLocalPhoneNumberInput("92376948")
    walletPage.checkAndclickVerifyContanerTextBtnHelper(() => {
      walletPage.setCountryOfResidenceInputPicker()
      walletPage.setAddressLineOneInput("Baker street 21")
      walletPage.setCityTextInput("Chickago")
      walletPage.setStateRegionInput()
      walletPage.setPostalZipCodeInput("118229")
      walletPage.setLocalPhoneNumberInput("92376948")
    })
  });
  it("Set code from sms into input", () => {
    walletPage.setEnterCodeFromSmsInput("256256")
    walletPage.checkAndclickVerifyContanerTextBtnHelper(() => {
      walletPage.setCountryOfResidenceInputPicker()
      walletPage.setAddressLineOneInput("Baker street 21")
      walletPage.setCityTextInput("Chickago")
      walletPage.setStateRegionInput()
      walletPage.setPostalZipCodeInput("118229")
      walletPage.setLocalPhoneNumberInput("92376948")
      walletPage.setEnterCodeFromSmsInput("256256")
    })
  });
  // next
  it("Click on next step button", () => {
    walletPage.clickNextRootBtn()
  });





  // it("Log out", () => {
  //   accountPage.logOut();
  // });

});

