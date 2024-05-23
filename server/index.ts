/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const express = require('express')
const cors = require('cors')
// import cors from 'cors'

const PORT = process.env.PORT || 3001

const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000', // Substitua por seu domínio React
    credentials: true, // Permitir cookies
  }),
)

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

// app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
