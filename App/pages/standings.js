window.addEventListener('DOMContentLoaded', async () => {
    const data = await Api.getStandings()
    renderStandings(data)
})

function renderStandings(data) {
    console.log(data)
    const container = document.getElementById('standings')
    let arStand = data.standings;
	let item = arStand.find( item => item.type === "TOTAL");
	let standingHTML = ` 
			<h6>Current Standing</h6>
			<table class="table highlight">
				<tr>
				<th>Position</th>
				<th>TeamName</th>
				<th>Won</th>
				<th>Draw</th>
				<th>Lost</th>
				<th>Points</th>
				</tr>`;
	item.table.forEach(function(lst){
		standingHTML += `
		<tr>
			<td>${lst.position}</td>
			<td><a href="pages/detail.html?id=${lst.team.id}"> ${lst.team.name} </a> </td>
			<td>${lst.won}</td>
			<td>${lst.draw}</td>
			<td>${lst.lost}</td>
			<td>${lst.points}</td>
		</tr>
		`
	})
    container.innerHTML = standingHTML
}