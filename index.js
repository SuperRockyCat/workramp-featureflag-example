require('dotenv').config()
const express = require('express')
const app = express()
const uuid = require('uuid/v4')
const LaunchDarkly = require('launchdarkly-node-server-sdk')
const port = 3000

const ldClient = LaunchDarkly.init(process.env.LAUNCHDARKLY_SDK_KEY)

const user = {
    "firstName":"Super",
    "lastName":"Coolguy",
    "key": uuid(),
    "email":"SuperCoolguy@example.com",
    "custom":{
       "groups":"beta_testers"
    }
  };

app.get('/', async (req,res) => {
    let variation = await ldClient.variation("super-cool-string", user, false)
    res.send(`${variation}`)
})

app.listen(port, () => {
    console.log(`workramp-featureflag-example listening at http://localhost:${port}`)
})