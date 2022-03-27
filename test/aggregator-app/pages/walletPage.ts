import Page from "./Page";

const totalAccountValueText = "~AccountOverviewTotalAccountValueSubheading"
const verifyContanerTextBtn = "~VerifyBannerNavigateKycBtnText" // both variants
const resendEmailVerificationContainerTextBtn = "~emailVerificationResentVerificationEmailBtnText" // both variants
const nextRootBtn = "~kycNextPressRootBtn"
const coinsCardTextBtc = "//android.widget.TextView[@text='BTC']"
const amountAvailableDetailText = "~AmountDetailAvailable AmountValueText"
const balanceDetailWithdrawBtn = "~balanceDetailWithdrawBtn"
// Personal Details
const genderConfirmBtn = "//android.widget.TextView[@text='Confirm']"
const countryOption = "//android.view.ViewGroup[@resource-id='country-selector-AS']"
const dateOfBirthYearOption = "//android.widget.SeekBar[@resource-id='com.hodlnaut.mobile:id/year']"
const dateOfBirthMonthOption = "//android.widget.SeekBar[@resource-id='com.hodlnaut.mobile:id/month']"
const dateOfBirthDateOption = "//android.widget.SeekBar[@resource-id='com.hodlnaut.mobile:id/date']"
const resultCard = "~resultCardTextText"
const firstNameInput = "~FormBuilderfirstNameTextInput"
const middleNameInput = "~FormBuildermiddleNameTextInput"
const lastNameInput = "~FormBuilderlastNameTextInput"
const suffixNameInput = "~FormBuildernameSuffixTextInput"
const otherNamesInput = "~FormBuilderaliasesTextInput"
const genderInput = "~FormBuildergenderText"
const nationalityInput = "~FormBuildernationalityTouchableOpacity"
const countryOfBirthInput = "~FormBuilderbirthCountryTouchableOpacity"
const dateOfBirthInput = "~FormBuilderTextInputRNPIcon"
const dateOfBirthIcon = "~FormBuilderbirthDateTextInputRNPintoTextInput"
const datePickerOkBtn = "~FormBuilderOkBtn"
// Questionnaire
const indusctryInput = "~FormBuilderindustryText"
const indusctryInputConfirmBtn = "//android.widget.TextView[@text='Confirm']"

const occupationInput = "~FormBuilderoccupationText"
const occupationInputConfirmBtn = "//android.widget.TextView[@text='Confirm']"

const employerInput = "~FormBuilderemployerTextInput"

const annualTotalIncomeInput = "~FormBuilderincomeTotalAnnualRangeText"
const annualTotalIncomeInputConfirmBtn = "//android.widget.TextView[@text='Confirm']"

const publicFunctionBtn = "~questionnairePressIconBtn" // can not work warning!
const publicFunctionInput = "~questionnaireProminentPublicFunctionTextInput"

// Residensy
const countryOfResidenceInput = "~FormBuildercountryTouchableOpacity"
const countryOfResidenceInputPicker = "//android.widget.EditText[@text='Enter country name']"
const countryOptionSg = "//android.view.ViewGroup[@resource-id='country-selector-SG']"
const addressLineOneInput = "~FormBuilderaddressLineOneTextInput"
const addressLineTwoInput = "~FormBuilderaddressLineTwoTextInput"
const cityTextInput = "~FormBuildercityTextInput"
const stateRegionInput = "~FormBuildersubDivisionCodeText"
const stateRegionInputPicker = "//android.widget.TextView[@text='Confirm']"
const postalZipCodeInput = "~residencyPostalTextInput"
const localPhoneNumberInput = "~residencyLocalPhoneNumberTextInput"
const localPhoneNumberInputVerify = "~residencyPhonePressButtonTextText"
const enterCodeFromSmsInput = "~residencyEnterCOdeFromSmsTextInput"
const enterCodeFromSmsInputVerify = "~residencyVerifySmsBtnText"

export default class WalletPage extends Page {
  public isTotalAccountValueTextVisible(): boolean {
    this.waitUntilElementDisplayed(totalAccountValueText);
    return this.isElementDisplayed(totalAccountValueText);
  }

  public checkAvailableAmountText(): boolean {
    let text: string;
    browser.isAndroid ? text = this.getElementText(amountAvailableDetailText) : text = this.getElementText(amountAvailableDetailText)
    return ~~parseInt(text) > 0 ? true : false;
  }
  public clickCoinsCardTextBtc(): void {
    this.touchAndScrollDownAp(40, 40, 20)
    this.touchAndScrollDownAp(40, 40, 20) // add by index click
    browser.isAndroid ? this.clickElementByIndex(coinsCardTextBtc,1) : this.clickElementByIndex(coinsCardTextBtc, 1)
  }
  public clickBalanceDetailWithdrawBtn(): void {
    browser.isAndroid ? this.clickElement(balanceDetailWithdrawBtn) : this.clickElement(balanceDetailWithdrawBtn)
  }
  public clickFirstNameInput(): void {
    browser.isAndroid ? this.clickElement(firstNameInput) : this.clickElement(firstNameInput)
  }
  public clickMiddleNameInput(): void {
    browser.isAndroid ? this.clickElement(middleNameInput) : this.clickElement(middleNameInput)
  }
  public clickLastNameInput(): void {
    browser.isAndroid ? this.clickElement(lastNameInput) : this.clickElement(lastNameInput)
  }
  public clickSuffixNameInput(): void {
    browser.isAndroid ? this.clickElement(suffixNameInput) : this.clickElement(suffixNameInput)
  }
  public clickOtherNamesInput(): void {
    browser.isAndroid ? this.clickElement(otherNamesInput) : this.clickElement(otherNamesInput)
  }
  public clickGenderInput(): void {
    browser.isAndroid ? this.clickElement(genderInput) : this.clickElement(genderInput)
  }
  public clickGenderConfirmBtn(): void {
    browser.isAndroid ? this.clickElement(genderConfirmBtn) : this.clickElement(genderConfirmBtn)
  }
  public clickNationalityInput(): void {
    browser.isAndroid ? this.clickElement(nationalityInput) : this.clickElement(nationalityInput)
  }
  public clickCountryOption(): void {
    browser.isAndroid ? this.clickElement(countryOption) : this.clickElement(countryOption)
  }
  public clickCountryOfBirthInput(): void {
    browser.isAndroid ? this.clickElement(countryOfBirthInput) : this.clickElement(countryOfBirthInput)
  }
  public clickDateOfBirthInput(): void {
    browser.isAndroid ? this.clickElement(dateOfBirthInput) : this.clickElement(dateOfBirthInput)
  }
  public clickDateOfBirthIcon(): void {
    browser.isAndroid ? this.clickElement(dateOfBirthIcon) : this.clickElement(dateOfBirthIcon)
  }
  public clickDatePickerOkBtn(): void {
    browser.isAndroid ? this.clickElement(datePickerOkBtn) : this.clickElement(datePickerOkBtn)
  }
  public clickVerifyContanerTextBtn(): void {
    browser.isAndroid ? this.clickElement(verifyContanerTextBtn) : this.clickElement(verifyContanerTextBtn)
  }
  public checkAndclickVerifyContanerTextBtnHelper(cb:any): void {
    if (this.isElementDisplayed(verifyContanerTextBtn)) {
      browser.isAndroid ? this.clickElement(verifyContanerTextBtn) : this.clickElement(verifyContanerTextBtn)
      cb()
    }
  }
  public clickResendEmailVerificationContainerTextBtn(): void {
    browser.isAndroid ? this.clickElement(resendEmailVerificationContainerTextBtn) : this.clickElement(resendEmailVerificationContainerTextBtn)
  }
  // residency
  public clickCountryOfResidenceInput(): void {
    browser.isAndroid ? this.clickElement(countryOfResidenceInput) : this.clickElement(countryOfResidenceInput)
  }
  public clickCountryOfResidenceInputPicker(): void {
    browser.isAndroid ? this.clickElement(countryOfResidenceInputPicker) : this.clickElement(countryOfResidenceInputPicker)
  }
  public clickCountrySgOption(): void {
    browser.isAndroid ? this.clickElement(countryOptionSg) : this.clickElement(countryOptionSg)
  }
  public clickCityTextInput(): void {
    browser.isAndroid ? this.clickElement(cityTextInput) : this.clickElement(cityTextInput)
  }
  public clickStateRegionInput(): void {
    browser.isAndroid ? this.clickElement(stateRegionInput) : this.clickElement(stateRegionInput)
  }
  public clickStateRegionInputPicker(): void {
    browser.isAndroid ? this.clickElement(stateRegionInputPicker) : this.clickElement(stateRegionInputPicker)
  }
  public clickPostalZipCodeInput(): void {
    browser.isAndroid ? this.clickElement(postalZipCodeInput) : this.clickElement(postalZipCodeInput)
  }
  public clickLocalPhoneNumberInput(): void {
    browser.isAndroid ? this.clickElement(localPhoneNumberInput) : this.clickElement(localPhoneNumberInput)
  }
  public clickLocalPhoneNumberInputVerify(): void {
    browser.isAndroid ? this.clickElement(localPhoneNumberInputVerify) : this.clickElement(localPhoneNumberInputVerify)
  }
  public clickEnterCodeFromSmsInput(): void {
    browser.isAndroid ? this.clickElement(enterCodeFromSmsInput) : this.clickElement(enterCodeFromSmsInput)
  }
  public clickEnterCodeFromSmsInputVerify(): void {
    browser.isAndroid ? this.clickElement(enterCodeFromSmsInputVerify) : this.clickElement(enterCodeFromSmsInputVerify)
  }
  public clickAddressLineOneInput(): void {
    browser.isAndroid ? this.clickElement(addressLineOneInput) : this.clickElement(addressLineOneInput)
    browser.isAndroid ? this.clickElement(addressLineOneInput) : this.clickElement(addressLineOneInput)
  }

  // questionare 

  public clickIndusctryInput(): void {
    browser.isAndroid ? this.clickElement(indusctryInput) : this.clickElement(indusctryInput)
  }
  public clickIndusctryInputConfirmBtn(): void {
    browser.isAndroid ? this.clickElement(indusctryInputConfirmBtn) : this.clickElement(indusctryInputConfirmBtn)
  }
  public clickOccupationInput(): void {
    browser.isAndroid ? this.clickElement(occupationInput) : this.clickElement(occupationInput)
  }
  public clickOccupationInputConfirmBtn(): void {
    browser.isAndroid ? this.clickElement(occupationInputConfirmBtn) : this.clickElement(occupationInputConfirmBtn)
  }
  public clickEmployerInput(): void {
    browser.isAndroid ? this.clickElement(employerInput) : this.clickElement(employerInput)
  }
  public clickAnnualTotalIncomeInput(): void {
    browser.isAndroid ? this.clickElement(annualTotalIncomeInput) : this.clickElement(annualTotalIncomeInput)
  }
  public clickAnnualTotalIncomeInputConfirmBtn(): void {
    browser.isAndroid ? this.clickElement(annualTotalIncomeInputConfirmBtn) : this.clickElement(annualTotalIncomeInputConfirmBtn)
  }
  public clickPublicFunctionBtn(): void {
    browser.isAndroid ? this.clickElement(publicFunctionBtn) : this.clickElement(publicFunctionBtn)
  }
  public clickPublicFunctionInput(): void {
    browser.isAndroid ? this.clickElement(publicFunctionInput) : this.clickElement(publicFunctionInput)
  }

  // common
  public clickNextRootBtn(): void {
    browser.isAndroid ? this.clickElement(nextRootBtn) : this.clickElement(nextRootBtn)
  }
  public getResultCardText(): string {
    return browser.isAndroid ? this.getElementText(resultCard) : this.getElementText(resultCard)
  }

  public setInputValue(element: string, value: string): void {
    this.setElementInputValue(element, value)
    this.hideKeyboard()
  }

  // helpers


  public setFirstNameInputValue(value: string): void {
    // this.clickFirstNameInput()
    this.setInputValue(firstNameInput, value)
  }
  public setLastNameInputValue(value: string): void {
    // this.clickLastNameInput()
    this.setInputValue(lastNameInput, value)
  }
  public setMiddleNameInputValue(value: string): void {
    // this.clickMiddleNameInput()
    this.setInputValue(middleNameInput, value)
  }
  public setGenderInputValue(): void {
    this.clickGenderInput()
    this.clickGenderConfirmBtn()
  }
  public setNationalityInputValue(): void {
    this.clickNationalityInput()
    this.clickCountryOption()
  }
  public setCountryOfBirthInputValue(): void {
    this.clickCountryOfBirthInput()
    this.clickCountryOption()
  }
  public setDateOfBirthInputValue(): void {
    this.touchAndScrollDownAp(40, 40, 20)
    this.clickDateOfBirthIcon()
    this.touchAndScrollWithintElement(dateOfBirthYearOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthYearOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthYearOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthYearOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthYearOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthMonthOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthMonthOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthMonthOption, "down")
    this.touchAndScrollWithintElement(dateOfBirthMonthOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthMonthOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthMonthOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthDateOption, "up")
    this.touchAndScrollWithintElement(dateOfBirthDateOption, "up")
    this.clickDatePickerOkBtn()
    this.touchAndScrollDownAp(40, 40, 20)
  }

  // residency funcs
  public setCountryOfResidenceInputPicker(): void {
    this.clickCountryOfResidenceInput()
    this.clickCountryOfResidenceInputPicker()
    this.setInputValue(countryOfResidenceInputPicker, "Singapore")
    this.clickCountrySgOption()
  }
  public setAddressLineOneInput(value: string): void {
    this.clickAddressLineOneInput()
    this.setInputValue(addressLineOneInput, value)
  }
  public setCityTextInput(value: string): void {
    this.clickCityTextInput()
    this.setInputValue(cityTextInput, value)
  }

  public setStateRegionInput(): void {
    this.clickStateRegionInput()
    this.clickStateRegionInputPicker()
  }
  public setPostalZipCodeInput(value: string): void {
    this.clickPostalZipCodeInput()
    this.setInputValue(postalZipCodeInput, value)
  }

  public setLocalPhoneNumberInput(value: string): void {
    this.clickLocalPhoneNumberInput()
    this.setInputValue(localPhoneNumberInput, value)
  }

  public setEnterCodeFromSmsInput(value: string): void {
    this.clickEnterCodeFromSmsInput()
    this.setInputValue(enterCodeFromSmsInput, value)
  }
  // questionare funcs
  public setIndusctryInput(): void {
    this.clickIndusctryInput()
    this.clickIndusctryInputConfirmBtn()

  }
  public setOccupationInput(): void {
    this.clickOccupationInput()
    this.clickOccupationInputConfirmBtn()
    // this.touchAndScrollDownAp(40, 40, 20)
  }
  public setEmployerInput(value: string): void {
    this.clickEmployerInput()
    this.setInputValue(employerInput, value)
  }

  public setAnnualTotalIncomeInput(): void {
    this.clickAnnualTotalIncomeInput()
    // this.clickAnnualTotalIncomeInput()
    this.clickAnnualTotalIncomeInputConfirmBtn()
  }

  public setPublicFunctionInput(value: string): void {
    this.clickPublicFunctionBtn()
    this.setInputValue(publicFunctionInput, value)
  }




}