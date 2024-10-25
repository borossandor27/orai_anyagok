const backendurl = "http://localhost:3000/fruit";

document.addEventListener("DOMContentLoaded", function () {
  const createButton = document.getElementById("createButton");
  createButton.addEventListener("click", async function (event) {
    //-- böngésző alapértelmezés felülírása
    event.preventDefault();

    //-- mező tartalmakat JSON string formátumúra alakitjuk
    const megnevezes = document.getElementById("megnevezes").value;
    const egysegara = document.getElementById("egysegara").value;
    const mennyiseg = document.getElementById("mennyiseg").value;
    const mennyisegiEgyseg = document.getElementById("mennyisegiEgyseg").value;
    //-- ellenőrzések ----------------------------------------------------------------
    const jsontext = `{"megnevezes":"${megnevezes}",
            "egysegara":"${egysegara}",
            "mennyiseg":"${mennyiseg}",
            "mennyisegiEgyseg":"${mennyisegiEgyseg}"}`; //-- mező tartalmakat JSON string formátumúra alakitjuk
    const json = JSON.parse(jsontext); // JSON stringet JSON objektummá alakitja
    console.log(json);
    const response = await fetch(backendurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    });
    if (response.status === 200) {
      alert("Sikeres adatfelvitel");
      document.getElementById("megnevezes").value = "";
      document.getElementById("egysegara").value = "";
      document.getElementById("mennyiseg").value = "";
      document.getElementById("mennyisegiEgyseg").value = "";
    } else {
      alert("Sikertelen adatfelvitel");
    }
    console.log(response);
  });
});
