import totp from "totp-generator";
import { writetoJson } from "../utils/writetoJson"
import totpToken from "test/aggregator-app/data/totpToken.json";
import Page from "../pages/Page";
import AccountSecurityPage from "../pages/accountSecurityPage";
const accountSecurityPage = new AccountSecurityPage;
const page = new Page;
const path = "test/aggregator-app/data/totpToken.json"
const pathKey = "test/aggregator-app/data/totpKey.json"

export const getGeneratedArrayDigitsAndSet = (key: string, isReady: boolean): void => {

    if (isReady) {
        const readyToken = String(totp(parseTokenFromString(key)));
        const arr = [];
        for (let index = 0; index < readyToken.length; index++) {
            arr.push(readyToken[index]);

        }
        writetoJson(JSON.stringify({ 'key': arr }), pathKey)

        accountSecurityPage.clickTFAInput()

        browser.setImplicitTimeout(2000)
        page.keyboardDoClicksByKeys(arr)

        return
    }

    const token = String(totp(parseTokenFromString(key))) // digits
    const arr = [];
    for (let index = 0; index < token.length; index++) {
        arr.push(token[index]);

    }
    writetoJson(JSON.stringify({ 'key': arr }), pathKey)

    accountSecurityPage.clickTFAInput()

    browser.setImplicitTimeout(2000)
    page.keyboardDoClicksByKeys(arr)

}


const parseTokenFromString = (text: string): string => {
    const arr = text.split(" ")
    writetoJson(JSON.stringify({ 'token': arr[arr.length - 1].toString().replace(',', '') }), path)
    return arr[arr.length - 1].toString().replace(',', '')
}