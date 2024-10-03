const backendurl = "https://retoolapi.dev/SZwUUA/data";

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("get").addEventListener("click",async function(){
        fetch(backendurl)
        .then(response => response.json())
        .then(data => Datafutar(data));
    });
    document.getElementById("update").addEventListener("click", async function(){
        //kiolvassuk az urlap adatokat
        let id = document.getElementById("id").value;
        let nev = document.getElementById("nev").value;
        let email = document.getElementById("email").value;
        let bool = document.getElementById("bool").checked;
        // osszeallítjuk a küldendő objektumot
        let futar = {id:id, nev:nev, email:email, bool:bool};
        // ha megvan összeállítjuk az url-t
        let modositurl = backendurl + "/" + id;
        // beállítjuk a fejlécet
        let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json");
        // elküldjük
        let response = await fetch(modositurl, {
            method : "PUT",
            headers: myHeader,
            body: JSON.stringify(futar)
        })
        // eredményről visszajelzést adunk
        console.log(response);
         if(response.ok){
            alert("Sikeres volt");
        }
        else{
            alert("Sikertelen volt");
        }
    })
});

function Datafutar(data){
    let szoveg = "";
    for(let i=0; i<data.length; i++){
        szoveg += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data[i].nev}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${data[i].email}</h6>
    <p class="card-text">${data[i].bool}</p>
    <a class="btn btn-primary" onclick="Modositas(${data[i].id})">Update</a>
    <a class="btn btn-primary">Delete</a>
  </div>
</div>`
    }
    document.getElementById("card").innerHTML = szoveg;
};

function Modositas(id){
    fetch(backendurl + "/" + id)
    .then(response => response.json())
    .then(data =>{
        document.getElementById("id").value = data.id;
        document.getElementById("nev").value = data.nev;
        document.getElementById("email").value = data.email;
        document.getElementById("bool").checked = data.bool;
    })
}

