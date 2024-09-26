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
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>            
        `;
    }
    //-- a teljes tartalmat beillesztjük az oldalra
    document.getElementById("kartyakDiv").innerHTML = htmlTartalom;
}


document.addEventListener("DOMContentLoaded", function () {
    adatokLetoltese();
});