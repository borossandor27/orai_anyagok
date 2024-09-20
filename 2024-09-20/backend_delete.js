document.addEventListener("DOMContentLoaded", function () {
    adatokLetoltese();
    function adatokLetoltese() {
        let backendurl = "https://retoolapi.dev/2Lud2e/data";
        fetch(backendurl)
            .then(response => response.json())
            .then(data => adatokTablazatba(data));
    }
    function adatokTablazatba(adatok) {
        console.log(adatok);
        let table = `<table>
        <thead>
            <tr>
                <th>id</th>
                <th>Név</th>
                <th>Születési év</th>
                <th>Művelet</th>
            </tr>
        </thead>
        <tbody>
        `;
        // adatsorok létrehozása az adatok alapján
        for (let i = 0; i < adatok.length; i++) {
            table += `<tr>
                <td>${adatok[i].id}</td>
                <td>${adatok[i].nev}</td>
                <td>${adatok[i].szuletesiev}</td>
                <td><button onclick="adatTorlese(${adatok[i].id})">Törlés</button></td>
            </tr>`;
        }
        // táblázat befejezése
        table += `</tbody></table>`;
        // táblázat megjelenítése
        document.getElementById("dolgozok").innerHTML = table;
    }
    function adatTorlese(id) {
        let backendurl = `https://retoolapi.dev/2Lud2e/data/${id}`;
        fetch(backendurl, {
            method: 'DELETE'
        }).then(() => adatokLetoltese());
    }
});