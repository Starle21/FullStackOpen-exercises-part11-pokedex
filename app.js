const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

// serve static files
app.use(express.static('dist'))

// dummy endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

// version endpoint
app.get('/version', (req, res) => {

  res.send('8 merging from development') // change this string to ensure a new version deployed

})

// start the server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
