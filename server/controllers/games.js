const mongoose = require('mongoose');
var Game = require('../models/game')

module.exports.index = function(req, res){
    Game.find({}, function(err, games){
        if(err){
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success", data: games});
        }
    })
}

module.exports.create = function(req, res){
    var game = new Game({gold: 0});
    game.save(function(err){
        if(err) {
            res.json({message: "Error", error: err});
        }
        else {
            res.send(game);
        }
    })

}