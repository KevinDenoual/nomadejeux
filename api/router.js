/************
 * Router.js*
 ************/

// Import
const express = require('express')
const router = express.Router()

// Import de controllers
const home = require('./controler/home')
const societe = require('./controler/cataSociete')
const bois = require('./controler/cataBois')



/******** PAGE ACCUEIL **********/
// Home
router.route('/')
    .get(home.get)


/******** PAGE CATALOGUE **********/
router.route('/cataSociete')
    .get(societe.get)
router.route('/cataBois')
    .get(bois.get)

module.exports = router