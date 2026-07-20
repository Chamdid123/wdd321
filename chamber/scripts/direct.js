
const url = "data/members.json";

async function getMembers() {
    const response = await fetch(url);
    const members = await response.json();
    displayMembers(members);
}


function displayMembers(members) {
    const container = document.querySelector(".members");

    members.forEach(member => {
        const card = document.createElement("section");

        card.innerHTML =`
		<div class="top"> 
            <h2>${member.name}</h2>
            <p>${member.tagline}</p>
		</div>
		<div class="bottom">	
            <img src="images/${member.image}" alt="${member.name}">
		
			<div class="info">	
            	<p><strong>Address:</strong> ${member.address}</p>
            	<p><strong>Phone:</strong> ${member.phone}</p>
            	<p><a href="${member.website}" target="_blank">Visit Website</a></p>
			</div>
		</div>`
        container.appendChild(card);
    });
}

const navbutton = document.querySelector('#chamdi');
const navlinks = document.querySelector('#cham-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});


getMembers();
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
