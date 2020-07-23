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
const sdex = require('./controler/sdex')
const admin = require('./controler/admin')


/******** PAGE ACCUEIL **********/
// Home
router.route('/')
    .get(home.get)


/******** PAGE CATALOGUE **********/
router.route('/cataSociete')
    .get(societe.get)
router.route('/cataBois')
    .get(bois.get)


/******** PAGE ADMIN **********/
// Connexion
router.route('/sdex')
    .get(sdex.get)
// Home admin
router.route('/admin')
    .get(admin.get)

router.route('/admin/createJeux')
    .post(admin.postCard)

module.exports = router