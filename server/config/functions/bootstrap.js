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

  const users = {}

  const io = require('socket.io')(strapi.server);
  // listen for user connection
  io.on('connection', (socket) => {
    socket.on('new-user', name => {
      users[socket.id] = name;
      socket.broadcast.emit('user-connected', name)
      console.log('name : ', name);
    })
    // send message on user connection
    socket.on('new-message', (message) => {
      socket.broadcast.emit('new-message', {
        message: message,
        name: users[socket.id]
      })
    });
    // listen for user diconnect
    socket.on('disconnect', () => {
      socket.broadcast.emit('user-disconnected', users[socket.id])
    });
  });
  strapi.io = io; // register socket io inside strapi main object to use it globally anywhere

  cb();
};
