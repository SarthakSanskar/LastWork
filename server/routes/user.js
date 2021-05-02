const express = require('express');

const router = express.Router();

//middlewares
const { authCheckProfile,authCheckGetProfile } = require('../middlewares/auth');


//controllers
const { create ,viewProfile} = require('../controllers/user');



router.get('/user', (req, res) =>{
  res.json({
    data:'hey you hit user API endpoint ',
  });
});

router.post('/createProfile', authCheckProfile , create);
router.get('/getProfile/:token' , authCheckGetProfile, viewProfile);

module.exports = router;
