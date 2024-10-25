let backendurl = "http://localhost:3000/fruit";

document.addEventListener("DOMContentLoaded",async function () {

const response = await fetch(backendurl);   
const data = await response.json();
console.log(data);
listCards(data);
});
function listCards(data){
    const cardContainer = document.getElementById("gyumolcsok");
    data.forEach((element) => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<div class="card-body">
        <h5 class="card-title">${element.megnevezes}</h5>
        <p class="card-text">${element.egysegara} Ft</p>
        <p class="card-text">${element.mennyiseg} ${element.mennyisegiEgyseg}</p>
        </div>`;
        cardContainer.appendChild(card);}
    );
}