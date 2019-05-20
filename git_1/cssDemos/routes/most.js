const express=require('express')
const router = express.Router()
const appData=require('../public/data.json')
var most=appData.most;
router.get('/most', function (req, res) {
    res.send(most)
   })
    
 module.exports = router