const europaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]

//1. feladat 

function MegszamlalasEu(){
let euDb=0;
    for(let i=0;i<europaiUnio.length;i++){
        euDb++;
}
return euDb;
}

document.write("EU tagok száma: "+MegszamlalasEu());

//2. feladat

function csatlakozott2007(){
let csatDb=0;
    for(let i=0;i<europaiUnio.length;i++){
let ev = europaiUnio[i].csatlakozas.slice(0,4);//.split('.')[0];
    if(ev == 2007)
        {csatDb++;}
}
return csatDb;
}


document.write("<hr>");
document.write("EU tagok száma 2007-ben: "+csatlakozott2007());

//3. feladat

function CsatlakozottE(){
for(let i=0;i<europaiUnio.length;i++){
    if(europaiUnio[i].orszag=='Magyarország'){
        return true;
    }
}
return false;
}
document.write("<hr>");
document.write("Csatlakozott-e Magyarország? "+CsatlakozottE());

//4. feladat

function CsatlakozottEmajusban(){
for(let i=0;i<europaiUnio.length;i++){
     let honap = europaiUnio[i].csatlakozas.slice(5,7);//.split('.')[0];
    if(honap == '05'){
        return true;
    }
}
return false;
}
document.write("<hr>");
document.write("Volt-e májusban csatlakozás? "+CsatlakozottEmajusban());

//5. feladat

/*
function LegutoljaraCsatlakozott(){

let maxErtek=parseInt(europaiUnio[0].csatlakozas.slice(0,4)); 
    for(let i=0;i<europaiUnio.length;i++){

let maxev = parseInt(europaiUnio[i].csatlakozas.slice(0,4));
    if(maxev>maxErtek){
    maxErtek=maxev;
    }
}
return maxErtek;
}

document.write("<hr>");
document.write("Legutoljára csatlakozott ország: "+LegutoljaraCsatlakozott());
*/

function LegutoljaraCsatlakozott(){
let legutoljaraCsatlakozottIndex=0;
    for(let i=0;i<europaiUnio.length;i++){
        if(europaiUnio[i].csatlakozas.slice(0,4)>europaiUnio[legutoljaraCsatlakozottIndex].csatlakozas.slice(0,4)){
        legutoljaraCsatlakozottIndex=i;
    }
}
return legutoljaraCsatlakozottIndex;
}

function LegutoljaraCsatlakozottKiir(indexErtek){
document.write("A legutoljára csatlakozó ország: "+europaiUnio[indexErtek].orszag);
}
document.write("<hr>");
LegutoljaraCsatlakozottKiir(LegutoljaraCsatlakozott(europaiUnio));

document.write("<hr>");
document.write("<hr>");

//6. feladat

function alkalomSzamlalo(europaiUnio) {
let evszamok = {};

for (let i = 0; i < europaiUnio.length; i++) {
let szam = europaiUnio[i].csatlakozas.slice(0,4);
if (evszamok[szam]) {
  evszamok[szam]++;
} else {
  evszamok[szam] = 1;
}
}

return evszamok;
}

let alkalmak = alkalomSzamlalo(europaiUnio);

for (let szam in alkalmak) {
document.write(szam + ': ' + alkalmak[szam] + ' ország csatlakozott <hr>');
}