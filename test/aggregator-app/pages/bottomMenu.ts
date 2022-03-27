import Page from "./Page";

const accountText = "//android.widget.TextView[@text='Account']"
const accountTextIos = ""
const statementsText = "//android.widget.TextView[@text='Statements']"
const statementsTextIos = ""
const depositText = "//android.widget.TextView[@text='Deposit']"
const depositTextIos = ""
const walletText = "//android.widget.TextView[@text='Wallet']"
const walletTextIos = ""

export default class BottomMenu extends Page {

  public clickAccountText(): void {
    browser.isAndroid ? this.clickElement(accountText) : this.clickElement(accountTextIos)
  }
  public clickStatementsText(): void {
    browser.isAndroid ? this.clickElement(statementsText) : this.clickElement(statementsTextIos)
  }
  public clickDepositText(): void {
    browser.isAndroid ? this.clickElement(depositText) : this.clickElement(depositTextIos)
  }
  public clickWalletText(): void {
    browser.isAndroid ? this.clickElement(walletText) : this.clickElement(walletTextIos)
  }

  public isAccountTextClickble(): boolean {
    return browser.isAndroid ? this.isElementClickable(accountText) : this.isElementClickable(accountTextIos)
  }

}
