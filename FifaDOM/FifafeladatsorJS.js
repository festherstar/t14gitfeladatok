//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat = [
    "Anglia;4;0;1662", 
    "Argentína;10;0;1614", 
    "Belgium;1;0;1752", 
    "Brazília;3;-1;1719", 
    "Chile;17;-3;1576", 
    "Dánia;14;-1;1584", 
    "Franciaország;2;1;1725", 
    "Hollandia;13;3;1586", 
    "Horvátország;8;-1;1625", 
    "Kolumbia;9;-1;1622", 
    "Mexikó;12;0;1603", 
    "Németország;16;-1;1580", 
    "Olaszország;15;1;1583", 
    "Peru;19;0;1551", 
    "Portugália;5;1;1643", 
    "Spanyolország;7;2;1631", 
    "Svájc;11;0;1604", 
    "Svédország;18;0;1560", 
    "Szenegál;20;0;1546", 
    "Uruguay;6;-1;1639"
    ];


    function ObjektumFeltolto(feltoltendoElem){
        let beolvasottAdatok=[];
        for(let i=0;i<feltoltendoElem.length;i++){
            let objektum={};
            let daraboltSor=feltoltendoElem[i].split(";");
            objektum.nev=daraboltSor[0];
            objektum.helyezes=Number(daraboltSor[1]);
            objektum.valtozas=Number(daraboltSor[2]);
            objektum.pont=Number(daraboltSor[3]);
            beolvasottAdatok.push(objektum);
        }
        return beolvasottAdatok;
    }
    
    const fifaAdatok=ObjektumFeltolto(csapatAdat);
    console.log(fifaAdatok);


    
//1. feladat - Csapatok száma?

//Eredmény kiszámolása
function CsapatokSzama(vizsgaltTomb){
    return vizsgaltTomb.length;
}

//Eredmény megjelenítése
function CsapatokSzamaKiir(){
    let csapatszam=CsapatokSzama(csapatAdat);
    document.querySelector("#f1").innerHTML="A csapatok száma: "+csapatszam;
}

//Esemény hozzárendelése
let f1eventGomb=document.querySelector("#f1feladat");
f1eventGomb.addEventListener("click",CsapatokSzamaKiir);


//2. feladat - Csapatok átlagpontszáma?

//Eredmény kiszámolása
function PontszamokAtlaga(vizsgaltTomb){
	let osszeg=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
    	osszeg+=vizsgaltTomb[i].pont;
    }
    return Math.round(osszeg/vizsgaltTomb.length);
}

//Eredmény megjelenítése
function AtlagPontszamKiir(){
    let atlagszama=PontszamokAtlaga(fifaAdatok);
    document.querySelector("#f2").innerHTML=`A csapatok átlagpontszáma: ${atlagszama}`; 
}

//Esemény hozzárendelése
let f2eventGomb=document.querySelector("#f2feladat");
f2eventGomb.addEventListener("click",AtlagPontszamKiir);


//3. feladat - Átlagértéket meghaladó csapatok listája

//Eredmény kiszámolása
function AtlagFelettiek(vizsgaltTomb){
	let atlagPont=PontszamokAtlaga(fifaAdatok);
    let atlagFelettiek=[];
    for(let i=0;i<vizsgaltTomb.length;i++){
    	if(vizsgaltTomb[i].pont>atlagPont){
        	atlagFelettiek.push(vizsgaltTomb[i].nev);
        }
    }
    return atlagFelettiek;
}

//Eredmény megjelenítése
function AtlagFelettiGenerator(){
    let csapatnevek=AtlagFelettiek(fifaAdatok);
    let table=document.querySelector("#f3");
    for(let i=0;i<csapatnevek.length;i++){
        let adatSor=table.insertRow(1);
        let csapat=adatSor.insertCell(0);
        csapat.innerHTML=csapatnevek[i];
    }
    f3eventGomb.removeEventListener("click",AtlagFelettiGenerator);
}

//Esemény hozzárendelése
f3eventGomb=document.querySelector("#f3feladat");
f3eventGomb.addEventListener("click", AtlagFelettiGenerator);


//4. feladat - Ki javított a legtöbbet?

//Eredmény kiszámolása
function LegtobbetJavitoIndex(vizsgaltTomb){
	let kivalasztottCsapatIndex=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
    	if(vizsgaltTomb[i].valtozas>vizsgaltTomb[kivalasztottCsapatIndex].valtozas){
        	kivalasztottCsapatIndex=i;
        }
    }
    return kivalasztottCsapatIndex;
}

//Eredmény megjelenítése
function LegtöbbetJavitoGenerator(){
    let csapatadatai=LegtobbetJavitoIndex(fifaAdatok);
    let table=document.querySelector("#f4");
    for(let i=0;i<fifaAdatok.length;i++){
        if (kivalasztottCsapatIndex=i){
            break;
        }
        let adatSor=table.insertRow(1);
        let neve=adatSor.insertCell(0);
        let helyezese=adatSor.insertCell(1);
        let pontja=adatSor.insertCell(2);
        neve.innerHTML=fifaAdatok[csapatadatai].nev;
        helyezese.innerHTML=fifaAdatok[csapatadatai].helyezes;
        pontja.innerHTML=fifaAdatok[csapatadatai].pont;
        
    }

    f4eventGomb.removeEventListener("click",LegtöbbetJavitoGenerator);
}

//Esemény hozzárendelése
f4eventGomb=document.querySelector("#f4feladat");
f4eventGomb.addEventListener("click", LegtöbbetJavitoGenerator);


//5. feladat - Szerepel-e a listán?

//Adat kiolvasása
function NevKiolvaso(){
    let csapatNev=document.querySelector("#csapatNeve").value;
    return csapatNev;
}
//Eredmény kiszámolása
function SzerepelE(vizsgaltTomb, csapatNeve){
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].nev==csapatNeve){
            return true;
        }
    }
    return false;
}

//Eredmény megjelenítése
function SzerepelEKiir(){
    let adottCsapat=NevKiolvaso();
    let szerepeltE=SzerepelE(fifaAdatok, adottCsapat);
    if(szerepeltE==true){
        document.querySelector("#f5").innerHTML=`${adottCsapat} szerepel a listán.`
    }
    else{
        document.querySelector("#f5").innerHTML=`${adottCsapat} NEM szerepel a listán.`
    }
}

//Esemény hozzárendelése
let f5eventGomb=document.querySelector("#f5feladat");
f5eventGomb.addEventListener("click", SzerepelEKiir);


//6. feladat - Statisztika

//Eredmény kiszámolása
function ValtozasTipusok(vizsgaltTomb){
	let valtozasTipusok=[];
    for(let i=0;i<vizsgaltTomb.length;i++){
    	let szerepelE=false;
        for(let j=0;j<valtozasTipusok.length;j++){
        	if(vizsgaltTomb[i].valtozas==valtozasTipusok[j]){
            	szerepelE=true;
            }
        }
        if(szerepelE==false){
        	valtozasTipusok.push(vizsgaltTomb[i].valtozas);
        }
    }
    return valtozasTipusok;
}
function ValtozasMennyisegek(vizsgaltTomb, valtozasTipusok){
	let valtozasMennyisegek=[];
    for(let i=0;i<valtozasTipusok.length;i++){
    	valtozasMennyisegek.push(0);
    }
    for(let i=0;i<vizsgaltTomb.length;i++){
        for(let j=0;j<valtozasTipusok.length;j++){
        	if(vizsgaltTomb[i].valtozas==valtozasTipusok[j]){
             	valtozasMennyisegek[j]++;
            }
        }
    }
    return valtozasMennyisegek;
}

//Eredmény megjelenítése
function StatisztikaTablazatGenerator(){
    let valtozas=ValtozasTipusok(fifaAdatok);
    let valtozasMennyisege=ValtozasMennyisegek(fifaAdatok,valtozas);
    let table=document.querySelector("#f6");
    for(let i=0;i<valtozas.length;i++){
        if(valtozasMennyisege[i]>1){
        let adatSor=table.insertRow(1);
        let valt=adatSor.insertCell(0);
        let mennyiseg=adatSor.insertCell(1);
        valt.innerHTML=valtozas[i];
        mennyiseg.innerHTML=valtozasMennyisege[i];
        }
    }
    f6eventGomb.removeEventListener("click",StatisztikaTablazatGenerator);
}

//Esemény hozzárendelése
f6eventGomb=document.querySelector("#f6feladat");
f6eventGomb.addEventListener("click", StatisztikaTablazatGenerator);