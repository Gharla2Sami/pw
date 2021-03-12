var push = require('web-push');

let vapidkeys = {
    publicKey: 'BNCk31EnLLuhBd9Qtj54q01gwCtVptBHM3awHeffcn_8c-u6ZQQPmr_8L7oDzylnncodh9tyDTAdqwMiQ2mK7sA',
    privateKey: 'enD8mYwlUvNMCGDQz8UmfwERtWHgDhOFFfEOh1t1TyE'
  }

  push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey)

  let sub = {"endpoint":
        "https://fcm.googleapis.com/fcm/send/fTf4fb0AXNM:APA91bFdjV2wJLgdK5-WrLc_MyyoHX9tHpK5H7W6X8_nhzsWHOvL77A1hVgwXRw8v7YoUQpuqq_WmF-MrbKGAQP9Tz17zeVAr9w8o2fpv35ceUx3_90FaTuQBQASjlgnfaELcP1hUCvx",
    "expirationTime":null,
    "keys":{
        "p256dh":
        "BG7TJl6W1qnMDvtXzTWKttZH5ncb5Gy6ZA9Z-Mk6Lxw5x0KvgIQo9ZKDu3jZc0x5iWjUlE4J-Xc-y65LHca-pLc",
    "auth":"wnHq9XrRMLQ4r4EfvPIlUQ"
    }
};
  push.sendNotification(sub, 'test message')

