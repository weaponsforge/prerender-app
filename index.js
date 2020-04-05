const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.set('trust proxy', 1)
app.use(require('prerender-node').set('prerenderServiceUrl', 'https://prerenderservice.herokuapp.com/render'))
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})