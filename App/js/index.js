window.addEventListener('DOMContentLoaded', () => {
    // Navigation initialization
    const element = document.querySelectorAll('.sidenav')
    M.Sidenav.init(element)

})

if ('serviceWorker' in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
        .register("../serviceWorker.js")
        .then(function() {
            console.log("Pendaftaran ServiceWorker berhasil")
            requestPermission()
        })
        .catch(function() {
            console.log("Pendaftaran ServiceWorker gagal")
        })
    })
} else {
    console.log("ServiceWorker belum didukung browser ini.")
}

function requestPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(function (result) {
            if (result === "denied") {
                console.log("Fitur notifikasi tidak diijinkan.")
                return
            } else if (result === "default") {
                console.error("Pengguna menutup kotak dialog permintaan ijin.")
                return
            }

            navigator.serviceWorker.getRegistration().then(function(reg) {
                if (('PushManager' in window)) {
                    navigator.serviceWorker.getRegistration().then(function(registration) {
                        registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: urlBase64ToUint8Array("BN5XbXk5m1MxMxP4VYFSX55QR8BE47Jpxw7EjdgJMI0h9qRgnwj9pxN2hulcygFNHesKR2OBgsiKHM4olf-RCRQ")
                        }).then(function(subscribe) {
                            console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint)
                            console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
                                null, new Uint8Array(subscribe.getKey('p256dh')))));
                            console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
                                null, new Uint8Array(subscribe.getKey('auth')))))
                        }).catch(function(e) {
                            console.error('Tidak dapat melakukan subscribe ', e.message)
                        })
                    })
                }

            })
        })
    }
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4)
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/')
    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}