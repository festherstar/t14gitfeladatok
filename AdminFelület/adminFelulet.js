//Aktiváló gomb
aktivaloesdeaktivalo.addEventListener("click", mindenCheck);

function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
       elemLista[i].checked = true;
    }    
}

//Deaktiváló gomb
aktivaloesdeaktivalo.addEventListener("dblclick", mindenUnCheck);

function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        if(elemLista[i].checked = false){
        $(".allapot"+ aktivaloesdeaktivalo).hide();
        }
    }
}

//Megfordító gomb
kijelolesMegforditas.addEventListener("click", forditCheck);

function forditCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        if(elemLista[i].checked){
            elemLista[i].checked = false;
        }
        else{
            elemLista[i].checked = true;
        } 
    }
}

//Táblázat sávozásának beállítása
csikozasBeesKi.addEventListener("click", savozasBe);

function savozasBe() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.add("table-striped");
    $(".allapot"+ csikozasBeesKi).show();
}


//Táblázat sávozásának kikapcsolása
csikozasBeesKi.addEventListener("dblclick", savozasKi);

function savozasKi() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.remove("table-striped");
    $(".allapot"+ csikozasBeesKi).hide();
}

//Táblázat oszlopos sávozásának bekapcsolása
csikozasoszloposBeesKi.addEventListener("click", savozasAtvaltasBe);

function savozasAtvaltasBe() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.add("table-striped-columns");
    $(".allapot"+ csikozasoszloposBeesKi).show();
}

//Táblázat oszlopos sávozásának kikapcsolása
csikozasoszloposBeesKi.addEventListener("dblclick", savozasAtvaltasKi);

function savozasAtvaltasKi() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.remove("table-striped-columns");
    $(".allapot"+ csikozasoszloposBeesKi).hide();
}


//Dark mode bekapcsolása
darkModeesLightMode.addEventListener("click", DarkMode);

function DarkMode() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.add("table-dark");
    kivalsztottTablazat.classList.remove("table-light");
    $(".allapot"+ darkModeesLightMode).show();
}


//Light mode bekapcsolása
darkModeesLightMode.addEventListener("dblclick", LightMode);

function LightMode() {
    let kivalsztottTablazat = document.querySelector("table");
    kivalsztottTablazat.classList.add("table-light");
    kivalsztottTablazat.classList.remove("table-dark");
    $(".allapot"+ darkModeesLightMode).hide();
}


//Tesztsor beillesztése
tesztSor.addEventListener("click", TesztSorBeszuras);

function TesztSorBeszuras() {
    let kivalsztottTablazat = document.querySelector("table");
    let sor = kivalsztottTablazat.insertRow();
    let vezetekNevCella = sor.insertCell(0);
    let keresztNevCella = sor.insertCell(1);
    let emailCella = sor.insertCell(2);
    let telefonCella = sor.insertCell(3);
    let beosztasCella = sor.insertCell(4);
    let aktivalCella = sor.insertCell(5);

    vezetekNevCella.innerHTML = "teszt";
    keresztNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

//Új elem feltöltése
ujElemFeltolto.addEventListener("click", ujElemHozzaad);

function ujElemHozzaad() {
    let kivalsztottTablazat = document.querySelector("table");
    let sor = kivalsztottTablazat.insertRow();
    let vezetekNevCella = sor.insertCell(0);
    let keresztNevCella = sor.insertCell(1);
    let emailCella = sor.insertCell(2);
    let telefonCella = sor.insertCell(3);
    let beosztasCella = sor.insertCell(4);
    let aktivalCella = sor.insertCell(5);

    vezetekNevCella.innerHTML = document.querySelector("#vezNev").value;
    keresztNevCella.innerHTML = document.querySelector("#kerNev").value;
    emailCella.innerHTML = document.querySelector("#email").value;
    telefonCella.innerHTML = document.querySelector("#tel").value;
    beosztasCella.innerHTML = document.querySelector("#beosztas").value;
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

//Ellenőrzés
ujElemFeltolto.addEventListener("click", Ellenorzo);

    function validEmail(vizsgalandoemail) {
        let minta3 = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
        if (minta3.test(vizsgalandoemail))//==true val
        {
            return true;
        }
        else {
            return false;
        }
    }

    function validMobilszam(vizsgalandomobilszam) {
        let minta4 = /^(\d[\s-]?){0,6}\d$/;
        if (minta4.test(vizsgalandomobilszam))//==true val
        {
            return true;
        }
        else {
            return false;
        }
    }
   

    function Ellenorzo() {

        let vezetekNev = document.querySelector("#vezNev").value;
        let keresztNev = document.querySelector("#kerNev").value;
        let emailCim = document.querySelector("#email").value;
        let mobilSzam = document.querySelector("#tel").value;
        let uzenoResz = document.querySelector("#uzenoFelulet");
        uzenoResz.style.backgroundColor = "red";
        uzenoResz.style.width = "600px";
        if (emailCim == "" || vezetekNev == "" || keresztNev == "" || mobilSzam == "" ) {
            uzenoResz.innerHTML = "Kötelező mező nincs kitöltve! Feltöltés: Sikertelen";
        }
        else if (!validEmail(emailCim)) {
            uzenoResz.innerHTML = "Az e-mail cím vagy a telefonszám formátuma nem megfelelő! Feltöltés: Sikertelen";
        }
        else if (!validMobilszam(mobilSzam)) {
            uzenoResz.innerHTML = "A telefonszám vagy az e-mail cím formátuma nem megfelelő! Feltöltés: Sikertelen";
        }
        else {
            uzenoResz.style.backgroundColor = "green";
            uzenoResz.innerHTML = "Feltöltés: Sikeres";
        }
    }
    

    
   
