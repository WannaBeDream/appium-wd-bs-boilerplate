
import formdata from "test/aggregator-app/data/formdata.json"

export const verifyUrlFilter = {
    getVerificationToken(data: any) {

        let filter1 = data.filter((item: any) => {
            return item.headers.to.includes(formdata.email)
        })
        let filter2 = filter1.filter((item: any) => {
            return item.headers.subject.includes("[SANDBOX] Email Verification | Hodlnaut")  
        })
        let verifyAccountUrl = filter2[filter2.length - 1].text.split(" ").find((i: string) => {
            return i.includes('https://app.u-p.cyou/user/email_confirmation?token=')
        }).replace(/\n/g, '').replace('https://app.u-p.cyou/user/email_confirmation?token=', '')

        return verifyAccountUrl;
    },
    getChangePasswordUrl(data: any) {
        let filter1 = data.filter((item: any) => {
            return item.headers.to.includes(formdata.email)  
        })
        let filter2 = filter1.filter((item: any) => {
            return item.headers.subject.includes("[SANDBOX] Resetting Your Password | Hodlnaut")  
        })
        let changePassUrl = filter2[0].text.split(" ").find((i: string) => {
            return i.includes('https://app.u-p.cyou/user/email_confirmation?token=')
        }).replace(/\n/g, '').replace("https://", '')
        return changePassUrl;
    }
}