var models = require('../models');
var bluebird = require('bluebird');
var express = require('express');
var db = require('../db');


var testObject = '{"results":[{"username":"diedra","text":"msg","roomname":"lobby","createdAt":"2015-07-22T03:29:25.925Z","objectId":0},{"username":"diedra","text":"A SPECIAL MESSAGE JUST FOR YOU","roomname":"lobby","createdAt":"2015-07-22T03:32:01.512Z","objectId":1},{"username":"diedra","text":"YET ANOTHER AMAZING MESSAGE","roomname":"lobby","createdAt":"2015-07-22T03:35:09.059Z","objectId":338},{"username":"diedra","text":"CAN YOU SEE THIS NATE","roomname":"lobby","createdAt":"2015-07-22T03:37:26.418Z","objectId":588}]}';


module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      var data = {results: []};
      var dbConnection = db.chatConnection();
      dbConnection.query("select * from messages", function(err, rows){
        if (err){
          conosle.log(err);
        }
        else {
          data.results = rows;
          console.log('get success: ', data);
          res.send( data );
        }
      });
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log("req.body = ", req.body);
      var post = {
        username: req.body.username,
        text: req.body.text,
        roomname: req.body.roomname,
        createdAt: new Date()
      };
      var dbConnection = db.chatConnection();
      dbConnection.query("insert into messages set ?", post, function(err){
        if (err){
          console.log(err);
        }else {
          console.log('success :)');
        }
      });
    }

  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};