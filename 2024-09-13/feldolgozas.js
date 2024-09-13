const gomb = document.getElementById("gomb");
gomb.addEventListener("click", () => {
    // Az adatok feldolgozása
    const nev = document.getElementById("nev").value;  
    alert("Üdvözöllek, " + nev + "!");  
});