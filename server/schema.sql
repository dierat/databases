CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* MESSAGES TABLE
   * id
   * text
   * creator
   * date created
   * room
  */
  objectId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(120),
  username VARCHAR(30),
  createdAt DATE,
  roomname VARCHAR(30)
);

CREATE TABLE users (
  /* USERS TABLE
   * userid (do we have to make this?)
   * username
  */
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(30)
);

  /* BUDDIES TABLE (2-column table) (EC?)
   * users that are associated with each other
  */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*

 // {"username":"diedra","text":"CAN YOU SEE THIS NATE","roomname":"lobby","createdAt":"2015-07-22T03:37:26.418Z","objectId":588}