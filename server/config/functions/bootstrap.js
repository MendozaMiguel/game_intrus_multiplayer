'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = cb => {
  // import socket io
  var io = require('socket.io')(strapi.server);
  // listen for user connection
  io.on('connection', (socket) => {
    // send message on user connection
    console.log('user connected');
    socket.on('new-message', (message) => {
      io.sockets.emit('new-message', message)
    });
    // listen for user diconnect
    socket.on('disconnect', () => console.log('a user disconnected'));
  });
  strapi.io = io; // register socket io inside strapi main object to use it globally anywhere

  cb();
};
