window.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const teamId = urlParams.get("id")

    const data = await Api.getTeam(teamId)
    renderDetail(data)
    saveTeam(data)
})

function renderDetail(data) {
    console.log(data)
    const container = document.getElementById('detail')
    const detail =
        `<div class="container">
			<h2>${data.name}</h2>
			<div class="card-panel">
				<img class="circle responsive-img" src="${data.crestUrl}"/>
				<p>Address : ${data.address}</p>
				<p>Founded : ${data.founder}</p>
				<p>Website : ${data.website}</p>
			</div>
        </div>`

    container.innerHTML = detail
}

function saveTeam(data) {
    const button = document.getElementById('save')

    button.addEventListener('click', () => {
        Db.addTeam(data)
        console.log('Ditambahkan ke favorite!')
    })
}