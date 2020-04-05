require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const serviceUrl = process.env.NODE_ENV === 'production' ?
  process.env.PRERENDER_SERVICE_URL :  process.env.PRERENDER_SERVICE_URL_DEV

app.set('trust proxy', 1)
app.use(require('prerender-node').set('prerenderServiceUrl', serviceUrl))
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})