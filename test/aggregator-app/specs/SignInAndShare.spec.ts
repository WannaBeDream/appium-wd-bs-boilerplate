import { expect } from "chai";
import SignInPage from "../pages/signInPage";
import EntryPage from "../pages/entryPage";
import AccountPage from "../pages/accountPage";
import BottomMenu from "../pages/bottomMenu";
import AccountReferYourFriendsPage from "../pages/accountReferYourFriendsPage";

const entryPage = new EntryPage();
const signInPage = new SignInPage();
const accountPage = new AccountPage();
const bottomMenu = new BottomMenu();
const accountReferYourFriendsPage = new AccountReferYourFriendsPage();

const devModeText = "Development Mode";
const devEmail = "skhk@163.com";
const devPass = "hodlnaut123";


describe("Sign in with dev mode and share application link", () => {

  before("Tern on dev mode and sign in", () => {
    entryPage.switchToModeByMsg(devModeText);
    entryPage.clickSignIn()
    signInPage.setInputsAndLogin(devEmail, devPass)
  });

  after("Log out", () => {
    accountPage.logOut();
  });


  it("Go to account page and share", () => {
    bottomMenu.clickAccountText()
    expect(accountPage.isReferFrinedsBtnVisible()).to.be.true
    accountPage.clickReferFrinedsBtn()
    expect(accountReferYourFriendsPage.isShareYourInviteBtnVisible()).to.be.true
    accountReferYourFriendsPage.clickShareYourInviteBtn()
    expect(accountReferYourFriendsPage.isInviteModalVisible()).to.be.true
    accountReferYourFriendsPage.closeInviteModal()
    expect(accountReferYourFriendsPage.isShareYourInviteBtnVisible()).to.be.true

  });


});
