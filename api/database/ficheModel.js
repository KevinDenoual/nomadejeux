const mongoose = require('mongoose')

const FicheSchema = new mongoose.Schema({

    titre: String, 
    description: String, 
    age: Number,
    joueur: Number,
    duree: Number,
    type: String,
    difficulte: String,
    editeur: String,
    jeuxselect: {
        societe: String,
        bois: String
    },
    createDate: {
        type: Date,
        default: new Date()
    }
})

const ficheModel = mongoose.model('fiche', FicheSchema)

module.exports = ficheModel