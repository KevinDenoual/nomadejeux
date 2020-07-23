const cardJeux = require('../database/ficheModel')

module.exports = {
    get: async (req, res) => {
        const jeuxSocieteDB = await cardJeux.find(req.params.id)
        console.log(jeuxSocieteDB);
        res.render('cataSociete', {jeuxSocieteDB})
    }
}