import AccountPage from "./accountPage";
import AccountSecurityPage from "./accountSecurityPage";
import BottomMenu from "./bottomMenu";
import Page from "./Page";
import {getGeneratedArrayDigitsAndSet} from "./../utils/totp"
import { expect } from "chai";
import totpToken from "./../data/totpToken.json"
const bottomMenu = new BottomMenu();
const accountPage = new AccountPage();
const accountSecurityPage = new AccountSecurityPage();

const pinShieldTitle = "~pinTitle"
const firstNameText = "~accountfirstNameText"
const changePasswordText = "~ListItemChange passwordText"
const changePinSubTitleText = "~changePinSubTitleText"
const enterNewPinSubTitleTextValue = "Please enter a 6-digit PIN that will be used to unlock Hodlnaut"
const forgotPinSubTitleTextValue = "Forgot PIN? Contact our support at support@hodlnaut.com"

export default class accountSecurityHelper extends Page {


  public enterPin(): void {
    if (this.isElementDisplayed(pinShieldTitle)) {
      this.clickKeyValueOne()
      this.enterPin()
    } else return;

  }

  public ternOnPin(): void {
    bottomMenu.clickAccountText()
    expect(this.isFirstNameTextVisible()).to.be.true
    accountPage.clickAccountSecurityBtn()
    expect(this.isChangePasswordTextVisible()).to.be.true
    accountSecurityPage.clickPinLockToogler()
    expect(this.isChangePinSubTitleTextIncludeEnterMsg()).to.be.true
    accountSecurityPage.enterPin()
  }


  public ternOffPin(): void {
    bottomMenu.clickAccountText()
    expect(this.isFirstNameTextVisible()).to.be.true
    accountPage.clickAccountSecurityBtn()
    expect(this.isChangePasswordTextVisible()).to.be.true
    accountSecurityPage.clickPinLockToogler()
    expect(this.isChangePinSubTitleTextIncludeForgotMsg()).to.be.true
    accountSecurityPage.enterPin()
  }

  public toogleBiometricAuth(): void {
    bottomMenu.clickAccountText()
    expect(this.isFirstNameTextVisible()).to.be.true
    accountPage.clickAccountSecurityBtn()
    expect(this.isChangePasswordTextVisible()).to.be.true
    accountSecurityPage.clickBiometricAuthToogler()
    this.clickAcceptAlert()
  }
  public enableTFA(): void {
    bottomMenu.clickAccountText()
    expect(this.isFirstNameTextVisible()).to.be.true
    accountPage.clickAccountSecurityBtn()
    expect(this.isChangePasswordTextVisible()).to.be.true
    accountSecurityPage.clickTFAToogler()
    getGeneratedArrayDigitsAndSet(accountSecurityPage.getTextTFATextAndToken(), false)
 
  }
  public disableTFA(): void {
    bottomMenu.clickAccountText()
    expect(this.isFirstNameTextVisible()).to.be.true
    accountPage.clickAccountSecurityBtn()
    expect(this.isChangePasswordTextVisible()).to.be.true
    accountSecurityPage.clickTFAToogler()
    accountSecurityPage.clickTFACautionConfirmBtn()
    accountSecurityPage.clickTFAInput()
    getGeneratedArrayDigitsAndSet(totpToken.token, false)
 
  }
 // check for 1 and 2 flows
  public passTFA(token?: string ): void {
    typeof token === "string" ? getGeneratedArrayDigitsAndSet(token, true) :
    getGeneratedArrayDigitsAndSet(totpToken.token, false)
  }



  public changePassword(oldPass: string,newPass: string): void {
    bottomMenu.clickAccountText()
    // expect(this.isFirstNameTextVisible()).to.be.true
    accountPage.clickAccountSecurityBtn()
    // expect(this.isChangePasswordTextVisible()).to.be.true
    accountSecurityPage.clickChangePasswordBtn()
    accountSecurityPage.clickCurrentPasswordInput()
    accountSecurityPage.setCurrentPasswordInput(oldPass)
    accountSecurityPage.clickPasswordNextBtn()
    accountSecurityPage.clickNewPasswordInput()
    accountSecurityPage.setNewPasswordInput(newPass)
    accountSecurityPage.clickPasswordNextBtn()
    accountSecurityPage.clickRepeatNewPasswordInput()
    accountSecurityPage.setRepeatNewPasswordInput(newPass)
    accountSecurityPage.clickPasswordNextBtn()
    // expect(this.isChangePasswordTextVisible()).to.be.true
  }

  public isFirstNameTextVisible(): boolean {
    this.waitUntilElementDisplayed(firstNameText)
   return this.isElementDisplayed(firstNameText);
  }
  public isChangePasswordTextVisible(): boolean {
    this.waitUntilElementDisplayed(changePasswordText)
   return this.isElementDisplayed(changePasswordText);
  }
  public isChangePinSubTitleTextIncludeEnterMsg(): boolean {
   return this.getElementText(changePinSubTitleText) === enterNewPinSubTitleTextValue;
  }
  public isChangePinSubTitleTextIncludeForgotMsg(): boolean {
   return this.getElementText(changePinSubTitleText) === forgotPinSubTitleTextValue;
  }

  public isEnterPinTitleVisible(): boolean {
    return this.isElementDisplayed(pinShieldTitle);
  }
  public getEnterPinTitleText(): string {
    return this.getElementText(pinShieldTitle);
  }

}
