import Page from "./Page";

const logo = "~mainScreenLogo"
const subTitile = "~subTitleText";
const proceedBtn = "~developmentModeProceedBtn";
const devModeText = "~developmentModeText";
// const signInBtn = '//android.widget.Button[@content-desc="~logInBtn"]'; 
const signInBtn = '~logInButton'; 
// const signUpBtn = '//android.widget.Button[@content-desc="~signUpBtn"]'; 
const signUpBtn = '~signUpBtn'; 

export default class EntryPage extends Page {


  public getSubTitleText(): string {
     return this.getElementText(subTitile)
  }

  public switchToModeByMsg(msg: string): void {
    if (this.getElementText(subTitile) !== msg) {
      this.isElementDisplayed(devModeText) ? this.clickProceedBtn() : this.clickLogo()

      this.switchToModeByMsg(msg)
    } else {
      return
    }
  }

  public clickProceedBtn(): void {
    browser.isAndroid ? this.clickElement(proceedBtn) : this.clickElement(proceedBtn)
  }
  public clickLogo(): void {
    browser.isAndroid ? this.clickElement(logo) : this.clickElement(logo)
  }

  public clickSignUp(): void {
    browser.isAndroid ? this.clickElement(signUpBtn) : this.clickElement(signUpBtn)
  }

  public clickSignIn(): void {
    browser.isAndroid ? this.clickElement(signInBtn) : this.clickElement(signInBtn)
  }

}
