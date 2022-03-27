import Page from "./Page";

const loginEmailInput = '//android.widget.EditText[@content-desc="loginEmailInput"]';
const loginEmailInputIos = '~loginEmailInput';
const loginPasswordInput = '//android.widget.EditText[@content-desc="loginPasswordInput"]';
const loginPasswordInputIos = '~loginPasswordInput';
// const loginBtn = '//android.widget.Button@content-desc="loginBtn"]';
const loginBtn = '~loginBtn';
const forgotPasswordBtn = '//android.widget.Button[@content-desc="loginForgotPasswordBtn"]'; 
const forgotPasswordBtnIos = '~loginForgotPasswordBtn'; 
const registerLink = "~NavigationTextTextPressBtnText"

export default class SignInPage extends Page {


  public clickEmailInput(): void {
    browser.isAndroid ? this.clickElement(loginEmailInput) : this.clickElement(loginEmailInputIos)
  }
  
  public clickPasswordInput(): void {
    browser.isAndroid ? this.clickElement(loginPasswordInput) : this.clickElement(loginPasswordInputIos)
  }

  public clickSignInBtn(): void {
    browser.isAndroid ? this.clickElement(loginBtn) : this.clickElement(loginBtn)
  }


  public setInputsAndLogin(email: string, password: string) {
    this.clickEmailInput()
    this.setInputValue(loginEmailInput, loginEmailInputIos, email)
    this.clickPasswordInput()
    this.setInputValue(loginPasswordInput, loginPasswordInputIos, password)
    this.hideKeyboard()
    this.clickSignInBtn()
  }

  public scrollInputIntoView(element: string): void {
    browser.isAndroid ? this.scrollElementIntoView(element) :
      this.scrollElementIntoView(element);
  }

  public setInputValue(element: string, elementIos: string, value: string): void {
    // this.scrollInputIntoView(element);
    browser.isAndroid ? this.setElementInputValue(element, value) :
      this.setElementInputValue(elementIos, value);
  }

  public isRegisterLinkVisible(): boolean {
    this.waitUntilElementDisplayed(registerLink);
    return this.isElementDisplayed(registerLink);
  }

}
