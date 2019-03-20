const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('Welcome to the Guest Support Page')
});
router.get('/register', (req, res)=>{
    res.send('Thank you wanting to register for this site!')
});

router.get('/:number/:contact', (req, res)=>{
    res.send(`Thank you! We will contact you shortly at ${req.params.number} ${req.params.contact} `)
});



module.exports = router;