var push = require('web-push');

// let vapidkeys = push.generateVAPIDKeys();

// console.log(vapidkeys);

let vapidkeys = {
    publicKey: 'BNCk31EnLLuhBd9Qtj54q01gwCtVptBHM3awHeffcn_8c-u6ZQQPmr_8L7oDzylnncodh9tyDTAdqwMiQ2mK7sA',
    privateKey: 'enD8mYwlUvNMCGDQz8UmfwERtWHgDhOFFfEOh1t1TyE'
  }

  push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey)

  let sub = {};
  push.sendNotification(sub, 'test message')