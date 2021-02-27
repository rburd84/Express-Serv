// const home = require('./')
const express = require('express');
const app = express();

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`It's lit Im figuring it out!!`)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`We live on port ${port}`)
})