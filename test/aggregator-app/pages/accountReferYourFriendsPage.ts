import Page from "./Page";

const shareYourInviteBtn = "~referShareBtn"
const InviteModal = "//android.widget.ListView[contains(@resource-id,'resolver_list')]"


export default class accountReferYourFriendsPage extends Page {

  public clickShareYourInviteBtn(): void {
    browser.isAndroid ? this.clickElement(shareYourInviteBtn) : this.clickElement(shareYourInviteBtn)
  }

  public closeInviteModal(): void {
    browser.isAndroid ? this.clickAndroidBackBtn() : browser.back() 
  }

  public isShareYourInviteBtnVisible(): boolean {
    return browser.isAndroid ? this.isElementDisplayed(shareYourInviteBtn) : this.isElementDisplayed(shareYourInviteBtn)
  }

  public isInviteModalVisible(): boolean {
    return browser.isAndroid ? this.isElementDisplayed(InviteModal) : this.isElementDisplayed(InviteModal)
  }

}
