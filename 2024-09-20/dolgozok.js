document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("insert").addEventListener("click", function() { 
    let nev = document.getElementById("nev").value;
    let szuletesiev = document.getElementById("szuletesiev").value;
    let jsontext=`{"nev":"${nev}","szuletesiev":"${szuletesiev}"}`;
    let json = JSON.parse(jsontext);
    console.log(json);
    let backendurl="https://retoolapi.dev/2Lud2e/data";
    fetch(backendurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    })
   });
});