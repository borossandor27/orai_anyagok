document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("read").addEventListener("click", function () {
        let backendurl = "https://retoolapi.dev/2Lud2e/data";
        fetch(backendurl)
            .then(response => response.json())
            .then(data => adatokTablazatba(data));
    });
    function adatokTablazatba(adatok) {
        console.log(adatok);
        let table=`<table>
        <thead>
            <tr>
                <th>id</th>
                <th>Név</th>
                <th>Születési év</th>
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
            </tr>`;
        }
        // táblázat befejezése
        table += `</tbody></table>`;
        // táblázat megjelenítése
        document.getElementById("dolgozok").innerHTML = table;
    }
});