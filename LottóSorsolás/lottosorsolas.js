//Kihúzott számok - Tömb - ÖTÖSLOTTÓ
let sorsolasokOtosLotto = [];

//Generátor
function OtosLottoGenerator() {
 
    let kisorsoltOtoslottoSzamok = [];
    for (let i = 0; i < 1; i++) {
        let generaltSzam = Math.round(Math.random() * 89) + 1;
        let szerepelE = false;
        for (let j = 0; j < kisorsoltOtoslottoSzamok.length; j++) {
            if (generaltSzam == kisorsoltOtoslottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            kisorsoltOtoslottoSzamok.push(generaltSzam)
        }
        else {
            i--;
        }
    }
    return kisorsoltOtoslottoSzamok;
}
console.log(sorsolasokOtosLotto);

//Több sorsolas
function TobbSorsolas(sorsolasMennyiseg) {
    let tobbSorsolas = [];
    for (let i = 0; i < sorsolasMennyiseg; i++) {
        tobbSorsolas.push(OtosLottoGenerator());
    }
    return tobbSorsolas;
}

//Sorsolás megjelenítés
generalogomb1.addEventListener("click", () => { SorsolasMegjelenites(5) });

function SorsolasMegjelenites(sorsolasMennyiseg) {
    let megtortentSorsolasok = TobbSorsolas(sorsolasMennyiseg);
    for (let i = 0; i < megtortentSorsolasok.length; i++) {
        sorsolasokOtosLotto.push(...megtortentSorsolasok[i]);
    }
    let golyomegjelenites1 = document.querySelector("#golyo1");
    golyomegjelenites1.innerHTML = megtortentSorsolasok[0];
    golyomegjelenites1.style.color = "black";
    golyomegjelenites1.style.fontSize = "20px";
    golyomegjelenites1.style.fontWeight = "bold";
    golyomegjelenites1.style.display = "inline-flex";
    golyomegjelenites1.style.justifyContent = "center";
    golyomegjelenites1.style.alignItems = "center";
    golyomegjelenites1.style.color = "black";
    golyomegjelenites1.style.width = "45px";
    golyomegjelenites1.style.height = "45px";
    golyomegjelenites1.style.backgroundColor = "whitesmoke";
    golyomegjelenites1.style.border = "3px solid lightseagreen";
    golyomegjelenites1.style.borderRadius = "25px";
    golyomegjelenites1.style.margin = "10px";
    golyomegjelenites1.style.boxShadow = "5px 5px 7px black";


    let golyomegjelenites2 = document.querySelector("#golyo2"); 
    golyomegjelenites2.innerHTML = megtortentSorsolasok[1];
    golyomegjelenites2.style.color = "black";
    golyomegjelenites2.style.fontSize = "20px";
    golyomegjelenites2.style.fontWeight = "bold";
    golyomegjelenites2.style.display = "inline-flex";
    golyomegjelenites2.style.justifyContent = "center";
    golyomegjelenites2.style.alignItems = "center";
    golyomegjelenites2.style.color = "black";
    golyomegjelenites2.style.width = "45px";
    golyomegjelenites2.style.height = "45px";
    golyomegjelenites2.style.backgroundColor = "whitesmoke";
    golyomegjelenites2.style.border = "3px solid lightseagreen";
    golyomegjelenites2.style.borderRadius = "25px";
    golyomegjelenites2.style.margin = "10px";
    golyomegjelenites2.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites3 = document.querySelector("#golyo3");
    golyomegjelenites3.innerHTML = megtortentSorsolasok[2];
    golyomegjelenites3.style.color = "black";
    golyomegjelenites3.style.fontSize = "20px";
    golyomegjelenites3.style.fontWeight = "bold";
    golyomegjelenites3.style.display = "inline-flex";
    golyomegjelenites3.style.justifyContent = "center";
    golyomegjelenites3.style.alignItems = "center";
    golyomegjelenites3.style.color = "black";
    golyomegjelenites3.style.width = "45px";
    golyomegjelenites3.style.height = "45px";
    golyomegjelenites3.style.backgroundColor = "whitesmoke";
    golyomegjelenites3.style.border = "3px solid lightseagreen";
    golyomegjelenites3.style.borderRadius = "25px";
    golyomegjelenites3.style.margin = "10px";
    golyomegjelenites3.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites4 = document.querySelector("#golyo4");
    golyomegjelenites4.innerHTML = megtortentSorsolasok[3];
    golyomegjelenites4.style.color = "black";
    golyomegjelenites4.style.fontSize = "20px";
    golyomegjelenites4.style.fontWeight = "bold";
    golyomegjelenites4.style.display = "inline-flex";
    golyomegjelenites4.style.justifyContent = "center";
    golyomegjelenites4.style.alignItems = "center";
    golyomegjelenites4.style.color = "black";
    golyomegjelenites4.style.width = "45px";
    golyomegjelenites4.style.height = "45px";
    golyomegjelenites4.style.backgroundColor = "whitesmoke";
    golyomegjelenites4.style.border = "3px solid lightseagreen";
    golyomegjelenites4.style.borderRadius = "25px";
    golyomegjelenites4.style.margin = "10px";
    golyomegjelenites4.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites5 = document.querySelector("#golyo5"); 
    golyomegjelenites5.innerHTML = megtortentSorsolasok[4];
    golyomegjelenites5.style.color = "black";
    golyomegjelenites5.style.fontSize = "20px";
    golyomegjelenites5.style.fontWeight = "bold";
    golyomegjelenites5.style.display = "inline-flex";
    golyomegjelenites5.style.justifyContent = "center";
    golyomegjelenites5.style.alignItems = "center";
    golyomegjelenites5.style.color = "black";
    golyomegjelenites5.style.width = "45px";
    golyomegjelenites5.style.height = "45px";
    golyomegjelenites5.style.backgroundColor = "whitesmoke";
    golyomegjelenites5.style.border = "3px solid lightseagreen";
    golyomegjelenites5.style.borderRadius = "25px";
    golyomegjelenites5.style.margin = "10px";
    golyomegjelenites5.style.boxShadow = "5px 5px 7px black";


//Feladatok MEGTÖRTÉNT sorsolásokra
        LegkevesebbszerEloforduloEgeszben(megtortentSorsolasok);
        LegtobbszorEloforduloEgeszben(megtortentSorsolasok);
        KisorsoltSzamSzamlalo(sorsolasokOtosLotto);
        LegkisebbKisorsoltSzam(sorsolasokOtosLotto);
        LegnagyobbKisorsoltSzam(sorsolasokOtosLotto);
        LegkisebbKisorsoltSzamAktualis();
        LegnagyobbKisorsoltSzamAktualis();
        KisorsoltSzamokKulonbseg(sorsolasokOtosLotto);
        KisorsoltSzamokKulonbsegAktualis(sorsolasokOtosLotto);
        OtosLottoSzamKiolvas();
        OtosLottoSzerepelEAdottSzam();
        OtosLottoSzerepelEAdottSzamEgeszben();
        LegkevesebbszerMashogy(sorsolasokOtosLotto);
        LegtobbszorMashogy(sorsolasokOtosLotto);
        
    }

//Sorsolások száma
    function SorsolasokSzama() {
        let sorsolasMennyiseg = [0, 0, 0, 0, 0, 0];
        for (let i = 0; i < sorsolasokOtosLotto.length; i++) {
            sorsolasMennyiseg[sorsolasokOtosLotto[i]]++;
            sorsolasMennyiseg[0] += sorsolasokOtosLotto[i];
        }

        return sorsolasMennyiseg;
    }    

 //Statisztika Kiírása
function StatisztikaKiir(){
    document.querySelector("#sorsolasmennyiseg").innerHTML = sorsolasokOtosLotto.length;
    let legutolso5 = document.querySelector("#kihuzottutolsoszamok");
    legutolso5.innerHTML = sorsolasokOtosLotto.slice(-5);
    legutolso5.style.color = "red";
}

generalogomb1.addEventListener("click", () => { StatisztikaKiir(SorsolasokSzama()) });

//FELADATOK
//1. feladat
function KisorsoltSzamSzamlalo(sorsolasokOtosLotto) {
    let kisorsoltOtosLottoSzamok = {};
    for (let i=0; i<sorsolasokOtosLotto.length; i++){
        let megtalalt = sorsolasokOtosLotto[i];
            if (kisorsoltOtosLottoSzamok[megtalalt]){
                kisorsoltOtosLottoSzamok[megtalalt]+= + 1;
            }
    
            else{
                kisorsoltOtosLottoSzamok[megtalalt]= 1;
            }
    }
    document.querySelector("#hanyszor").innerHTML = JSON.stringify(kisorsoltOtosLottoSzamok);
return kisorsoltOtosLottoSzamok;
        
}
//2. feladat 
function LegkevesebbszerEloforduloEgeszben () {
    let legkevesebbszerEloforduloSzamEgeszben = [...sorsolasokOtosLotto.reduce((r, n) => r.set(n, (r.get(n)|| 0) +1), new Map()
    )]
        .reduce ((r, v) => v[1] < r[1] ? v : r)[0];
            document.querySelector("#legritkabb").innerHTML = legkevesebbszerEloforduloSzamEgeszben;
}
//3. feladat
function LegtobbszorEloforduloEgeszben () {
    let legtobbszorEloforduloSzamEgeszben = [...sorsolasokOtosLotto.reduce((r, n) => r.set(n, (r.get(n)|| 0) +1), new Map()
    )]
        .reduce ((r, v) => v[1] > r[1] ? v : r)[0];
            document.querySelector("#leggyakrabb").innerHTML = legtobbszorEloforduloSzamEgeszben;
}
//4. feladat
function LegkisebbKisorsoltSzam(){
        let minErtek=sorsolasokOtosLotto[0];
        for(let i=0;i<sorsolasokOtosLotto.length;i++){
            if(sorsolasokOtosLotto[i]<minErtek){
                minErtek=sorsolasokOtosLotto[i];
            }
        }
        document.querySelector("#legkisebb").innerHTML = minErtek;
        return minErtek;
}
//5. feladat
function LegnagyobbKisorsoltSzam(){
    let maxErtek=sorsolasokOtosLotto[0];
    for(let i=0;i<sorsolasokOtosLotto.length;i++){
        if(sorsolasokOtosLotto[i]>maxErtek){
            maxErtek=sorsolasokOtosLotto[i];
        }
    }
    document.querySelector("#legnagyobb").innerHTML = maxErtek;
    return maxErtek;
}
//6. feladat
function KisorsoltSzamokKulonbseg(){
    let min=LegkisebbKisorsoltSzam();
    let max=LegnagyobbKisorsoltSzam();
    let kulonbseg=max-min;
   
    document.querySelector("#kulonbseg").innerHTML = kulonbseg;
    return kulonbseg;
}
//7. feladat
function LegkisebbKisorsoltSzamAktualis(){
    let minErtekAkt=sorsolasokOtosLotto.slice(-5)[0];
    for(let i=0;i<sorsolasokOtosLotto.slice(-5).length;i++){
        if(sorsolasokOtosLotto.slice(-5)[i]<minErtekAkt){
            minErtekAkt=sorsolasokOtosLotto.slice(-5)[i];
        }
    }
    document.querySelector("#aktualisanlegkisebb").innerHTML = minErtekAkt;
    return minErtekAkt;
}
//8. feladat
function LegnagyobbKisorsoltSzamAktualis(){
let maxErtekAkt=sorsolasokOtosLotto.slice(-5)[0];
for(let i=0;i<sorsolasokOtosLotto.slice(-5).length;i++){
    if(sorsolasokOtosLotto.slice(-5)[i]>maxErtekAkt){
        maxErtekAkt=sorsolasokOtosLotto.slice(-5)[i];
    }
}
document.querySelector("#aktualisanlegnagyobb").innerHTML = maxErtekAkt;
return maxErtekAkt;
}
//9. feladat
function KisorsoltSzamokKulonbsegAktualis(){
    let minAkt=LegkisebbKisorsoltSzamAktualis();
    let maxAkt=LegnagyobbKisorsoltSzamAktualis();
    let kulonbsegAktualis=maxAkt-minAkt;
   
    document.querySelector("#aktualisankulonbseg").innerHTML = kulonbsegAktualis;
    return kulonbsegAktualis;
}
//10. feladat
function OtosLottoSzamKiolvas() {
    let otosLottoTipp = document.querySelector("#otoslottoTipp").value;
    return otosLottoTipp.split(",");
}


function OtosLottoSzerepelEAdottSzam(otosLottoTipp) {
    
    let otosLottoTippTomb = [];
    otosLottoTippTomb.push(OtosLottoSzamKiolvas(otosLottoTipp));
    console.log(otosLottoTippTomb);

    let stringesOtosTomb = [];
    let stringesOtos = sorsolasokOtosLotto.slice(-5).join().split(",");
    stringesOtosTomb.push(stringesOtos);
    console.log(stringesOtosTomb);

  let metszet = [];

    for (let i = 0; i < stringesOtosTomb[0].length; i++) {
        for (let j = 0; j < otosLottoTippTomb[0].length; j++) {
            if (stringesOtosTomb[0][i] === otosLottoTippTomb[0][j]) {
                metszet.push(stringesOtosTomb[0][i]);
                break;
                }
        }
    }
    console.log(metszet);
        document.querySelector("#talalatszamlalo").innerHTML = `A találatok száma: ` + metszet.length + ` <br> A nyerőszámok a következők: ` + metszet;   
    return metszet;
}
//11. feladat
function OtosLottoSzerepelEAdottSzamEgeszben(otosLottoTipp) {
    
    let otosLottoTippTomb = [];
    otosLottoTippTomb.push(OtosLottoSzamKiolvas(otosLottoTipp));
    console.log(otosLottoTippTomb);

    let stringesOtosTomb = [];
    let stringesOtos = sorsolasokOtosLotto.join().split(",");
    stringesOtosTomb.push(stringesOtos);
    console.log(stringesOtosTomb);

  let metszetEgeszben = [];

    for (let i = 0; i < stringesOtosTomb[0].length; i++) {
        for (let j = 0; j < otosLottoTippTomb[0].length; j++) {
            if (stringesOtosTomb[0][i] === otosLottoTippTomb[0][j]) {
                metszetEgeszben.push(stringesOtosTomb[0][i]);
                break;
                }
        }
    }
  
    console.log(metszetEgeszben);
        document.querySelector("#talalatszamlaloosszesben").innerHTML = `A találatok száma: ` + metszetEgeszben.length + ` <br> A nyerőszámok a következők: ` + metszetEgeszben;   
    return metszetEgeszben;
}
//2. feladat - EXTRA másképpen - Itt a legmagasabb értékkel tér vissza először
function LegkevesebbszerMashogy(sorsolasokOtosLotto){
    var legkevesebbszerEloforduloSzamMaskeppen = {};
    
    for(let i=0;i<sorsolasokOtosLotto.length;i++){
        if(legkevesebbszerEloforduloSzamMaskeppen[sorsolasokOtosLotto[i]]==undefined){
            legkevesebbszerEloforduloSzamMaskeppen[sorsolasokOtosLotto[i]]=1;
        }
        else{
            legkevesebbszerEloforduloSzamMaskeppen[sorsolasokOtosLotto[i]]+=1;
        }
    }
    
    var min=1, minElem;
    
    for(const i in legkevesebbszerEloforduloSzamMaskeppen){
        if(legkevesebbszerEloforduloSzamMaskeppen[i]<=min){
            min = legkevesebbszerEloforduloSzamMaskeppen[i];
            minElem=i;
        }
    }
    
    document.querySelector("#legkevesebbszerelofordulomashogy").innerHTML =`<br> A legkevesebbszer előforduló szám: ` + minElem + `<br> A legkevesebbszer előforduló szám előfordulásának száma: ` + min;
    }
//3. feladat - EXTRA másképpen - Itt a legalacsonyabb értékkel tér vissza először
function LegtobbszorMashogy(sorsolasokOtosLotto){
var legtobbszorEloforduloSzamMaskeppen = {};

for(let i=0;i<sorsolasokOtosLotto.length;i++){
    if(legtobbszorEloforduloSzamMaskeppen[sorsolasokOtosLotto[i]]==undefined){
        legtobbszorEloforduloSzamMaskeppen[sorsolasokOtosLotto[i]]=1;
    }
    else{
        legtobbszorEloforduloSzamMaskeppen[sorsolasokOtosLotto[i]]+=1;
    }
}

var max=0, maxElem;

for(const i in legtobbszorEloforduloSzamMaskeppen){
    if(legtobbszorEloforduloSzamMaskeppen[i]>max){
        max = legtobbszorEloforduloSzamMaskeppen[i];
        maxElem=i;
    }
}

document.querySelector("#legtobbszorelofordulomashogy").innerHTML =`<br> A legtöbbször előforduló szám: ` + maxElem + `<br> A legtöbbször előforduló szám előfordulásának száma: ` + max;
}


//Esemény hozzárendelése
let f001eventGomb = document.querySelector("#generalogomb1");
f001eventGomb.addEventListener("click", OtosLottoSzerepelEAdottSzam);




//Kihúzott számok - Tömb - HATOSLOTTÓ
let sorsolasokHatosLotto = [];

//Generátor
function HatosLottoGenerator() {
 
    let kisorsoltHatoslottoSzamok = [];
    for (let i = 0; i < 1; i++) {
        let generaltSzam = Math.round(Math.random() * 44) + 1;
        let szerepelE = false;
        for (let j = 0; j < kisorsoltHatoslottoSzamok.length; j++) {
            if (generaltSzam == kisorsoltHatoslottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            kisorsoltHatoslottoSzamok.push(generaltSzam)
        }
        else {
            i--;
        }
    }
    return kisorsoltHatoslottoSzamok;
}
console.log(sorsolasokHatosLotto);

//Több sorsolas
function HatosTobbSorsolas(sorsolasHatosMennyiseg) {
    let tobbSorsolasHatos = [];
    for (let i = 0; i < sorsolasHatosMennyiseg; i++) {
        tobbSorsolasHatos.push(HatosLottoGenerator());
    }
    return tobbSorsolasHatos;
}

//Sorsolás megjelenítés
generalogomb2.addEventListener("click", () => { HatosSorsolasMegjelenites(11) });

function HatosSorsolasMegjelenites(sorsolasHatosMennyiseg) {
    let megtortentSorsolasokHatos = HatosTobbSorsolas(sorsolasHatosMennyiseg);
    for (let i = 0; i < megtortentSorsolasokHatos.length; i++) {
        sorsolasokHatosLotto.push(...megtortentSorsolasokHatos[i]);
    }

    let golyomegjelenites6 = document.querySelector("#golyo6");
    golyomegjelenites6.innerHTML = megtortentSorsolasokHatos[5];
    golyomegjelenites6.style.color = "black";
    golyomegjelenites6.style.fontSize = "20px";
    golyomegjelenites6.style.fontWeight = "bold";
    golyomegjelenites6.style.display = "inline-flex";
    golyomegjelenites6.style.justifyContent = "center";
    golyomegjelenites6.style.alignItems = "center";
    golyomegjelenites6.style.color = "black";
    golyomegjelenites6.style.width = "45px";
    golyomegjelenites6.style.height = "45px";
    golyomegjelenites6.style.backgroundColor = "whitesmoke";
    golyomegjelenites6.style.border = "3px solid lightseagreen";
    golyomegjelenites6.style.borderRadius = "25px";
    golyomegjelenites6.style.margin = "10px";
    golyomegjelenites6.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites7 = document.querySelector("#golyo7");
    golyomegjelenites7.innerHTML = megtortentSorsolasokHatos[6];
    golyomegjelenites7.style.color = "black";
    golyomegjelenites7.style.fontSize = "20px";
    golyomegjelenites7.style.fontWeight = "bold";
    golyomegjelenites7.style.display = "inline-flex";
    golyomegjelenites7.style.justifyContent = "center";
    golyomegjelenites7.style.alignItems = "center";
    golyomegjelenites7.style.color = "black";
    golyomegjelenites7.style.width = "45px";
    golyomegjelenites7.style.height = "45px";
    golyomegjelenites7.style.backgroundColor = "whitesmoke";
    golyomegjelenites7.style.border = "3px solid lightseagreen";
    golyomegjelenites7.style.borderRadius = "25px";
    golyomegjelenites7.style.margin = "10px";
    golyomegjelenites7.style.boxShadow = "5px 5px 7px black";


    let golyomegjelenites8 = document.querySelector("#golyo8"); 
    golyomegjelenites8.innerHTML = megtortentSorsolasokHatos[7];
    golyomegjelenites8.style.color = "black";
    golyomegjelenites8.style.fontSize = "20px";
    golyomegjelenites8.style.fontWeight = "bold";
    golyomegjelenites8.style.display = "inline-flex";
    golyomegjelenites8.style.justifyContent = "center";
    golyomegjelenites8.style.alignItems = "center";
    golyomegjelenites8.style.color = "black";
    golyomegjelenites8.style.width = "45px";
    golyomegjelenites8.style.height = "45px";
    golyomegjelenites8.style.backgroundColor = "whitesmoke";
    golyomegjelenites8.style.border = "3px solid lightseagreen";
    golyomegjelenites8.style.borderRadius = "25px";
    golyomegjelenites8.style.margin = "10px";
    golyomegjelenites8.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites9 = document.querySelector("#golyo9");
    golyomegjelenites9.innerHTML = megtortentSorsolasokHatos[8];
    golyomegjelenites9.style.color = "black";
    golyomegjelenites9.style.fontSize = "20px";
    golyomegjelenites9.style.fontWeight = "bold";
    golyomegjelenites9.style.display = "inline-flex";
    golyomegjelenites9.style.justifyContent = "center";
    golyomegjelenites9.style.alignItems = "center";
    golyomegjelenites9.style.color = "black";
    golyomegjelenites9.style.width = "45px";
    golyomegjelenites9.style.height = "45px";
    golyomegjelenites9.style.backgroundColor = "whitesmoke";
    golyomegjelenites9.style.border = "3px solid lightseagreen";
    golyomegjelenites9.style.borderRadius = "25px";
    golyomegjelenites9.style.margin = "10px";
    golyomegjelenites9.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites10 = document.querySelector("#golyo10");
    golyomegjelenites10.innerHTML = megtortentSorsolasokHatos[9];
    golyomegjelenites10.style.color = "black";
    golyomegjelenites10.style.fontSize = "20px";
    golyomegjelenites10.style.fontWeight = "bold";
    golyomegjelenites10.style.display = "inline-flex";
    golyomegjelenites10.style.justifyContent = "center";
    golyomegjelenites10.style.alignItems = "center";
    golyomegjelenites10.style.color = "black";
    golyomegjelenites10.style.width = "45px";
    golyomegjelenites10.style.height = "45px";
    golyomegjelenites10.style.backgroundColor = "whitesmoke";
    golyomegjelenites10.style.border = "3px solid lightseagreen";
    golyomegjelenites10.style.borderRadius = "25px";
    golyomegjelenites10.style.margin = "10px";
    golyomegjelenites10.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites11 = document.querySelector("#golyo11"); 
    golyomegjelenites11.innerHTML = megtortentSorsolasokHatos[10];
    golyomegjelenites11.style.color = "black";
    golyomegjelenites11.style.fontSize = "20px";
    golyomegjelenites11.style.fontWeight = "bold";
    golyomegjelenites11.style.display = "inline-flex";
    golyomegjelenites11.style.justifyContent = "center";
    golyomegjelenites11.style.alignItems = "center";
    golyomegjelenites11.style.color = "black";
    golyomegjelenites11.style.width = "45px";
    golyomegjelenites11.style.height = "45px";
    golyomegjelenites11.style.backgroundColor = "whitesmoke";
    golyomegjelenites11.style.border = "3px solid lightseagreen";
    golyomegjelenites11.style.borderRadius = "25px";
    golyomegjelenites11.style.margin = "10px";
    golyomegjelenites11.style.boxShadow = "5px 5px 7px black";


    //Feladatok MEGTÖRTÉNT sorsolásokra
    HatosLottoSzamKiolvas();
        HatosLottoSzerepelEAdottSzam();

}
    //Sorsolások száma
    function HatosSorsolasokSzama() {
        let sorsolasHatosMennyiseg = [0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < sorsolasokHatosLotto.length; i++) {
            sorsolasHatosMennyiseg[sorsolasokHatosLotto[i]]++;
            sorsolasHatosMennyiseg[0] += sorsolasokHatosLotto[i];
        }

        return sorsolasHatosMennyiseg;
    }  

    //FELADAT
    function HatosLottoSzamKiolvas() {
        let hatosLottoTipp = document.querySelector("#hatoslottoTipp").value;
        return hatosLottoTipp.split(",");
    }
    
    
    function HatosLottoSzerepelEAdottSzam(hatosLottoTipp) {
        
        let hatosLottoTippTomb = [];
        hatosLottoTippTomb.push(HatosLottoSzamKiolvas(hatosLottoTipp));
        console.log(hatosLottoTippTomb);
    
        let stringesHatosTomb = [];
        let stringesHatos = sorsolasokHatosLotto.slice(-6).join().split(",");
        stringesHatosTomb.push(stringesHatos);
        console.log(stringesHatosTomb);
    
      let metszetHatos = [];
    
        for (let i = 0; i < stringesHatosTomb[0].length; i++) {
            for (let j = 0; j < hatosLottoTippTomb[0].length; j++) {
                if (stringesHatosTomb[0][i] === hatosLottoTippTomb[0][j]) {
                    metszetHatos.push(stringesHatosTomb[0][i]);
                    break;
                    }
            }
        }
        console.log(metszetHatos);
            document.querySelector("#hatostalalatszamlalo").innerHTML = `A találatok száma: ` + metszetHatos.length + ` <br> A nyerőszámok a következők: ` + metszetHatos;   
        return metszetHatos;
    }

let f002eventGomb = document.querySelector("#generalogomb2");
f002eventGomb.addEventListener("click", HatosLottoSzerepelEAdottSzam);




//Kihúzott számok - Tömb - SKANDINÁV LOTTÓ
let sorsolasokSkandinavLotto = [];

//Generátor
function SkandinavLottoGenerator() {
 
    let kisorsoltSkandinavlottoSzamok = [];
    for (let i = 0; i < 1; i++) {
        let generaltSzam = Math.round(Math.random() * 34) + 1;
        let szerepelE = false;
        for (let j = 0; j < kisorsoltSkandinavlottoSzamok.length; j++) {
            if (generaltSzam == kisorsoltSkandinavlottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            kisorsoltSkandinavlottoSzamok.push(generaltSzam)
        }
        else {
            i--;
        }
    }
    return kisorsoltSkandinavlottoSzamok;
}
console.log(sorsolasokSkandinavLotto);

//Több sorsolas
function SkandinavTobbSorsolas(sorsolasSkandinavMennyiseg) {
    let tobbSorsolasSkandinav = [];
    for (let i = 0; i < sorsolasSkandinavMennyiseg; i++) {
        tobbSorsolasSkandinav.push(SkandinavLottoGenerator());
    }
    return tobbSorsolasSkandinav;
}

//Sorsolás megjelenítés
generalogomb3.addEventListener("click", () => { SkandinavSorsolasMegjelenites(18) });

function SkandinavSorsolasMegjelenites(sorsolasSkandinavMennyiseg) {
    let megtortentSorsolasokSkandinav = SkandinavTobbSorsolas(sorsolasSkandinavMennyiseg);
    for (let i = 0; i < megtortentSorsolasokSkandinav.length; i++) {
        sorsolasokSkandinavLotto.push(...megtortentSorsolasokSkandinav[i]);
    }

    let golyomegjelenites12 = document.querySelector("#golyo12");
    golyomegjelenites12.innerHTML = megtortentSorsolasokSkandinav[11];
    golyomegjelenites12.style.color = "black";
    golyomegjelenites12.style.fontSize = "20px";
    golyomegjelenites12.style.fontWeight = "bold";
    golyomegjelenites12.style.display = "inline-flex";
    golyomegjelenites12.style.justifyContent = "center";
    golyomegjelenites12.style.alignItems = "center";
    golyomegjelenites12.style.color = "black";
    golyomegjelenites12.style.width = "45px";
    golyomegjelenites12.style.height = "45px";
    golyomegjelenites12.style.backgroundColor = "whitesmoke";
    golyomegjelenites12.style.border = "3px solid lightseagreen";
    golyomegjelenites12.style.borderRadius = "25px";
    golyomegjelenites12.style.margin = "10px";
    golyomegjelenites12.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites13 = document.querySelector("#golyo13");
    golyomegjelenites13.innerHTML = megtortentSorsolasokSkandinav[12];
    golyomegjelenites13.style.color = "black";
    golyomegjelenites13.style.fontSize = "20px";
    golyomegjelenites13.style.fontWeight = "bold";
    golyomegjelenites13.style.display = "inline-flex";
    golyomegjelenites13.style.justifyContent = "center";
    golyomegjelenites13.style.alignItems = "center";
    golyomegjelenites13.style.color = "black";
    golyomegjelenites13.style.width = "45px";
    golyomegjelenites13.style.height = "45px";
    golyomegjelenites13.style.backgroundColor = "whitesmoke";
    golyomegjelenites13.style.border = "3px solid lightseagreen";
    golyomegjelenites13.style.borderRadius = "25px";
    golyomegjelenites13.style.margin = "10px";
    golyomegjelenites13.style.boxShadow = "5px 5px 7px black";


    let golyomegjelenites14 = document.querySelector("#golyo14"); 
    golyomegjelenites14.innerHTML = megtortentSorsolasokSkandinav[13];
    golyomegjelenites14.style.color = "black";
    golyomegjelenites14.style.fontSize = "20px";
    golyomegjelenites14.style.fontWeight = "bold";
    golyomegjelenites14.style.display = "inline-flex";
    golyomegjelenites14.style.justifyContent = "center";
    golyomegjelenites14.style.alignItems = "center";
    golyomegjelenites14.style.color = "black";
    golyomegjelenites14.style.width = "45px";
    golyomegjelenites14.style.height = "45px";
    golyomegjelenites14.style.backgroundColor = "whitesmoke";
    golyomegjelenites14.style.border = "3px solid lightseagreen";
    golyomegjelenites14.style.borderRadius = "25px";
    golyomegjelenites14.style.margin = "10px";
    golyomegjelenites14.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites15 = document.querySelector("#golyo15");
    golyomegjelenites15.innerHTML = megtortentSorsolasokSkandinav[14];
    golyomegjelenites15.style.color = "black";
    golyomegjelenites15.style.fontSize = "20px";
    golyomegjelenites15.style.fontWeight = "bold";
    golyomegjelenites15.style.display = "inline-flex";
    golyomegjelenites15.style.justifyContent = "center";
    golyomegjelenites15.style.alignItems = "center";
    golyomegjelenites15.style.color = "black";
    golyomegjelenites15.style.width = "45px";
    golyomegjelenites15.style.height = "45px";
    golyomegjelenites15.style.backgroundColor = "whitesmoke";
    golyomegjelenites15.style.border = "3px solid lightseagreen";
    golyomegjelenites15.style.borderRadius = "25px";
    golyomegjelenites15.style.margin = "10px";
    golyomegjelenites15.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites16 = document.querySelector("#golyo16");
    golyomegjelenites16.innerHTML = megtortentSorsolasokSkandinav[15];
    golyomegjelenites16.style.color = "black";
    golyomegjelenites16.style.fontSize = "20px";
    golyomegjelenites16.style.fontWeight = "bold";
    golyomegjelenites16.style.display = "inline-flex";
    golyomegjelenites16.style.justifyContent = "center";
    golyomegjelenites16.style.alignItems = "center";
    golyomegjelenites16.style.color = "black";
    golyomegjelenites16.style.width = "45px";
    golyomegjelenites16.style.height = "45px";
    golyomegjelenites16.style.backgroundColor = "whitesmoke";
    golyomegjelenites16.style.border = "3px solid lightseagreen";
    golyomegjelenites16.style.borderRadius = "25px";
    golyomegjelenites16.style.margin = "10px";
    golyomegjelenites16.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites17 = document.querySelector("#golyo17"); 
    golyomegjelenites17.innerHTML = megtortentSorsolasokSkandinav[16];
    golyomegjelenites17.style.color = "black";
    golyomegjelenites17.style.fontSize = "20px";
    golyomegjelenites17.style.fontWeight = "bold";
    golyomegjelenites17.style.display = "inline-flex";
    golyomegjelenites17.style.justifyContent = "center";
    golyomegjelenites17.style.alignItems = "center";
    golyomegjelenites17.style.color = "black";
    golyomegjelenites17.style.width = "45px";
    golyomegjelenites17.style.height = "45px";
    golyomegjelenites17.style.backgroundColor = "whitesmoke";
    golyomegjelenites17.style.border = "3px solid lightseagreen";
    golyomegjelenites17.style.borderRadius = "25px";
    golyomegjelenites17.style.margin = "10px";
    golyomegjelenites17.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites18 = document.querySelector("#golyo18"); 
    golyomegjelenites18.innerHTML = megtortentSorsolasokSkandinav[17];
    golyomegjelenites18.style.color = "black";
    golyomegjelenites18.style.fontSize = "20px";
    golyomegjelenites18.style.fontWeight = "bold";
    golyomegjelenites18.style.display = "inline-flex";
    golyomegjelenites18.style.justifyContent = "center";
    golyomegjelenites18.style.alignItems = "center";
    golyomegjelenites18.style.color = "black";
    golyomegjelenites18.style.width = "45px";
    golyomegjelenites18.style.height = "45px";
    golyomegjelenites18.style.backgroundColor = "whitesmoke";
    golyomegjelenites18.style.border = "3px solid lightseagreen";
    golyomegjelenites18.style.borderRadius = "25px";
    golyomegjelenites18.style.margin = "10px";
    golyomegjelenites18.style.boxShadow = "5px 5px 7px black";


    //Feladatok MEGTÖRTÉNT sorsolásokra
    SkandinavLottoSzamKiolvas();
        SkandinavLottoSzerepelEAdottSzam();

}
    //Sorsolások száma
    function SkandinavSorsolasokSzama() {
        let sorsolasSkandinavMennyiseg = [0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < sorsolasokSkandinavLotto.length; i++) {
            sorsolasSkandinavMennyiseg[sorsolasokSkandinavLotto[i]]++;
            sorsolasSkandinavMennyiseg[0] += sorsolasokSkandinavLotto[i];
        }

        return sorsolasSkandinavMennyiseg;
    }  

    //FELADAT
    function SkandinavLottoSzamKiolvas() {
        let skandinavLottoTipp = document.querySelector("#skandinavlottoTipp").value;
        return skandinavLottoTipp.split(",");
    }
    
    
    function SkandinavLottoSzerepelEAdottSzam(skandinavLottoTipp) {
        
        let skandinavLottoTippTomb = [];
        skandinavLottoTippTomb.push(SkandinavLottoSzamKiolvas(skandinavLottoTipp));
        console.log(skandinavLottoTippTomb);
    
        let stringesSkandinavTomb = [];
        let stringesSkandinav = sorsolasokSkandinavLotto.slice(-7).join().split(",");
        stringesSkandinavTomb.push(stringesSkandinav);
        console.log(stringesSkandinavTomb);
    
      let metszetSkandinav = [];
    
        for (let i = 0; i < stringesSkandinavTomb[0].length; i++) {
            for (let j = 0; j < skandinavLottoTippTomb[0].length; j++) {
                if (stringesSkandinavTomb[0][i] === skandinavLottoTippTomb[0][j]) {
                    metszetSkandinav.push(stringesSkandinavTomb[0][i]);
                    break;
                    }
            }
        }
        console.log(metszetSkandinav);
            document.querySelector("#skandinavtalalatszamlalo").innerHTML = `A találatok száma: ` + metszetSkandinav.length + ` <br> A nyerőszámok a következők: ` + metszetSkandinav;   
        return metszetSkandinav;
    }

let f003eventGomb = document.querySelector("#generalogomb3");
f003eventGomb.addEventListener("click", SkandinavLottoSzerepelEAdottSzam);




//Kihúzott számok - Tömb - EUROJACKPOT - A MEZŐ
let sorsolasokEurojackpotaLotto = [];

//Generátor
function EurojackpotaLottoGenerator() {
 
    let kisorsoltEurojackpotalottoSzamok = [];
    for (let i = 0; i < 1; i++) {
        let generaltSzam = Math.round(Math.random() * 49) + 1;
        let szerepelE = false;
        for (let j = 0; j < kisorsoltEurojackpotalottoSzamok.length; j++) {
            if (generaltSzam == kisorsoltEurojackpotalottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            kisorsoltEurojackpotalottoSzamok.push(generaltSzam)
        }
        else {
            i--;
        }
    }
    return kisorsoltEurojackpotalottoSzamok;
}
console.log(sorsolasokEurojackpotaLotto);

//Több sorsolas
function EurojackpotaTobbSorsolas(sorsolasEurojackpotaMennyiseg) {
    let tobbSorsolasEurojackpota = [];
    for (let i = 0; i < sorsolasEurojackpotaMennyiseg; i++) {
        tobbSorsolasEurojackpota.push(EurojackpotaLottoGenerator());
    }
    return tobbSorsolasEurojackpota;
}

//Sorsolás megjelenítés
generalogomb4a.addEventListener("click", () => { EurojackpotaSorsolasMegjelenites(23) });

function EurojackpotaSorsolasMegjelenites(sorsolasEurojackpotaMennyiseg) {
    let megtortentSorsolasokEurojackpota = EurojackpotaTobbSorsolas(sorsolasEurojackpotaMennyiseg);
    for (let i = 0; i < megtortentSorsolasokEurojackpota.length; i++) {
        sorsolasokEurojackpotaLotto.push(...megtortentSorsolasokEurojackpota[i]);
    }

    let golyomegjelenites19 = document.querySelector("#golyo19");
    golyomegjelenites19.innerHTML = megtortentSorsolasokEurojackpota[18];
    golyomegjelenites19.style.color = "black";
    golyomegjelenites19.style.fontSize = "20px";
    golyomegjelenites19.style.fontWeight = "bold";
    golyomegjelenites19.style.display = "inline-flex";
    golyomegjelenites19.style.justifyContent = "center";
    golyomegjelenites19.style.alignItems = "center";
    golyomegjelenites19.style.color = "black";
    golyomegjelenites19.style.width = "45px";
    golyomegjelenites19.style.height = "45px";
    golyomegjelenites19.style.backgroundColor = "whitesmoke";
    golyomegjelenites19.style.border = "3px solid lightseagreen";
    golyomegjelenites19.style.borderRadius = "25px";
    golyomegjelenites19.style.margin = "10px";
    golyomegjelenites19.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites20 = document.querySelector("#golyo20");
    golyomegjelenites20.innerHTML = megtortentSorsolasokEurojackpota[19];
    golyomegjelenites20.style.color = "black";
    golyomegjelenites20.style.fontSize = "20px";
    golyomegjelenites20.style.fontWeight = "bold";
    golyomegjelenites20.style.display = "inline-flex";
    golyomegjelenites20.style.justifyContent = "center";
    golyomegjelenites20.style.alignItems = "center";
    golyomegjelenites20.style.color = "black";
    golyomegjelenites20.style.width = "45px";
    golyomegjelenites20.style.height = "45px";
    golyomegjelenites20.style.backgroundColor = "whitesmoke";
    golyomegjelenites20.style.border = "3px solid lightseagreen";
    golyomegjelenites20.style.borderRadius = "25px";
    golyomegjelenites20.style.margin = "10px";
    golyomegjelenites20.style.boxShadow = "5px 5px 7px black";


    let golyomegjelenites21 = document.querySelector("#golyo21"); 
    golyomegjelenites21.innerHTML = megtortentSorsolasokEurojackpota[20];
    golyomegjelenites21.style.color = "black";
    golyomegjelenites21.style.fontSize = "20px";
    golyomegjelenites21.style.fontWeight = "bold";
    golyomegjelenites21.style.display = "inline-flex";
    golyomegjelenites21.style.justifyContent = "center";
    golyomegjelenites21.style.alignItems = "center";
    golyomegjelenites21.style.color = "black";
    golyomegjelenites21.style.width = "45px";
    golyomegjelenites21.style.height = "45px";
    golyomegjelenites21.style.backgroundColor = "whitesmoke";
    golyomegjelenites21.style.border = "3px solid lightseagreen";
    golyomegjelenites21.style.borderRadius = "25px";
    golyomegjelenites21.style.margin = "10px";
    golyomegjelenites21.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites22 = document.querySelector("#golyo22");
    golyomegjelenites22.innerHTML = megtortentSorsolasokEurojackpota[21];
    golyomegjelenites22.style.color = "black";
    golyomegjelenites22.style.fontSize = "20px";
    golyomegjelenites22.style.fontWeight = "bold";
    golyomegjelenites22.style.display = "inline-flex";
    golyomegjelenites22.style.justifyContent = "center";
    golyomegjelenites22.style.alignItems = "center";
    golyomegjelenites22.style.color = "black";
    golyomegjelenites22.style.width = "45px";
    golyomegjelenites22.style.height = "45px";
    golyomegjelenites22.style.backgroundColor = "whitesmoke";
    golyomegjelenites22.style.border = "3px solid lightseagreen";
    golyomegjelenites22.style.borderRadius = "25px";
    golyomegjelenites22.style.margin = "10px";
    golyomegjelenites22.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites23 = document.querySelector("#golyo23");
    golyomegjelenites23.innerHTML = megtortentSorsolasokEurojackpota[22];
    golyomegjelenites23.style.color = "black";
    golyomegjelenites23.style.fontSize = "20px";
    golyomegjelenites23.style.fontWeight = "bold";
    golyomegjelenites23.style.display = "inline-flex";
    golyomegjelenites23.style.justifyContent = "center";
    golyomegjelenites23.style.alignItems = "center";
    golyomegjelenites23.style.color = "black";
    golyomegjelenites23.style.width = "45px";
    golyomegjelenites23.style.height = "45px";
    golyomegjelenites23.style.backgroundColor = "whitesmoke";
    golyomegjelenites23.style.border = "3px solid lightseagreen";
    golyomegjelenites23.style.borderRadius = "25px";
    golyomegjelenites23.style.margin = "10px";
    golyomegjelenites23.style.boxShadow = "5px 5px 7px black";

    
    //Feladatok MEGTÖRTÉNT sorsolásokra
    EurojackpotaLottoSzamKiolvas();
        EurojackpotaLottoSzerepelEAdottSzam();

}
    //Sorsolások száma
    function EurojackpotaSorsolasokSzama() {
        let sorsolasEurojackpotaMennyiseg = [0, 0, 0, 0, 0, 0];
        for (let i = 0; i < sorsolasokEurojackpotaLotto.length; i++) {
            sorsolasEurojackpotaMennyiseg[sorsolasokEurojackpotaLotto[i]]++;
            sorsolasEurojackpotaMennyiseg[0] += sorsolasokEurojackpotaLotto[i];
        }

        return sorsolasEurojackpotaMennyiseg;
    }  

    //FELADAT
    function EurojackpotaLottoSzamKiolvas() {
        let eurojackpotaLottoTipp = document.querySelector("#eurojackpotalottoTipp").value;
        return eurojackpotaLottoTipp.split(",");
    }
    
    
    function EurojackpotaLottoSzerepelEAdottSzam(eurojackpotaLottoTipp) {
        
        let eurojackpotaLottoTippTomb = [];
        eurojackpotaLottoTippTomb.push(EurojackpotaLottoSzamKiolvas(eurojackpotaLottoTipp));
        console.log(eurojackpotaLottoTippTomb);
    
        let stringesEurojackpotaTomb = [];
        let stringesEurojackpota = sorsolasokEurojackpotaLotto.slice(-5).join().split(",");
        stringesEurojackpotaTomb.push(stringesEurojackpota);
        console.log(stringesEurojackpotaTomb);
    
      let metszetEurojackpota = [];
    
        for (let i = 0; i < stringesEurojackpotaTomb[0].length; i++) {
            for (let j = 0; j < eurojackpotaLottoTippTomb[0].length; j++) {
                if (stringesEurojackpotaTomb[0][i] === eurojackpotaLottoTippTomb[0][j]) {
                    metszetEurojackpota.push(stringesEurojackpotaTomb[0][i]);
                    break;
                    }
            }
        }
        console.log(metszetEurojackpota);
            document.querySelector("#eurojackpotatalalatszamlalo").innerHTML = `A találatok száma: ` + metszetEurojackpota.length + ` <br> A nyerőszámok a következők: ` + metszetEurojackpota;   
        return metszetEurojackpota;
    }

let f004aeventGomb = document.querySelector("#generalogomb4a");
f004aeventGomb.addEventListener("click", EurojackpotaLottoSzerepelEAdottSzam);




//Kihúzott számok - Tömb - EUROJACKPOT - B MEZŐ
let sorsolasokEurojackpotbLotto = [];

//Generátor
function EurojackpotbLottoGenerator() {
 
    let kisorsoltEurojackpotblottoSzamok = [];
    for (let i = 0; i < 1; i++) {
        let generaltSzam = Math.round(Math.random() * 11) + 1;
        let szerepelE = false;
        for (let j = 0; j < kisorsoltEurojackpotblottoSzamok.length; j++) {
            if (generaltSzam == kisorsoltEurojackpotblottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            kisorsoltEurojackpotblottoSzamok.push(generaltSzam)
        }
        else {
            i--;
        }
    }
    return kisorsoltEurojackpotblottoSzamok;
}
console.log(sorsolasokEurojackpotbLotto);

//Több sorsolas
function EurojackpotbTobbSorsolas(sorsolasEurojackpotbMennyiseg) {
    let tobbSorsolasEurojackpotb = [];
    for (let i = 0; i < sorsolasEurojackpotbMennyiseg; i++) {
        tobbSorsolasEurojackpotb.push(EurojackpotbLottoGenerator());
    }
    return tobbSorsolasEurojackpotb;
}

//Sorsolás megjelenítés
generalogomb4b.addEventListener("click", () => { EurojackpotbSorsolasMegjelenites(25) });

function EurojackpotbSorsolasMegjelenites(sorsolasEurojackpotbMennyiseg) {
    let megtortentSorsolasokEurojackpotb = EurojackpotbTobbSorsolas(sorsolasEurojackpotbMennyiseg);
    for (let i = 0; i < megtortentSorsolasokEurojackpotb.length; i++) {
        sorsolasokEurojackpotbLotto.push(...megtortentSorsolasokEurojackpotb[i]);
    }

    let golyomegjelenites24 = document.querySelector("#golyo24");
    golyomegjelenites24.innerHTML = megtortentSorsolasokEurojackpotb[23];
    golyomegjelenites24.style.color = "black";
    golyomegjelenites24.style.fontSize = "20px";
    golyomegjelenites24.style.fontWeight = "bold";
    golyomegjelenites24.style.display = "inline-flex";
    golyomegjelenites24.style.justifyContent = "center";
    golyomegjelenites24.style.alignItems = "center";
    golyomegjelenites24.style.color = "black";
    golyomegjelenites24.style.width = "45px";
    golyomegjelenites24.style.height = "45px";
    golyomegjelenites24.style.backgroundColor = "whitesmoke";
    golyomegjelenites24.style.border = "3px solid lightseagreen";
    golyomegjelenites24.style.borderRadius = "25px";
    golyomegjelenites24.style.margin = "10px";
    golyomegjelenites24.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites25 = document.querySelector("#golyo25");
    golyomegjelenites25.innerHTML = megtortentSorsolasokEurojackpotb[24];
    golyomegjelenites25.style.color = "black";
    golyomegjelenites25.style.fontSize = "20px";
    golyomegjelenites25.style.fontWeight = "bold";
    golyomegjelenites25.style.display = "inline-flex";
    golyomegjelenites25.style.justifyContent = "center";
    golyomegjelenites25.style.alignItems = "center";
    golyomegjelenites25.style.color = "black";
    golyomegjelenites25.style.width = "45px";
    golyomegjelenites25.style.height = "45px";
    golyomegjelenites25.style.backgroundColor = "whitesmoke";
    golyomegjelenites25.style.border = "3px solid lightseagreen";
    golyomegjelenites25.style.borderRadius = "25px";
    golyomegjelenites25.style.margin = "10px";
    golyomegjelenites25.style.boxShadow = "5px 5px 7px black";


    //Feladatok MEGTÖRTÉNT sorsolásokra
    EurojackpotbLottoSzamKiolvas();
        EurojackpotbLottoSzerepelEAdottSzam();

}
    //Sorsolások száma
    function EurojackpotbSorsolasokSzama() {
        let sorsolasEurojackpotbMennyiseg = [0, 0, 0];
        for (let i = 0; i < sorsolasokEurojackpotbLotto.length; i++) {
            sorsolasEurojackpotbMennyiseg[sorsolasokEurojackpotbLotto[i]]++;
            sorsolasEurojackpotbMennyiseg[0] += sorsolasokEurojackpotbLotto[i];
        }

        return sorsolasEurojackpotbMennyiseg;
    }  

    //FELADAT
    function EurojackpotbLottoSzamKiolvas() {
        let eurojackpotbLottoTipp = document.querySelector("#eurojackpotblottoTipp").value;
        return eurojackpotbLottoTipp.split(",");
    }
    
    
    function EurojackpotbLottoSzerepelEAdottSzam(eurojackpotbLottoTipp) {
        
        let eurojackpotbLottoTippTomb = [];
        eurojackpotbLottoTippTomb.push(EurojackpotbLottoSzamKiolvas(eurojackpotbLottoTipp));
        console.log(eurojackpotbLottoTippTomb);
    
        let stringesEurojackpotbTomb = [];
        let stringesEurojackpotb = sorsolasokEurojackpotbLotto.slice(-2).join().split(",");
        stringesEurojackpotbTomb.push(stringesEurojackpotb);
        console.log(stringesEurojackpotbTomb);
    
      let metszetEurojackpotb = [];
    
        for (let i = 0; i < stringesEurojackpotbTomb[0].length; i++) {
            for (let j = 0; j < eurojackpotbLottoTippTomb[0].length; j++) {
                if (stringesEurojackpotbTomb[0][i] === eurojackpotbLottoTippTomb[0][j]) {
                    metszetEurojackpotb.push(stringesEurojackpotbTomb[0][i]);
                    break;
                    }
            }
        }
        console.log(metszetEurojackpotb);
            document.querySelector("#eurojackpotbtalalatszamlalo").innerHTML = `A találatok száma: ` + metszetEurojackpotb.length + ` <br> A nyerőszámok a következők: ` + metszetEurojackpotb;   
        return metszetEurojackpotb;
    }

let f004beventGomb = document.querySelector("#generalogomb4b");
f004beventGomb.addEventListener("click", EurojackpotbLottoSzerepelEAdottSzam);




//Kihúzott számok - Tömb - KENÓ
let sorsolasokKenoLotto = [];

//Generátor
function KenoLottoGenerator() {
 
    let kisorsoltKenolottoSzamok = [];
    for (let i = 0; i < 1; i++) {
        let generaltSzam = Math.round(Math.random() * 79) + 1;
        let szerepelE = false;
        for (let j = 0; j < kisorsoltKenolottoSzamok.length; j++) {
            if (generaltSzam == kisorsoltKenolottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            kisorsoltKenolottoSzamok.push(generaltSzam)
        }
        else {
            i--;
        }
    }
    return kisorsoltKenolottoSzamok;
}
console.log(sorsolasokKenoLotto);

//Több sorsolas
function KenoTobbSorsolas(sorsolasKenoMennyiseg) {
    let tobbSorsolasKeno = [];
    for (let i = 0; i < sorsolasKenoMennyiseg; i++) {
        tobbSorsolasKeno.push(KenoLottoGenerator());
    }
    return tobbSorsolasKeno;
}

//Sorsolás megjelenítés
generalogomb5.addEventListener("click", () => { KenoSorsolasMegjelenites(45) });

function KenoSorsolasMegjelenites(sorsolasKenoMennyiseg) {
    let megtortentSorsolasokKeno = KenoTobbSorsolas(sorsolasKenoMennyiseg);
    for (let i = 0; i < megtortentSorsolasokKeno.length; i++) {
        sorsolasokKenoLotto.push(...megtortentSorsolasokKeno[i]);
    }

    let golyomegjelenites26 = document.querySelector("#golyo26");
    golyomegjelenites26.innerHTML = megtortentSorsolasokKeno[25];
    golyomegjelenites26.style.color = "black";
    golyomegjelenites26.style.fontSize = "20px";
    golyomegjelenites26.style.fontWeight = "bold";
    golyomegjelenites26.style.display = "inline-flex";
    golyomegjelenites26.style.justifyContent = "center";
    golyomegjelenites26.style.alignItems = "center";
    golyomegjelenites26.style.color = "black";
    golyomegjelenites26.style.width = "45px";
    golyomegjelenites26.style.height = "45px";
    golyomegjelenites26.style.backgroundColor = "whitesmoke";
    golyomegjelenites26.style.border = "3px solid lightseagreen";
    golyomegjelenites26.style.borderRadius = "25px";
    golyomegjelenites26.style.margin = "10px";
    golyomegjelenites26.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites27 = document.querySelector("#golyo27");
    golyomegjelenites27.innerHTML = megtortentSorsolasokKeno[26];
    golyomegjelenites27.style.color = "black";
    golyomegjelenites27.style.fontSize = "20px";
    golyomegjelenites27.style.fontWeight = "bold";
    golyomegjelenites27.style.display = "inline-flex";
    golyomegjelenites27.style.justifyContent = "center";
    golyomegjelenites27.style.alignItems = "center";
    golyomegjelenites27.style.color = "black";
    golyomegjelenites27.style.width = "45px";
    golyomegjelenites27.style.height = "45px";
    golyomegjelenites27.style.backgroundColor = "whitesmoke";
    golyomegjelenites27.style.border = "3px solid lightseagreen";
    golyomegjelenites27.style.borderRadius = "25px";
    golyomegjelenites27.style.margin = "10px";
    golyomegjelenites27.style.boxShadow = "5px 5px 7px black";


    let golyomegjelenites28 = document.querySelector("#golyo28"); 
    golyomegjelenites28.innerHTML = megtortentSorsolasokKeno[27];
    golyomegjelenites28.style.color = "black";
    golyomegjelenites28.style.fontSize = "20px";
    golyomegjelenites28.style.fontWeight = "bold";
    golyomegjelenites28.style.display = "inline-flex";
    golyomegjelenites28.style.justifyContent = "center";
    golyomegjelenites28.style.alignItems = "center";
    golyomegjelenites28.style.color = "black";
    golyomegjelenites28.style.width = "45px";
    golyomegjelenites28.style.height = "45px";
    golyomegjelenites28.style.backgroundColor = "whitesmoke";
    golyomegjelenites28.style.border = "3px solid lightseagreen";
    golyomegjelenites28.style.borderRadius = "25px";
    golyomegjelenites28.style.margin = "10px";
    golyomegjelenites28.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites29 = document.querySelector("#golyo29");
    golyomegjelenites29.innerHTML = megtortentSorsolasokKeno[28];
    golyomegjelenites29.style.color = "black";
    golyomegjelenites29.style.fontSize = "20px";
    golyomegjelenites29.style.fontWeight = "bold";
    golyomegjelenites29.style.display = "inline-flex";
    golyomegjelenites29.style.justifyContent = "center";
    golyomegjelenites29.style.alignItems = "center";
    golyomegjelenites29.style.color = "black";
    golyomegjelenites29.style.width = "45px";
    golyomegjelenites29.style.height = "45px";
    golyomegjelenites29.style.backgroundColor = "whitesmoke";
    golyomegjelenites29.style.border = "3px solid lightseagreen";
    golyomegjelenites29.style.borderRadius = "25px";
    golyomegjelenites29.style.margin = "10px";
    golyomegjelenites29.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites30 = document.querySelector("#golyo30");
    golyomegjelenites30.innerHTML = megtortentSorsolasokKeno[29];
    golyomegjelenites30.style.color = "black";
    golyomegjelenites30.style.fontSize = "20px";
    golyomegjelenites30.style.fontWeight = "bold";
    golyomegjelenites30.style.display = "inline-flex";
    golyomegjelenites30.style.justifyContent = "center";
    golyomegjelenites30.style.alignItems = "center";
    golyomegjelenites30.style.color = "black";
    golyomegjelenites30.style.width = "45px";
    golyomegjelenites30.style.height = "45px";
    golyomegjelenites30.style.backgroundColor = "whitesmoke";
    golyomegjelenites30.style.border = "3px solid lightseagreen";
    golyomegjelenites30.style.borderRadius = "25px";
    golyomegjelenites30.style.margin = "10px";
    golyomegjelenites30.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites31 = document.querySelector("#golyo31");
    golyomegjelenites31.innerHTML = megtortentSorsolasokKeno[30];
    golyomegjelenites31.style.color = "black";
    golyomegjelenites31.style.fontSize = "20px";
    golyomegjelenites31.style.fontWeight = "bold";
    golyomegjelenites31.style.display = "inline-flex";
    golyomegjelenites31.style.justifyContent = "center";
    golyomegjelenites31.style.alignItems = "center";
    golyomegjelenites31.style.color = "black";
    golyomegjelenites31.style.width = "45px";
    golyomegjelenites31.style.height = "45px";
    golyomegjelenites31.style.backgroundColor = "whitesmoke";
    golyomegjelenites31.style.border = "3px solid lightseagreen";
    golyomegjelenites31.style.borderRadius = "25px";
    golyomegjelenites31.style.margin = "10px";
    golyomegjelenites31.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites32 = document.querySelector("#golyo32");
    golyomegjelenites32.innerHTML = megtortentSorsolasokKeno[31];
    golyomegjelenites32.style.color = "black";
    golyomegjelenites32.style.fontSize = "20px";
    golyomegjelenites32.style.fontWeight = "bold";
    golyomegjelenites32.style.display = "inline-flex";
    golyomegjelenites32.style.justifyContent = "center";
    golyomegjelenites32.style.alignItems = "center";
    golyomegjelenites32.style.color = "black";
    golyomegjelenites32.style.width = "45px";
    golyomegjelenites32.style.height = "45px";
    golyomegjelenites32.style.backgroundColor = "whitesmoke";
    golyomegjelenites32.style.border = "3px solid lightseagreen";
    golyomegjelenites32.style.borderRadius = "25px";
    golyomegjelenites32.style.margin = "10px";
    golyomegjelenites32.style.boxShadow = "5px 5px 7px black";


    let golyomegjelenites33 = document.querySelector("#golyo33"); 
    golyomegjelenites33.innerHTML = megtortentSorsolasokKeno[32];
    golyomegjelenites33.style.color = "black";
    golyomegjelenites33.style.fontSize = "20px";
    golyomegjelenites33.style.fontWeight = "bold";
    golyomegjelenites33.style.display = "inline-flex";
    golyomegjelenites33.style.justifyContent = "center";
    golyomegjelenites33.style.alignItems = "center";
    golyomegjelenites33.style.color = "black";
    golyomegjelenites33.style.width = "45px";
    golyomegjelenites33.style.height = "45px";
    golyomegjelenites33.style.backgroundColor = "whitesmoke";
    golyomegjelenites33.style.border = "3px solid lightseagreen";
    golyomegjelenites33.style.borderRadius = "25px";
    golyomegjelenites33.style.margin = "10px";
    golyomegjelenites33.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites34 = document.querySelector("#golyo34");
    golyomegjelenites34.innerHTML = megtortentSorsolasokKeno[33];
    golyomegjelenites34.style.color = "black";
    golyomegjelenites34.style.fontSize = "20px";
    golyomegjelenites34.style.fontWeight = "bold";
    golyomegjelenites34.style.display = "inline-flex";
    golyomegjelenites34.style.justifyContent = "center";
    golyomegjelenites34.style.alignItems = "center";
    golyomegjelenites34.style.color = "black";
    golyomegjelenites34.style.width = "45px";
    golyomegjelenites34.style.height = "45px";
    golyomegjelenites34.style.backgroundColor = "whitesmoke";
    golyomegjelenites34.style.border = "3px solid lightseagreen";
    golyomegjelenites34.style.borderRadius = "25px";
    golyomegjelenites34.style.margin = "10px";
    golyomegjelenites34.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites35 = document.querySelector("#golyo35");
    golyomegjelenites35.innerHTML = megtortentSorsolasokKeno[34];
    golyomegjelenites35.style.color = "black";
    golyomegjelenites35.style.fontSize = "20px";
    golyomegjelenites35.style.fontWeight = "bold";
    golyomegjelenites35.style.display = "inline-flex";
    golyomegjelenites35.style.justifyContent = "center";
    golyomegjelenites35.style.alignItems = "center";
    golyomegjelenites35.style.color = "black";
    golyomegjelenites35.style.width = "45px";
    golyomegjelenites35.style.height = "45px";
    golyomegjelenites35.style.backgroundColor = "whitesmoke";
    golyomegjelenites35.style.border = "3px solid lightseagreen";
    golyomegjelenites35.style.borderRadius = "25px";
    golyomegjelenites35.style.margin = "10px";
    golyomegjelenites35.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites36 = document.querySelector("#golyo36");
    golyomegjelenites36.innerHTML = megtortentSorsolasokKeno[35];
    golyomegjelenites36.style.color = "black";
    golyomegjelenites36.style.fontSize = "20px";
    golyomegjelenites36.style.fontWeight = "bold";
    golyomegjelenites36.style.display = "inline-flex";
    golyomegjelenites36.style.justifyContent = "center";
    golyomegjelenites36.style.alignItems = "center";
    golyomegjelenites36.style.color = "black";
    golyomegjelenites36.style.width = "45px";
    golyomegjelenites36.style.height = "45px";
    golyomegjelenites36.style.backgroundColor = "whitesmoke";
    golyomegjelenites36.style.border = "3px solid lightseagreen";
    golyomegjelenites36.style.borderRadius = "25px";
    golyomegjelenites36.style.margin = "10px";
    golyomegjelenites36.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites37 = document.querySelector("#golyo37");
    golyomegjelenites37.innerHTML = megtortentSorsolasokKeno[36];
    golyomegjelenites37.style.color = "black";
    golyomegjelenites37.style.fontSize = "20px";
    golyomegjelenites37.style.fontWeight = "bold";
    golyomegjelenites37.style.display = "inline-flex";
    golyomegjelenites37.style.justifyContent = "center";
    golyomegjelenites37.style.alignItems = "center";
    golyomegjelenites37.style.color = "black";
    golyomegjelenites37.style.width = "45px";
    golyomegjelenites37.style.height = "45px";
    golyomegjelenites37.style.backgroundColor = "whitesmoke";
    golyomegjelenites37.style.border = "3px solid lightseagreen";
    golyomegjelenites37.style.borderRadius = "25px";
    golyomegjelenites37.style.margin = "10px";
    golyomegjelenites37.style.boxShadow = "5px 5px 7px black";


    let golyomegjelenites38 = document.querySelector("#golyo38"); 
    golyomegjelenites38.innerHTML = megtortentSorsolasokKeno[37];
    golyomegjelenites38.style.color = "black";
    golyomegjelenites38.style.fontSize = "20px";
    golyomegjelenites38.style.fontWeight = "bold";
    golyomegjelenites38.style.display = "inline-flex";
    golyomegjelenites38.style.justifyContent = "center";
    golyomegjelenites38.style.alignItems = "center";
    golyomegjelenites38.style.color = "black";
    golyomegjelenites38.style.width = "45px";
    golyomegjelenites38.style.height = "45px";
    golyomegjelenites38.style.backgroundColor = "whitesmoke";
    golyomegjelenites38.style.border = "3px solid lightseagreen";
    golyomegjelenites38.style.borderRadius = "25px";
    golyomegjelenites38.style.margin = "10px";
    golyomegjelenites38.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites39 = document.querySelector("#golyo39");
    golyomegjelenites39.innerHTML = megtortentSorsolasokKeno[38];
    golyomegjelenites39.style.color = "black";
    golyomegjelenites39.style.fontSize = "20px";
    golyomegjelenites39.style.fontWeight = "bold";
    golyomegjelenites39.style.display = "inline-flex";
    golyomegjelenites39.style.justifyContent = "center";
    golyomegjelenites39.style.alignItems = "center";
    golyomegjelenites39.style.color = "black";
    golyomegjelenites39.style.width = "45px";
    golyomegjelenites39.style.height = "45px";
    golyomegjelenites39.style.backgroundColor = "whitesmoke";
    golyomegjelenites39.style.border = "3px solid lightseagreen";
    golyomegjelenites39.style.borderRadius = "25px";
    golyomegjelenites39.style.margin = "10px";
    golyomegjelenites39.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites40 = document.querySelector("#golyo40");
    golyomegjelenites40.innerHTML = megtortentSorsolasokKeno[39];
    golyomegjelenites40.style.color = "black";
    golyomegjelenites40.style.fontSize = "20px";
    golyomegjelenites40.style.fontWeight = "bold";
    golyomegjelenites40.style.display = "inline-flex";
    golyomegjelenites40.style.justifyContent = "center";
    golyomegjelenites40.style.alignItems = "center";
    golyomegjelenites40.style.color = "black";
    golyomegjelenites40.style.width = "45px";
    golyomegjelenites40.style.height = "45px";
    golyomegjelenites40.style.backgroundColor = "whitesmoke";
    golyomegjelenites40.style.border = "3px solid lightseagreen";
    golyomegjelenites40.style.borderRadius = "25px";
    golyomegjelenites40.style.margin = "10px";
    golyomegjelenites40.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites41 = document.querySelector("#golyo41");
    golyomegjelenites41.innerHTML = megtortentSorsolasokKeno[40];
    golyomegjelenites41.style.color = "black";
    golyomegjelenites41.style.fontSize = "20px";
    golyomegjelenites41.style.fontWeight = "bold";
    golyomegjelenites41.style.display = "inline-flex";
    golyomegjelenites41.style.justifyContent = "center";
    golyomegjelenites41.style.alignItems = "center";
    golyomegjelenites41.style.color = "black";
    golyomegjelenites41.style.width = "45px";
    golyomegjelenites41.style.height = "45px";
    golyomegjelenites41.style.backgroundColor = "whitesmoke";
    golyomegjelenites41.style.border = "3px solid lightseagreen";
    golyomegjelenites41.style.borderRadius = "25px";
    golyomegjelenites41.style.margin = "10px";
    golyomegjelenites41.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites42 = document.querySelector("#golyo42");
    golyomegjelenites42.innerHTML = megtortentSorsolasokKeno[41];
    golyomegjelenites42.style.color = "black";
    golyomegjelenites42.style.fontSize = "20px";
    golyomegjelenites42.style.fontWeight = "bold";
    golyomegjelenites42.style.display = "inline-flex";
    golyomegjelenites42.style.justifyContent = "center";
    golyomegjelenites42.style.alignItems = "center";
    golyomegjelenites42.style.color = "black";
    golyomegjelenites42.style.width = "45px";
    golyomegjelenites42.style.height = "45px";
    golyomegjelenites42.style.backgroundColor = "whitesmoke";
    golyomegjelenites42.style.border = "3px solid lightseagreen";
    golyomegjelenites42.style.borderRadius = "25px";
    golyomegjelenites42.style.margin = "10px";
    golyomegjelenites42.style.boxShadow = "5px 5px 7px black";


    let golyomegjelenites43 = document.querySelector("#golyo43"); 
    golyomegjelenites43.innerHTML = megtortentSorsolasokKeno[42];
    golyomegjelenites43.style.color = "black";
    golyomegjelenites43.style.fontSize = "20px";
    golyomegjelenites43.style.fontWeight = "bold";
    golyomegjelenites43.style.display = "inline-flex";
    golyomegjelenites43.style.justifyContent = "center";
    golyomegjelenites43.style.alignItems = "center";
    golyomegjelenites43.style.color = "black";
    golyomegjelenites43.style.width = "45px";
    golyomegjelenites43.style.height = "45px";
    golyomegjelenites43.style.backgroundColor = "whitesmoke";
    golyomegjelenites43.style.border = "3px solid lightseagreen";
    golyomegjelenites43.style.borderRadius = "25px";
    golyomegjelenites43.style.margin = "10px";
    golyomegjelenites43.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites44 = document.querySelector("#golyo44");
    golyomegjelenites44.innerHTML = megtortentSorsolasokKeno[43];
    golyomegjelenites44.style.color = "black";
    golyomegjelenites44.style.fontSize = "20px";
    golyomegjelenites44.style.fontWeight = "bold";
    golyomegjelenites44.style.display = "inline-flex";
    golyomegjelenites44.style.justifyContent = "center";
    golyomegjelenites44.style.alignItems = "center";
    golyomegjelenites44.style.color = "black";
    golyomegjelenites44.style.width = "45px";
    golyomegjelenites44.style.height = "45px";
    golyomegjelenites44.style.backgroundColor = "whitesmoke";
    golyomegjelenites44.style.border = "3px solid lightseagreen";
    golyomegjelenites44.style.borderRadius = "25px";
    golyomegjelenites44.style.margin = "10px";
    golyomegjelenites44.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites45 = document.querySelector("#golyo45");
    golyomegjelenites45.innerHTML = megtortentSorsolasokKeno[44];
    golyomegjelenites45.style.color = "black";
    golyomegjelenites45.style.fontSize = "20px";
    golyomegjelenites45.style.fontWeight = "bold";
    golyomegjelenites45.style.display = "inline-flex";
    golyomegjelenites45.style.justifyContent = "center";
    golyomegjelenites45.style.alignItems = "center";
    golyomegjelenites45.style.color = "black";
    golyomegjelenites45.style.width = "45px";
    golyomegjelenites45.style.height = "45px";
    golyomegjelenites45.style.backgroundColor = "whitesmoke";
    golyomegjelenites45.style.border = "3px solid lightseagreen";
    golyomegjelenites45.style.borderRadius = "25px";
    golyomegjelenites45.style.margin = "10px";
    golyomegjelenites45.style.boxShadow = "5px 5px 7px black";

    
    //Feladatok MEGTÖRTÉNT sorsolásokra
    KenoLottoSzamKiolvas();
        KenoLottoSzerepelEAdottSzam();

}
    //Sorsolások száma
    function KenoSorsolasokSzama() {
        let sorsolasKenoMennyiseg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < sorsolasokKenoLotto.length; i++) {
            sorsolasKenoMennyiseg[sorsolasokKenoLotto[i]]++;
            sorsolasKenoMennyiseg[0] += sorsolasokKenoLotto[i];
        }

        return sorsolasKenoMennyiseg;
    }  

    //FELADAT
    function KenoLottoSzamKiolvas() {
        let kenoLottoTipp = document.querySelector("#kenolottoTipp").value;
        return kenoLottoTipp.split(",");
    }
    
    
    function KenoLottoSzerepelEAdottSzam(kenoLottoTipp) {
        
        let kenoLottoTippTomb = [];
        kenoLottoTippTomb.push(KenoLottoSzamKiolvas(kenoLottoTipp));
        console.log(kenoLottoTippTomb);
    
        let stringesKenoTomb = [];
        let stringesKeno = sorsolasokKenoLotto.slice(-20).join().split(",");
        stringesKenoTomb.push(stringesKeno);
        console.log(stringesKenoTomb);
    
      let metszetKeno = [];
    
        for (let i = 0; i < stringesKenoTomb[0].length; i++) {
            for (let j = 0; j < kenoLottoTippTomb[0].length; j++) {
                if (stringesKenoTomb[0][i] === kenoLottoTippTomb[0][j]) {
                    metszetKeno.push(stringesKenoTomb[0][i]);
                    break;
                    }
            }
        }
        console.log(metszetKeno);
            document.querySelector("#kenotalalatszamlalo").innerHTML = `A találatok száma: ` + metszetKeno.length + ` <br> A nyerőszámok a következők: ` + metszetKeno;   
        return metszetKeno;
    }

let f005eventGomb = document.querySelector("#generalogomb5");
f005eventGomb.addEventListener("click", KenoLottoSzerepelEAdottSzam);




//Kihúzott számok - Tömb - PUTTÓ - A MEZŐ
let sorsolasokPuttoaLotto = [];

//Generátor
function PuttoaLottoGenerator() {
 
    let kisorsoltPuttoalottoSzamok = [];
    for (let i = 0; i < 1; i++) {
        let generaltSzam = Math.round(Math.random() * 19) + 1;
        let szerepelE = false;
        for (let j = 0; j < kisorsoltPuttoalottoSzamok.length; j++) {
            if (generaltSzam == kisorsoltPuttoalottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            kisorsoltPuttoalottoSzamok.push(generaltSzam)
        }
        else {
            i--;
        }
    }
    return kisorsoltPuttoalottoSzamok;
}
console.log(sorsolasokPuttoaLotto);

//Több sorsolas
function PuttoaTobbSorsolas(sorsolasPuttoaMennyiseg) {
    let tobbSorsolasPuttoa = [];
    for (let i = 0; i < sorsolasPuttoaMennyiseg; i++) {
        tobbSorsolasPuttoa.push(PuttoaLottoGenerator());
    }
    return tobbSorsolasPuttoa;
}

//Sorsolás megjelenítés
generalogomb6a.addEventListener("click", () => { PuttoaSorsolasMegjelenites(53) });

function PuttoaSorsolasMegjelenites(sorsolasPuttoaMennyiseg) {
    let megtortentSorsolasokPuttoa = PuttoaTobbSorsolas(sorsolasPuttoaMennyiseg);
    for (let i = 0; i < megtortentSorsolasokPuttoa.length; i++) {
        sorsolasokPuttoaLotto.push(...megtortentSorsolasokPuttoa[i]);
    }

    let golyomegjelenites46 = document.querySelector("#golyo46");
    golyomegjelenites46.innerHTML = megtortentSorsolasokPuttoa[45];
    golyomegjelenites46.style.color = "black";
    golyomegjelenites46.style.fontSize = "20px";
    golyomegjelenites46.style.fontWeight = "bold";
    golyomegjelenites46.style.display = "inline-flex";
    golyomegjelenites46.style.justifyContent = "center";
    golyomegjelenites46.style.alignItems = "center";
    golyomegjelenites46.style.color = "black";
    golyomegjelenites46.style.width = "45px";
    golyomegjelenites46.style.height = "45px";
    golyomegjelenites46.style.backgroundColor = "whitesmoke";
    golyomegjelenites46.style.border = "3px solid lightseagreen";
    golyomegjelenites46.style.borderRadius = "25px";
    golyomegjelenites46.style.margin = "10px";
    golyomegjelenites46.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites47 = document.querySelector("#golyo47");
    golyomegjelenites47.innerHTML = megtortentSorsolasokPuttoa[46];
    golyomegjelenites47.style.color = "black";
    golyomegjelenites47.style.fontSize = "20px";
    golyomegjelenites47.style.fontWeight = "bold";
    golyomegjelenites47.style.display = "inline-flex";
    golyomegjelenites47.style.justifyContent = "center";
    golyomegjelenites47.style.alignItems = "center";
    golyomegjelenites47.style.color = "black";
    golyomegjelenites47.style.width = "45px";
    golyomegjelenites47.style.height = "45px";
    golyomegjelenites47.style.backgroundColor = "whitesmoke";
    golyomegjelenites47.style.border = "3px solid lightseagreen";
    golyomegjelenites47.style.borderRadius = "25px";
    golyomegjelenites47.style.margin = "10px";
    golyomegjelenites47.style.boxShadow = "5px 5px 7px black";


    let golyomegjelenites48 = document.querySelector("#golyo48"); 
    golyomegjelenites48.innerHTML = megtortentSorsolasokPuttoa[47];
    golyomegjelenites48.style.color = "black";
    golyomegjelenites48.style.fontSize = "20px";
    golyomegjelenites48.style.fontWeight = "bold";
    golyomegjelenites48.style.display = "inline-flex";
    golyomegjelenites48.style.justifyContent = "center";
    golyomegjelenites48.style.alignItems = "center";
    golyomegjelenites48.style.color = "black";
    golyomegjelenites48.style.width = "45px";
    golyomegjelenites48.style.height = "45px";
    golyomegjelenites48.style.backgroundColor = "whitesmoke";
    golyomegjelenites48.style.border = "3px solid lightseagreen";
    golyomegjelenites48.style.borderRadius = "25px";
    golyomegjelenites48.style.margin = "10px";
    golyomegjelenites48.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites49 = document.querySelector("#golyo49");
    golyomegjelenites49.innerHTML = megtortentSorsolasokPuttoa[48];
    golyomegjelenites49.style.color = "black";
    golyomegjelenites49.style.fontSize = "20px";
    golyomegjelenites49.style.fontWeight = "bold";
    golyomegjelenites49.style.display = "inline-flex";
    golyomegjelenites49.style.justifyContent = "center";
    golyomegjelenites49.style.alignItems = "center";
    golyomegjelenites49.style.color = "black";
    golyomegjelenites49.style.width = "45px";
    golyomegjelenites49.style.height = "45px";
    golyomegjelenites49.style.backgroundColor = "whitesmoke";
    golyomegjelenites49.style.border = "3px solid lightseagreen";
    golyomegjelenites49.style.borderRadius = "25px";
    golyomegjelenites49.style.margin = "10px";
    golyomegjelenites49.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites50 = document.querySelector("#golyo50");
    golyomegjelenites50.innerHTML = megtortentSorsolasokPuttoa[49];
    golyomegjelenites50.style.color = "black";
    golyomegjelenites50.style.fontSize = "20px";
    golyomegjelenites50.style.fontWeight = "bold";
    golyomegjelenites50.style.display = "inline-flex";
    golyomegjelenites50.style.justifyContent = "center";
    golyomegjelenites50.style.alignItems = "center";
    golyomegjelenites50.style.color = "black";
    golyomegjelenites50.style.width = "45px";
    golyomegjelenites50.style.height = "45px";
    golyomegjelenites50.style.backgroundColor = "whitesmoke";
    golyomegjelenites50.style.border = "3px solid lightseagreen";
    golyomegjelenites50.style.borderRadius = "25px";
    golyomegjelenites50.style.margin = "10px";
    golyomegjelenites50.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites51 = document.querySelector("#golyo51");
    golyomegjelenites51.innerHTML = megtortentSorsolasokPuttoa[50];
    golyomegjelenites51.style.color = "black";
    golyomegjelenites51.style.fontSize = "20px";
    golyomegjelenites51.style.fontWeight = "bold";
    golyomegjelenites51.style.display = "inline-flex";
    golyomegjelenites51.style.justifyContent = "center";
    golyomegjelenites51.style.alignItems = "center";
    golyomegjelenites51.style.color = "black";
    golyomegjelenites51.style.width = "45px";
    golyomegjelenites51.style.height = "45px";
    golyomegjelenites51.style.backgroundColor = "whitesmoke";
    golyomegjelenites51.style.border = "3px solid lightseagreen";
    golyomegjelenites51.style.borderRadius = "25px";
    golyomegjelenites51.style.margin = "10px";
    golyomegjelenites51.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites52 = document.querySelector("#golyo52");
    golyomegjelenites52.innerHTML = megtortentSorsolasokPuttoa[51];
    golyomegjelenites52.style.color = "black";
    golyomegjelenites52.style.fontSize = "20px";
    golyomegjelenites52.style.fontWeight = "bold";
    golyomegjelenites52.style.display = "inline-flex";
    golyomegjelenites52.style.justifyContent = "center";
    golyomegjelenites52.style.alignItems = "center";
    golyomegjelenites52.style.color = "black";
    golyomegjelenites52.style.width = "45px";
    golyomegjelenites52.style.height = "45px";
    golyomegjelenites52.style.backgroundColor = "whitesmoke";
    golyomegjelenites52.style.border = "3px solid lightseagreen";
    golyomegjelenites52.style.borderRadius = "25px";
    golyomegjelenites52.style.margin = "10px";
    golyomegjelenites52.style.boxShadow = "5px 5px 7px black";

    let golyomegjelenites53 = document.querySelector("#golyo53");
    golyomegjelenites53.innerHTML = megtortentSorsolasokPuttoa[52];
    golyomegjelenites53.style.color = "black";
    golyomegjelenites53.style.fontSize = "20px";
    golyomegjelenites53.style.fontWeight = "bold";
    golyomegjelenites53.style.display = "inline-flex";
    golyomegjelenites53.style.justifyContent = "center";
    golyomegjelenites53.style.alignItems = "center";
    golyomegjelenites53.style.color = "black";
    golyomegjelenites53.style.width = "45px";
    golyomegjelenites53.style.height = "45px";
    golyomegjelenites53.style.backgroundColor = "whitesmoke";
    golyomegjelenites53.style.border = "3px solid lightseagreen";
    golyomegjelenites53.style.borderRadius = "25px";
    golyomegjelenites53.style.margin = "10px";
    golyomegjelenites53.style.boxShadow = "5px 5px 7px black";

    
    //Feladatok MEGTÖRTÉNT sorsolásokra
    PuttoaLottoSzamKiolvas();
        PuttoaLottoSzerepelEAdottSzam();

}
    //Sorsolások száma
    function PuttoaSorsolasokSzama() {
        let sorsolasPuttoaMennyiseg = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < sorsolasokPuttoaLotto.length; i++) {
            sorsolasPuttoaMennyiseg[sorsolasokPuttoaLotto[i]]++;
            sorsolasPuttoaMennyiseg[0] += sorsolasokPuttoaLotto[i];
        }

        return sorsolasPuttoaMennyiseg;
    }  

    //FELADAT
    function PuttoaLottoSzamKiolvas() {
        let puttoaLottoTipp = document.querySelector("#puttoalottoTipp").value;
        return puttoaLottoTipp.split(",");
    }
    
    
    function PuttoaLottoSzerepelEAdottSzam(puttoaLottoTipp) {
        
        let puttoaLottoTippTomb = [];
        puttoaLottoTippTomb.push(PuttoaLottoSzamKiolvas(puttoaLottoTipp));
        console.log(puttoaLottoTippTomb);
    
        let stringesPuttoaTomb = [];
        let stringesPuttoa = sorsolasokPuttoaLotto.slice(-8).join().split(",");
        stringesPuttoaTomb.push(stringesPuttoa);
        console.log(stringesPuttoaTomb);
    
      let metszetPuttoa = [];
    
        for (let i = 0; i < stringesPuttoaTomb[0].length; i++) {
            for (let j = 0; j < puttoaLottoTippTomb[0].length; j++) {
                if (stringesPuttoaTomb[0][i] === puttoaLottoTippTomb[0][j]) {
                    metszetPuttoa.push(stringesPuttoaTomb[0][i]);
                    break;
                    }
            }
        }
        console.log(metszetPuttoa);
            document.querySelector("#puttoatalalatszamlalo").innerHTML = `A találatok száma: ` + metszetPuttoa.length + ` <br> A nyerőszámok a következők: ` + metszetPuttoa;   
        return metszetPuttoa;
    }

let f006aeventGomb = document.querySelector("#generalogomb6a");
f006aeventGomb.addEventListener("click", PuttoaLottoSzerepelEAdottSzam);




//Kihúzott számok - Tömb - PUTTÓ - B MEZŐ
let sorsolasokPuttobLotto = [];

//Generátor
function PuttobLottoGenerator() {
 
    let kisorsoltPuttoblottoSzamok = [];
    for (let i = 0; i < 1; i++) {
        let generaltSzam = Math.round(Math.random() * 3) + 1;
        let szerepelE = false;
        for (let j = 0; j < kisorsoltPuttoblottoSzamok.length; j++) {
            if (generaltSzam == kisorsoltPuttoblottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            kisorsoltPuttoblottoSzamok.push(generaltSzam)
        }
        else {
            i--;
        }
    }
    return kisorsoltPuttoblottoSzamok;
}
console.log(sorsolasokPuttobLotto);

//Több sorsolas
function PuttobTobbSorsolas(sorsolasPuttobMennyiseg) {
    let tobbSorsolasPuttob = [];
    for (let i = 0; i < sorsolasPuttobMennyiseg; i++) {
        tobbSorsolasPuttob.push(PuttobLottoGenerator());
    }
    return tobbSorsolasPuttob;
}

//Sorsolás megjelenítés
generalogomb6b.addEventListener("click", () => { PuttobSorsolasMegjelenites(54) });

function PuttobSorsolasMegjelenites(sorsolasPuttobMennyiseg) {
    let megtortentSorsolasokPuttob = PuttobTobbSorsolas(sorsolasPuttobMennyiseg);
    for (let i = 0; i < megtortentSorsolasokPuttob.length; i++) {
        sorsolasokPuttobLotto.push(...megtortentSorsolasokPuttob[i]);
    }

    let golyomegjelenites54 = document.querySelector("#golyo54");
    golyomegjelenites54.innerHTML = megtortentSorsolasokPuttob[53];
    golyomegjelenites54.style.color = "black";
    golyomegjelenites54.style.fontSize = "20px";
    golyomegjelenites54.style.fontWeight = "bold";
    golyomegjelenites54.style.display = "inline-flex";
    golyomegjelenites54.style.justifyContent = "center";
    golyomegjelenites54.style.alignItems = "center";
    golyomegjelenites54.style.color = "black";
    golyomegjelenites54.style.width = "45px";
    golyomegjelenites54.style.height = "45px";
    golyomegjelenites54.style.backgroundColor = "whitesmoke";
    golyomegjelenites54.style.border = "3px solid lightseagreen";
    golyomegjelenites54.style.borderRadius = "25px";
    golyomegjelenites54.style.margin = "10px";
    golyomegjelenites54.style.boxShadow = "5px 5px 7px black";

    
    //Feladatok MEGTÖRTÉNT sorsolásokra
    PuttobLottoSzamKiolvas();
        PuttobLottoSzerepelEAdottSzam();

}
    //Sorsolások száma
    function PuttobSorsolasokSzama() {
        let sorsolasPuttobMennyiseg = [0, 0];
        for (let i = 0; i < sorsolasokPuttobLotto.length; i++) {
            sorsolasPuttobMennyiseg[sorsolasokPuttobLotto[i]]++;
            sorsolasPuttobMennyiseg[0] += sorsolasokPuttobLotto[i];
        }

        return sorsolasPuttobMennyiseg;
    }  

    //FELADAT
    function PuttobLottoSzamKiolvas() {
        let puttobLottoTipp = document.querySelector("#puttoblottoTipp").value;
        return puttobLottoTipp.split(",");
    }
    
    
    function PuttobLottoSzerepelEAdottSzam(puttobLottoTipp) {
        
        let puttobLottoTippTomb = [];
        puttobLottoTippTomb.push(PuttobLottoSzamKiolvas(puttobLottoTipp));
        console.log(puttobLottoTippTomb);
    
        let stringesPuttobTomb = [];
        let stringesPuttob = sorsolasokPuttobLotto.slice(-1).join().split(",");
        stringesPuttobTomb.push(stringesPuttob);
        console.log(stringesPuttobTomb);
    
      let metszetPuttob = [];
    
        for (let i = 0; i < stringesPuttobTomb[0].length; i++) {
            for (let j = 0; j < puttobLottoTippTomb[0].length; j++) {
                if (stringesPuttobTomb[0][i] === puttobLottoTippTomb[0][j]) {
                    metszetPuttob.push(stringesPuttobTomb[0][i]);
                    break;
                    }
            }
        }
        console.log(metszetPuttob);
            document.querySelector("#puttobtalalatszamlalo").innerHTML = `A találatok száma: ` + metszetPuttob.length + ` <br> A nyerőszám a következő: ` + metszetPuttob;   
        return metszetPuttob;
    }

let f006beventGomb = document.querySelector("#generalogomb6b");
f006beventGomb.addEventListener("click", PuttobLottoSzerepelEAdottSzam);


//--> Innentől jön a blokkok megjelenítése

function feladatMutat(feladatAzonosito) {
    for (let i = 0; i <= 6; i++) {
        if (i != feladatAzonosito) {
            document.querySelector(`#feladatBlokk0${i}`).style.display = "none";
        }
        else {
            document.querySelector(`#feladatBlokk0${i}`).style.display = "block";
        }
    }
}

function F0mutat() {
    feladatMutat(0);
}
let g0event = document.querySelector("#g0");
g0event.addEventListener("click", F0mutat);

function F1mutat() {
    feladatMutat(1);
}
let g1event = document.querySelector("#g1");
g1event.addEventListener("click", F1mutat);

function F2mutat() {
    feladatMutat(2);
}
let g2event = document.querySelector("#g2");
g2event.addEventListener("click", F2mutat);

function F3mutat() {
    feladatMutat(3);
}
let g3event = document.querySelector("#g3");
g3event.addEventListener("click", F3mutat);

function F4Amutat() {
    feladatMutat(4);
}
let g4Aevent = document.querySelector("#g4");
g4Aevent.addEventListener("click", F4Amutat);

function F4Bmutat() {
    feladatMutat(4);
}
let g4Bevent = document.querySelector("#g4");
g4Bevent.addEventListener("click", F4Bmutat);

function F5mutat() {
    feladatMutat(5);
}
let g5event = document.querySelector("#g5");
g5event.addEventListener("click", F5mutat);

function F6Amutat() {
    feladatMutat(6);
}
let g6Aevent = document.querySelector("#g6");
g6Aevent.addEventListener("click", F6Amutat);

function F6Bmutat() {
    feladatMutat(6);
}
let g6Bevent = document.querySelector("#g6");
g6Bevent.addEventListener("click", F6Bmutat);