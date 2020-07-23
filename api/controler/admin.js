const cardJeux = require ('../database/ficheModel')





module.exports = {
    get: async(req, res) => {
       
        res.render('admin/admin')
    },

    postCard: async (req, res) => {

            console.log(req.body);
        cardJeux.create(
            {
                titre: req.body.titre, 
                description: req.body.description, 
                age: req.body.age,
                joueur: req.body.joueur,
                duree: req.body.duree,
                type: req.body.type,
                difficulte: req.body.difficulte,
                editeur: req.body.editeur,
                jeuxselect: req.body.jeuxselect
            },
            (err) => {
                if (err) console.log(err);

                else res.redirect('/admin')
            }
        )
    }
}