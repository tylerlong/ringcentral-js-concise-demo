import RingCentral from 'ringcentral-js-concise'
import dotenv from 'dotenv'

dotenv.config();

(async () => {
  const rc = new RingCentral(process.env.RINGCENTRAL_CLIENT_ID, process.env.RINGCENTRAL_CLIENT_SECRET, process.env.RINGCENTRAL_SERVER_URL)
  await rc.authorize({ username: process.env.RINGCENTRAL_USERNAME, extension: process.env.RINGCENTRAL_EXTENSION, password: process.env.RINGCENTRAL_PASSWORD })
  const r = await rc.get('/restapi/v1.0/account/~/extension/~')
  const extension = r.data
  console.log(extension)
})()
