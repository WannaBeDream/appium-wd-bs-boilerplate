import fs from 'fs'


export const writetoJson = (data: any, path: string, cb?: Function) => {
    fs.writeFile(path, data, function(error){
        if(error) throw error; 
        if (typeof  cb === "undefined") {
            return
        }
        cb()
    });

} 
export const readJson = (path: string) => {
   return JSON.parse(fs.readFileSync(path, 'utf8'));

} 
