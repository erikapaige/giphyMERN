const router = require('express').Router()
const { Gif } = require('../models')

router.get('/gifs', (req, res) =>{
  Gif.find()
    .then(gifs => res.json(gifs))
    .catch(err => console.error(err))
})

// saving ONE gif
router.post('/gifs', (req, res) => {
  Gif.create(req.body)
    .then(gifs => res.json(gif))
    .catch(err => console.error(err))
})

// removing ONE
router.delete('/gifs/:id', (req, res) => {
  Gif.findByIdAndDelete(req.params.id)
    .then(() =>res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router