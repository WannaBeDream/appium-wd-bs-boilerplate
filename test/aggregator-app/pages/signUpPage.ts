import Page from "./Page";

const firstNameInput = '~signUpFirstNameInput';
const lastNameInput = '~signUpLastNameInput';
const emailInput = '~signUpEmailInput'; // both variants
const passwordInput = '~signUpPasswordInput'; // both variants
const termsCheckbox = '~checkboxPressRNPCheckboxAndroid'; // both variants
const nextBtn = '~signUpNextBtn';
const backIconBtn = "~NavigationTextBackPressIconButton";
const riskDisclosureInfoHeader = "~RiskDisclosureInfo";
const riskDisclosureInfoCheckbox = "~RiskDisclosureRiskAgreeCheckbox";
const riskDisclosureInfoSubmitBtn = "~RiskDisclosureHandleRiskSubmitBtn";
// company
const corporateText = "//android.widget.TextView[@text='Signing up as a corporate?']"
const companyNameInput = "~signUpCompanyNameInput"

export default class SignUpPage extends Page {


  public clickCompanyNameInput(): void {
    browser.isAndroid ? this.clickElement(companyNameInput) : this.clickElement(companyNameInput)
  }
  public clickCorporateText(): void {
    browser.isAndroid ? this.clickElement(corporateText) : this.clickElement(corporateText)
  }
  public clickFirstNameInput(): void {
    browser.isAndroid ? this.clickElement(firstNameInput) : this.clickElement(firstNameInput)
  }
  public clickLastNameInput(): void {
    browser.isAndroid ? this.clickElement(lastNameInput) : this.clickElement(lastNameInput)
  }
  public clickPasswordInput(): void {
    this.waitUntilElementDisplayed(passwordInput);
    browser.isAndroid ? this.clickElement(passwordInput) : this.clickElement(passwordInput)
  }
  public clickTermsCheckbox(): void {
    if (this.getElementAttributeValue(termsCheckbox, "Checked")) {
      browser.isAndroid ? this.clickElement(termsCheckbox) : this.clickElement(termsCheckbox)
    }
  }
  public clickRiskInfoCheckbox(): void {
    this.waitUntilElementDisplayed(riskDisclosureInfoCheckbox);
    browser.isAndroid ? this.clickElement(riskDisclosureInfoCheckbox) : this.clickElement(riskDisclosureInfoCheckbox)
  }
  public clickRiskSubmitBtn(): void {
    this.waitUntilElementDisplayed(riskDisclosureInfoSubmitBtn);
    browser.isAndroid ? this.clickElement(riskDisclosureInfoSubmitBtn) : this.clickElement(riskDisclosureInfoSubmitBtn)
  }
  public clickNextBtn(): void {
    browser.isAndroid ? this.clickElement(nextBtn) : this.clickElement(nextBtn)
  }
  public clickEmailInput(): void {
    this.waitUntilElementDisplayed(emailInput);
    browser.isAndroid ? this.clickElement(emailInput) : this.clickElement(emailInput)
  }
  public setEmailInputAndClickNextBtn(value: string): void {
    this.clickEmailInput()
    browser.isAndroid ? this.setElementInputValue(emailInput, value) :
      this.setElementInputValue(emailInput, value);
    this.hideKeyboard()
    this.clickNextBtn()
  }
  public setPasswordInputAndTermsCheckboxAndClickNext(password: string): void {
    this.clickPasswordInput();
    this.setInputValue(passwordInput, passwordInput, password);
    this.hideKeyboard()
    this.clickTermsCheckbox();
    this.clickNextBtn()
  }
  public setNamesInputsAndClickNext(firstName: string, lastName: string) {
    this.clickFirstNameInput()
    this.setInputValue(firstNameInput, firstNameInput, firstName)
    this.clickLastNameInput()
    this.setInputValue(lastNameInput, lastNameInput, lastName)
    this.hideKeyboard()
    this.clickNextBtn()
  }
  public setCompanyNameInputAndClickNext(firstName: string) {
    this.clickCompanyNameInput()
    this.setInputValue(companyNameInput, companyNameInput, firstName)
    this.hideKeyboard()
    this.clickNextBtn()
  }

  public setRiskCheckboxAndSubmit(): void {
    this.clickRiskInfoCheckbox();
    this.clickRiskSubmitBtn();
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

  public isBackIconBtnVisible(): boolean {
    this.waitUntilElementDisplayed(backIconBtn);
    return this.isElementDisplayed(backIconBtn);
  }

  public isRiskHeaderVisible(): boolean {
    this.waitUntilElementDisplayed(riskDisclosureInfoHeader);
    return this.isElementDisplayed(riskDisclosureInfoHeader);
  }

}
