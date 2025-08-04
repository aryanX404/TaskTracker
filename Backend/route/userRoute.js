const express = require('express');
const router = express.Router();
const {handleLoginUser, handleSignUpUser} = require('../controller/handleUser')

router.post('/signup', handleSignUpUser);
router.post('/login', handleLoginUser);

module.exports = router