import Page from "./Page";

const auth2FAToogler = "//android.view.ViewGroup[@content-desc='accountSecurityScreenListItem']/android.view.ViewGroup/android.view.ViewGroup[2]"
const auth2FATooglerIos = ""
const pinLockToogler = "//android.view.ViewGroup[@content-desc='security3ListItem']/android.view.ViewGroup/android.widget.Switch"
const PinLockTooglerIos = ""
const biometricToogler = "//android.view.ViewGroup[@content-desc='security4ListItem']/android.view.ViewGroup/android.widget.Switch"
const biometricTooglerIos = ""
const changePinTitle = "~changePinTitle"
const changePasswordBtn = "~security1ListItem"
const currentPasswordInput = "~changePassCurrentSecureInput";
const newPasswordInput = "~changePassNewSecureInput";
const newRepeatPasswordInput = "~changePassRepeatSecureInput";
const currentPasswordNextBtn = "~changePassStepBtn";
const TFAInput = "~atomsPinCTouchableOpacity";
const TFATextAndToken = "~TFASwitchDownloadGoogleAuthText";
const TFAToogler = "~TFASwitchOn2faSwitchSwitch";
const TFACautionConfirmBtn = "~WarningCautionConfirmBtn";

const biometricText ="~ListItemBiometric Auth (Beta)Text"


export default class AccountSecurityPage extends Page {

  public clickAuth2FAToogler(): void {
    browser.isAndroid ? this.clickElement(auth2FAToogler) : this.clickElement(auth2FATooglerIos)
  }
  public clickPinLockToogler(): void {
    browser.isAndroid ? this.clickElement(pinLockToogler) : this.clickElement(PinLockTooglerIos)
  }
  public clickBiometricAuthToogler(): void {
    browser.isAndroid ? this.clickElement(biometricToogler) : this.clickElement(biometricTooglerIos)
  }
  public clickTFAInput(): void {
    browser.isAndroid ? this.clickElement(TFAInput) : this.clickElement(TFAInput)
  }
  public clickTFAToogler(): void {
    browser.isAndroid ? this.clickElement(TFAToogler) : this.clickElement(TFAToogler)
  }
  public clickTFACautionConfirmBtn(): void {
    browser.isAndroid ? this.clickElement(TFACautionConfirmBtn) : this.clickElement(TFACautionConfirmBtn)
  }
  public getTextTFATextAndToken(): string {
    return this.getElementText(TFATextAndToken)
  }

  public clickChangePasswordBtn(): void {
    browser.isAndroid ? this.clickElement(changePasswordBtn) : this.clickElement(changePasswordBtn)
  }
  public clickCurrentPasswordInput(): void {
    browser.isAndroid ? this.clickElement(currentPasswordInput) : this.clickElement(currentPasswordInput)
  }
  public clickNewPasswordInput(): void {
    browser.isAndroid ? this.clickElement(newPasswordInput) : this.clickElement(newPasswordInput)
  }
  public clickRepeatNewPasswordInput(): void {
    browser.isAndroid ? this.clickElement(newRepeatPasswordInput) : this.clickElement(newRepeatPasswordInput)
  }
  public clickPasswordNextBtn(): void {
    browser.isAndroid ? this.clickElement(currentPasswordNextBtn) : this.clickElement(currentPasswordNextBtn)
  }
  public setCurrentPasswordInput(data: string): void {
    this.setInputValue(currentPasswordInput,currentPasswordInput,data);
    this.hideKeyboard()
  }
  public setNewPasswordInput(data: string): void {
    this.setInputValue(newPasswordInput,newPasswordInput,data);
    this.hideKeyboard()
  }
  
  public setRepeatNewPasswordInput(data: string): void {
    this.setInputValue(newRepeatPasswordInput,newRepeatPasswordInput,data);
    this.hideKeyboard()
  }
  
  public enterPin(): void { // TODO
    if(this.isElementDisplayed(changePinTitle)) {
      this.clickKeyValueOne()
      this.enterPin()
    } else return;

  }
  
  

}
