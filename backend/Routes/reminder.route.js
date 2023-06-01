const express = require('express')
const router = express.Router()
const {addReminder,deleteReminder,getAllReminder,getReminder,updateReminder} = require("../services/reminder.service")


// define the home page route
router.post('/', (req, res) => {
  addReminder(req, res)
})
// define the about route
router.put('/', (req, res) => {
    updateReminder(req, res)
})

router.delete('/', (req, res) => {
    deleteReminder(req, res)
  })

 router.get('/', (req, res) => {
    getReminder(req, res)
  })

  router.get('/all', (req, res) => {
    getAllReminder(req, res)
  })


module.exports = router