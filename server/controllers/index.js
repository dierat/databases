var models = require('../models');
var bluebird = require('bluebird');
var express = require('express');
var db = require('../db');

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

      var dbConnection = db.chatConnection();
      console.log("req.body = ", req.body);
      //look at username (users.get?), get the id,  if not in Users Table, add it (users.post?)
      var idFromUsers = "select id from users where username = '" + req.body.username +"'";
      console.log("req.body.username = ", req.body.username);
      //var idFromUsers = "select * from users";

      dbConnection.query(idFromUsers, function(err, rows){
        if (err){
          // console.log('----->rows: ', rows);
          console.log('error! ', err);
        }
        if (!rows.length){
          //if rows is empty, add req.body.username to User
          console.log('----->rows: ', rows);
          var name = {
            username: req.body.username,
            updatedAt: new Date(),
            createdAt: new Date()
          };
          dbConnection.query("insert into users set ?",name, function(err){
            if (err){
              console.log(err);
            } else {
              console.log('success in posting username to usertable');
            }
          });
        } else {
          console.log("rows = ", rows);
        }
      });
      var post = {
        username: req.body.username, //this should be gotten from users table
        text: req.body.text,
        roomname: req.body.roomname,
        createdAt: new Date()
      };
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