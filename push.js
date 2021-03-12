var push = require('web-push');

let vapidkeys = {
    publicKey: 'BNCk31EnLLuhBd9Qtj54q01gwCtVptBHM3awHeffcn_8c-u6ZQQPmr_8L7oDzylnncodh9tyDTAdqwMiQ2mK7sA',
    privateKey: 'enD8mYwlUvNMCGDQz8UmfwERtWHgDhOFFfEOh1t1TyE'
  }

  push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey)

  let sub = {
        endpoint:
            'https://fcm.googleapis.com/fcm/send/fhttm3zaf9c:APA91bFR-Q-JvnudLL7FrCo7IW0_Kej1Wgt5VvJ7NOSw7F3yu8xvHuWfOMxUzDmHpMKT0hxiT1PuLFtg996nt0DCxR-ikvd28BSys4CJ2-DbzqMdZe1EdQ2UjRCbQt1EfZmQEoPxWsmM',
        expirationTime:null,
        keys:{
            p256dh:'BAcjolF2jgqKDU1cZeBRXrlefh7oObGxPa51Dxc_cBsaYAwYSac6Tj_bYI9gYWh48BxnS0YekohrjTDlrrHN6o8',
        auth:'mnsQbRRYlnANJJqv-jZhbQ'
        }
    };

  push.sendNotification(sub, 'test message')

