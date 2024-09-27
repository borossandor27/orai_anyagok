const backendurl = "https://retoolapi.dev/UERm53/macskak";


async function adatokLetoltese() {
    const response = await fetch(backendurl); // elindítjuk a kérést, promise-t kapunk
    const data = await response.json(); // várjuk meg a választ, és alakítjuk át JS objektummá
    adatokMegjelenitese(data);
}
function adatokMegjelenitese(macskakJSON) {
    var htmlTartalom = "";
    for (let i = 0; i < macskakJSON.length; i++) {
        //-- egyesével feldolgozzuk az adatokat
        htmlTartalom += `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${macskakJSON[i].nev}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-outline-success"  onclick="macskaModosit(${macskakJSON[i].id})">Módosít</button>
                <button type="button" class="btn btn-outline-danger"  onclick="macskaTorles(${macskakJSON[i].id})">Töröl</button>
                  </div>
            </div>            
        `;
    }
    //-- a teljes tartalmat beillesztjük az oldalra
    document.getElementById("kartyakDiv").innerHTML = htmlTartalom;
}
function macskaModosit(id) {
    console.log("Módosítás: " + id);
    adottMacskaAdatainakBetoltese(id);
}
async function adottMacskaAdatainakBetoltese(id) {
    // kártyákat eltüntetjük, űrlapot megjelenítjük
    document.getElementById("kartyakDiv").innerHTML= "";
    document.getElementById("urlapDiv").style.display = "block";
    // a szerverről lekérjük az adott macska adatait
    const response = await fetch(backendurl + "/" + id); // elindítjuk a kérést, promise-t kapunk
    const data = await response.json(); // várjuk meg a választ, és alakítjuk át JS objektummá
    console.log(data);
    //-- a visszakapott adatokat beírjuk az űrlapba
    document.getElementById("id").value = data.id;
    document.getElementById("nev").value = data.nev;
    if(data.nem === "him") {
        document.getElementById("him").checked = true;
    } else {
        document.getElementById("nosteny").checked = true;
    }
    document.getElementById("szuletett").value = data.szuletett;
    document.getElementById("ivartalanitott").checked = (data.ivartalanitott?true:false);
    //-- a módosítás gomb eseménykezelőjébe beírjuk az id-t
    document.getElementById("update").onclick = function () {
        macskaModositKuldese(id);
    };
}
async function macskaModositKuldese(params) {
    console.log("Módosítás küldése: " + params);
}
function macskaTorles(id) {
    console.log("Törlés: " + id);
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("urlapDiv").style.display = "none";
    adatokLetoltese();
});