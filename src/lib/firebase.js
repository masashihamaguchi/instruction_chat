import _ from "lodash";
import { getApps, initializeApp } from '@firebase/app'

const config ={
    apiKey:process.env.API_KEY,
    authDomain:process.env.AUTH_DOMAIN,
    projectId:process.env.PROJECT_ID,
    storageBucket:process.env.STORAGE,
    appId:process.env.APP_ID,
}
let app

if(_.isEqual(getApps())){
    app =initializeApp(config)
}

export default app