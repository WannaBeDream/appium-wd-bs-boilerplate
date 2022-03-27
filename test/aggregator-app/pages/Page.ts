/* eslint-disable @typescript-eslint/quotes */
// const doneKeyBtn = "~keyboard-done-button";

export default class Page {

  public getElement(element: string): WebdriverIO.Element {
    return $(element);
  }
  public getAllElements(element: string): WebdriverIO.ElementArray {
    return $$(element);
  }



  public getListSize(element: string): number {
    return this.getAllElements(element).length;
  }

  public getPageHTML(element: string): void {
    return this.getElement(element).getHTML();
  }

  public getElementByIndex(element: string, index: number): WebdriverIO.Element {
    return this.getAllElements(element)[index];
  }

  public isElementDisplayed(element: string): boolean {
    return this.getElement(element).isDisplayed();
  }

  public isElementClickable(element: string): boolean {
    return this.getElement(element).isClickable();
  }

  public isElementByIndexDisplayed(element: string, index: number): boolean {
    return this.getElementByIndex(element, index).isDisplayed();
  }

  public isElementByIndexClickable(element: string, index: number): boolean {
    return this.getElementByIndex(element, index).isClickable();
  }


  public waitUntilElementDisplayed(element: string): void {
    browser.waitUntil(() => {
      return this.isElementDisplayed(element);
    });
  }

  public waitUntilElementByIndexDisplayed(element: string, index: number): void {
    browser.waitUntil(() => {
      return this.isElementByIndexDisplayed(element, index);
    });
  }

  public getElementText(element: string): string {
    this.waitUntilElementDisplayed(element);
    return this.getElement(element).getText();
  }

  public getElementAttributeValue(element: string, attribute: string): string {
    // this.waitUntilElementDisplayed(element);
    return this.getElement(element).getAttribute(attribute)
  }
  public getElementByIndexText(element: string, index: number): string {
    this.waitUntilElementByIndexDisplayed(element, index);
    return this.getElementByIndex(element, index).getText();
  }

  public setElementInputValue(element: string, value: string): void {
    this.waitUntilElementDisplayed(element);
    this.getElement(element).setValue(value);
  }

  public setInputValue(element: string, elementIos: string, value: string): void {
    // this.scrollInputIntoView(element);
    browser.isAndroid ? this.setElementInputValue(element, value) :
      this.setElementInputValue(elementIos, value);
  }


  public setElementInputByIndexValue(element: string, index: number, value: string): void {
    this.waitUntilElementByIndexDisplayed(element, index);
    this.getElementByIndex(element, index).setValue(value);
  }

  public clickElement(element: string): void {
    this.waitUntilElementDisplayed(element);
    this.getElement(element).click();
  }


  public clickElementByIndex(element: string, index: number): void {
    this.waitUntilElementByIndexDisplayed(element, index);
    this.getElementByIndex(element, index).click();
  }

  public scrollElementIntoViewByIndex(element: string, index: number): void {
    this.getElementByIndex(element, index).scrollIntoView();
  }

  public scrollElementIntoView(element: string): void {
    this.getElement(element).scrollIntoView();
  }

  public clickKeyValueOne(): void {
    browser.pressKeyCode(7)
  }

  public deactivateApp(secs = 3): void {
    browser.background(secs);
  }

  public hideKeyboard(): void {
    browser.pressKeyCode(4);
  }

  public touchAndScrollDownAp(anchorPerc: number, startPointPerc: number, endPointPerc: number) {
    const { height } = browser.getWindowRect();
    const anchor = height * anchorPerc / 100;
    const startPoint = height * startPointPerc / 100;
    const endPoint = height * endPointPerc / 100;
    browser.touchPerform([
      { action: 'press', options: { x: anchor, y: startPoint } },
      { action: 'wait', options: { ms: 1000 } },
      { action: 'moveTo', options: { x: anchor, y: endPoint } },
      { action: 'release', options: {} }
    ]);
  }
  public touchAndScrollWithintElement(element: string, direction: string) {
    const { x, y } = this.getElement(element).getLocation()
    const { width, height } = this.getElement(element).getSize()

    const middleWidthElPoint = width / 2;
    const middleHeightElPoint = height / 2;

    const startMiddleXPoint = x + middleWidthElPoint;
    const startMiddleYPoint = y + middleHeightElPoint;
    const endUpMiddleYPoint = y + height;
    const endDownMiddleYPoint = y;

   const endPoint = direction === "up" ? endUpMiddleYPoint : endDownMiddleYPoint;

    browser.touchPerform([
      { action: 'press', options: { x: startMiddleXPoint, y: startMiddleYPoint } },
      { action: 'wait', options: { ms: 1000 } },
      { action: 'moveTo', options: { x: startMiddleXPoint, y: endPoint } },
      { action: 'release', options: {} }
    ]);
  }

  public keyboardDoClicksByKeys(keys: Array<String>): void {

    keys.forEach(el => {
      switch (el) {
        case "0":
          browser.pressKeyCode(7);
          break;
        case "1":
          browser.pressKeyCode(8);
          break;
        case "2":
          browser.pressKeyCode(9);
          break;
        case "3":
          browser.pressKeyCode(10);
          break;
        case "4":
          browser.pressKeyCode(11);
          break;
        case "5":
          browser.pressKeyCode(12);
          break;
        case "6":
          browser.pressKeyCode(13);
          break;
        case "7":
          browser.pressKeyCode(14);
          break;
        case "8":
          browser.pressKeyCode(15);
          break;
        case "9":
          browser.pressKeyCode(16);
          break;

        default:
          break;
      }

    });
  }

  public keyboardClickZe(): void {
    browser.pressKeyCode(7);
  }

  public waitForAlert(): void {
    browser.waitUntil(() => {
      return browser.getAlertText() !== null;
    });
  }

  public waitNoAlert(): void {
    browser.waitUntil(() => {
      return browser.getAlertText() == null;
    });
  }

  public getAlertText(): string {
    if (browser.isMobile) {
      this.waitForAlert();
      return browser.getAlertText();
    }
  }

  public waitForAlertText(text: string): void {
    browser.waitUntil(() => {
      return browser.getAlertText().includes(text);
    });
  }

  public clickAcceptAlert(): void {
    if (browser.isMobile) {
      if (browser.isAndroid) {
        this.waitForAlert();
        browser.acceptAlert();
      }
      if (browser.isIOS) {
        this.waitForAlert();
        browser.dismissAlert();
      }
    }
  }

  public clickCancelAlert(): void {
    if (browser.isMobile) {
      if (browser.isAndroid) {
        this.waitForAlert();
        browser.dismissAlert();
      }
      if (browser.isIOS) {
        this.waitForAlert();
        browser.acceptAlert();
      }
    }
  }

  alertAction(text: string, action: string): void {
    this.waitForAlertText(text);
    if (action == "accept") {
      this.clickAcceptAlert();
    } else {
      this.clickCancelAlert();
    }
  }

  public clickAndroidBackBtn(): void {
    browser.pressKeyCode(4);
  }
}
