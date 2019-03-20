const express = require('express');
const router = express.Router();
// let mem = require('./payments');


router.get('/', (req, res)=>{
    res.send('Welcome to the Member Only Page')
});

router.get('/signin',(req, res)=>{
    res.send('Please sign in with your Member credentials')
});

router.get('/:number/:contact', (req, res)=>{
    res.send(`Thanks ${req.params.contact}! We will contact you shortly at ${req.params.number}`)
});

router.POST('/chargebalance', (req, res)=>{
    res.send('Charge balance')
});
router.POST('/paybalance', (req, res)=>{
    res.send('Charge balance')
});
module.exports = router;