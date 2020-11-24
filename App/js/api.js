const Api = {
    getStandings() {
        return new Promise((resolve, reject) => {
            if ("caches" in window) {
                caches.match('https://api.football-data.org/v2/competitions/2021/standings')
                .then(response => {
                    if (response) {
                        response.json().then(data => {
                            resolve(data);
                        })
                    }
                })
            }
            fetch('https://api.football-data.org/v2/competitions/2021/standings', {
                    headers: {
                        'X-Auth-Token': '7a21556e8fb74fe8863fa6c1aa6ffb21'
                    }
                })
                .then(response => {                    
                    resolve(response.json())
                })
                .catch(err => console.log(err))
        })
    },

    getTeam(id) {
        return new Promise((resolve, reject) => {
            if ("caches" in window) {
                caches.match(`https://api.football-data.org/v2/teams/${id}`)
                .then(response => {
                    if (response) {
                        response.json().then(data => {
                            resolve(data);
                        })
                    }
                })
            }
            fetch(`https://api.football-data.org/v2/teams/${id}`, {
                    headers: {
                        'X-Auth-Token': '7a21556e8fb74fe8863fa6c1aa6ffb21'
                    }
                })
                .then(response => {                    
                    resolve(response.json())
                })
                .catch(err => console.log(err))
        })
    }
}