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
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(),
  creator VARCHAR(),
  date DATE,
  room VARCHAR()
);

CREATE TABLE USERS (
  /* USERS TABLE
   * userid (do we have to make this?)
   * username
  */
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR()
);

  /* BUDDIES TABLE (2-column table) (EC?)
   * users that are associated with each other
  */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*