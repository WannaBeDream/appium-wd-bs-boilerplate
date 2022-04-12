import axios from 'axios'
import { writetoJson, readJson } from '../utils/writetoJson';
import { verifyUrlFilter } from '../utils/verifyUrlFilter';
import { token } from "test/aggregator-app/data/mailDev.json"
const path = "test/aggregator-app/data/mailDev.json"
const api = "https://example/api/user/email/verify?token="
const MailInstance = axios.create({
    baseURL: 'use your url',
    headers: { 'authorization': 'use your token' }
});

const appInstance = axios.create({
    headers: { 'authorization': 'use your token' }
});



export const maildevAPI = {
    async getMails() {
        try {
            const { data } = await MailInstance.get(`email`)
            return data;
        } catch (e) {
            console.log(e)
        }
    },
    async VerifyUrl() {
        try {
            let obj = readJson(path)
            const { data } = await appInstance.get(api + obj.token)
            return data.data.success;
        } catch (e) {
            console.log(e)
        }
    }
}


