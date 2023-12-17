const express = require('express')

const app = express()
const routes = require('./routes')

app.use(routes)

app.listen(3000, () => {
  console.info('App is running on http://localhost:3000')
})