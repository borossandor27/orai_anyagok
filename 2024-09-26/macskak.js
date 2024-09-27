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
async function macskaModositKuldese(macskaId) {
    console.log("Módosítás küldése: " + macskaId);
    const data = {
        id: macskaId,
        nev: document.getElementById("nev").value,
        nem: (document.getElementById("him").checked?"him":"nosteny"),
        szuletett: document.getElementById("szuletett").value,
        ivartalanitott: document.getElementById("ivartalanitott").checked
    };
    console.log(data);
    const response = await fetch(backendurl + "/" + macskaId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        console.error("Hiba a módosítás során!");
    } else {
        console.log("Módosítás sikeres!");
        alert("Módosítás sikeres!");
    }
    const valasz = await response.json(); // a válasz is JSON formátumú lesz, tartalma megegyezik az elküldöttel
    console.log(valasz);
}
function insertMacska() {
    console.log("Beszúrás");
    // megjelenítjük az űrlapot
    document.getElementById("urlapDiv").style.display = "block";
    document.getElementById("kartyakDiv").style.display = "none";
    // kitöröljük az input mezők tartalmát
    document.getElementById("id").value="";
    document.getElementById("nev").value = "";
    document.getElementById("him").checked = true;
    document.getElementById("szuletett").value = "2024";
    document.getElementById("ivartalanitott").checked = false;
 

}
async function adatokAdatbazisba() {
    console.log("Adatok küldése");
    const data = {
        nev: document.getElementById("nev").value,
        nem: (document.getElementById("him").checked?"him":"nosteny"),
        szuletett: document.getElementById("szuletett").value,
        ivartalanitott: document.getElementById("ivartalanitott").checked
    };
    console.log(data);
    const response = await fetch(backendurl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        console.error("Hiba az adatok küldésekor!");
    } else {
        console.log("Adatok küldése sikeres!");
        alert("Adatok küldése sikeres!");
        adatokLetoltese();
        // urlap elrejtése
        document.getElementById("urlapDiv").style.display = "none";
        // kártyák megjelenítése
        document.getElementById("kartyakDiv").style.display = "block";
    }
    const valasz = await response.json(); // a válasz is JSON formátumú lesz, tartalma megegyezik az elküldöttel
    console.log(valasz);
}
async function macskaTorles(id) {
    console.log("Törlés: " + id);
    if (!confirm("Biztosan törölni akarod?")) {
        return; // ha a felhasználó nem válaszol igennel, akkor nem folynak tovább a műveletek
    }
    const response = await fetch(backendurl + "/" + id, {
        method: "DELETE"
    });
    if (!response.ok) {
        console.error("Hiba a törlés során!");
    } else {
        console.log("Törlés sikeres!");
        alert("Törlés sikeres!");
        adatokLetoltese();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("urlapDiv").style.display = "none";
    adatokLetoltese();
});