import Page from "./Page";
import BottomMenu from "../pages/bottomMenu";
import { expect } from "chai";

const accountSecurityBtn = "~accountSecurityScreenListItem"
const logOutBtn = "~LogoutButtonLogoutPressBtnText"
const referYourFriendsBtn = "~accountRefferYourFriendsBtn";


const bottomMenu = new BottomMenu();

export default class AccountPage extends Page {

  public clickAccountSecurityBtn(): void {
    browser.isAndroid ? this.clickElement(accountSecurityBtn) : this.clickElement(accountSecurityBtn)
  }

  public clickLogOutBtn(): void {
    browser.idAndroid ? this.clickElement(logOutBtn) : this.clickElement(logOutBtn)
  }

  public clickReferFrinedsBtn(): void {
    browser.idAndroid ? this.clickElement(referYourFriendsBtn) : this.clickElement(referYourFriendsBtn)
  }

  public logOut(): void {
    // expect(bottomMenu.isAccountTextClickble()).to.be.true
    bottomMenu.clickAccountText();
    bottomMenu.clickAccountText();
    // expect(this.isLogOutBtnVisible()).to.be.true
    this.clickLogOutBtn()
  }
  

  public isLogOutBtnClickble(): boolean {
    return this.isElementClickable(logOutBtn);
  }

  public isLogOutBtnVisible(): boolean {
    return this.isElementDisplayed(logOutBtn);
  }

  public isReferFrinedsBtnVisible(): boolean {
    return browser.isAndroid ? this.isElementDisplayed(referYourFriendsBtn) : this.isElementDisplayed(referYourFriendsBtn)
  }

}
