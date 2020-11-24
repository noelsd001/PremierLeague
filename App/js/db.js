const dbPromise = idb.open('app', 1, upgradeDb => {
    const teamsStore = upgradeDb.createObjectStore('teams', {keyPath: 'id'})
    teamsStore.createIndex('name', 'name', {unique: true})
})

const Db = {
    addTeam(team) {
        return dbPromise.then(db => {
            const tx = db.transaction('teams', 'readwrite')
            tx.objectStore('teams').put(team)
            return tx.complete
        })
    },
	
	delTeam(id){
		return dbPromise.then(db => {
			const tx = db.transaction('teams', 'readwrite')
			tx.objectStore('teams').delete(id)
			return tx.complete
		})
	},

    getTeam(id) {
        return dbPromise.then(db => {
            const tx = db.transaction('teams', 'readonly')
            return tx.objectStore('teams').get(id)
        })
    },

    getAllTeams() {
        return dbPromise.then(db => {
            const tx = db.transaction('teams', 'readonly')
            return tx.objectStore('teams').getAll()
        })
    }
}