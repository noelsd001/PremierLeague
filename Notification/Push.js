var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BN5XbXk5m1MxMxP4VYFSX55QR8BE47Jpxw7EjdgJMI0h9qRgnwj9pxN2hulcygFNHesKR2OBgsiKHM4olf-RCRQ",
    "privateKey": "zicrGbB1RKY8q8FTEC9CD-GoYmehSb7qI-g8cmN0jVg"
};
 
 
webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cSVY5Wbb2Gw:APA91bFfn_Ux8CK77xZd0hu8MMp73j214WohEJ2-ww6PDXwMcsu49DxR-bRJxYlXSJCt3Xis7RmKa0Sufc_l3SBoRJxqPutpkTWlfNTlnZnhvj520ul5Jn_nWRHRx2cNFdZFpWFz7vAv",
    "keys": {
        "p256dh": "BLhWbewHymdBskdtUR+gLzWxO+ZZkdvOwTXEXc4UxHsYSALGfDuQ/ecLq0f7UtmtHZVi/qCwpI2L3tUc0BFvmYA=",
        "auth": "1xpmi4A3dhtS/cLyCv98Mg=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '580211239650',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);