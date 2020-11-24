window.addEventListener('DOMContentLoaded', async () => {
    const data = await Db.getAllTeams()
    renderFavorites(data)
})

function renderFavorites(data) {
    console.log(data)
    const contsiner = document.getElementById('favorites')
	let fav = ``;
	fav = ` 
		<h4>Favorite Team</h4>
		<table id="favTeam" class="table">
			<tr>
				<th>Team ID</th>
				<th>Team Name</th>
				<th>Remove</th>
			</tr>`;
	data.forEach(function(team){
		fav +=`<tr>
			<td>${team.id}</td>
			<td>${team.name}</td>
			<td> <a onclick="deleteTeam(this,${team.id})"class="waves-effect waves-teal">Hapus</a></td>
		</tr>`;
	})
    contsiner.innerHTML = fav
}

function deleteTeam(x,id) {
	Db.delTeam(id);
	document.getElementById("favTeam").deleteRow(x.parentNode.parentNode.rowIndex);
}