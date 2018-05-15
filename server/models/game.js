const mongoose = require('mongoose');
var GameSchema = new mongoose.Schema({
    gold: { type: Number, default: 0},
    log: {type: Array, default: []}
}, {timestamp:true});

module.exports = mongoose.model('Game', GameSchema); 
var Game = mongoose.model('Game');