var mongoose = require('mongoose');
const games = require('../controllers/games');

module.exports = function(app){
    app.get('/index', function(req, res) {
        games.index(req, res);
    })

    app.post('/index', function(req, res) {
        games.create(req, res);
    })

}