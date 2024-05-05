"use strict";
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
function ObjektumFeltolto(feltoltendoElem) {
    let beolvasottAdatok = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
        let daraboltAdatok = feltoltendoElem[i].split(";");
        let ujCsapat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3]),
        };
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}
var adatok = ObjektumFeltolto(csapatAdat);
console.log(adatok);
//1. feladat - Csapatok száma?
function CsapatokSzama(vizsgaltTomb) {
    return vizsgaltTomb.length;
}
let csapatokSzama = CsapatokSzama(adatok);
console.log("Csapatok száma: " + csapatokSzama);
document.write("Csapatok száma: " + csapatokSzama);
//2. feladat - Csapatok átlagpontszáma?
function PontszamokAtlaga(vizsgaltTomb) {
    let osszeg = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i].pont;
    }
    return Math.round(osszeg / vizsgaltTomb.length);
}
let pontSzamokAtlaga = PontszamokAtlaga(adatok);
console.log("A pontszámok átlaga: " + pontSzamokAtlaga);
document.write("<br> A pontszámok átlaga: " + pontSzamokAtlaga);
//3. feladat - Átlagértéket meghaladó csapatok listája
function AtlagFelettiek(vizsgaltTomb) {
    let atlagPont = PontszamokAtlaga(adatok);
    let atlagFelettiek = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pont > atlagPont) {
            atlagFelettiek.push(vizsgaltTomb[i].nev);
        }
    }
    return atlagFelettiek;
}
let atlagFeletti = AtlagFelettiek(adatok);
console.log("Az átlag feletti csapatok: " + atlagFeletti);
document.write("<br> Az átlag feletti csapatok: " + atlagFeletti);
//4. feladat - Ki javított a legtöbbet?
function LegtobbetJavitoIndex(vizsgaltTomb) {
    let kivalasztottCsapatIndex = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > vizsgaltTomb[kivalasztottCsapatIndex].valtozas) {
            kivalasztottCsapatIndex = i;
        }
    }
    return kivalasztottCsapatIndex;
}
function LegtobbetJavitoIndexKiir(csapatIndex) {
    console.log("A legtöbbet javító csapat neve:" + adatok[csapatIndex].nev);
    console.log("A legtöbbet javító csapat helyezése:" + adatok[csapatIndex].helyezes);
    console.log("A legtöbbet javító csapat változása:" + adatok[csapatIndex].valtozas);
    console.log("A legtöbbet javító csapat pontszáma:" + adatok[csapatIndex].pont);
    document.write("<br> A legtöbbet javító csapat neve:" + adatok[csapatIndex].nev);
    document.write("<br> A legtöbbet javító csapat helyezése:" + adatok[csapatIndex].helyezes);
    document.write("<br> A legtöbbet javító csapat változása:" + adatok[csapatIndex].valtozas);
    document.write("<br> A legtöbbet javító csapat pontszáma:" + adatok[csapatIndex].pont);
}
LegtobbetJavitoIndexKiir(LegtobbetJavitoIndex(adatok));
//5. feladat - Szerepel-e a listán?
function SzerepelEMagyarorszag(vizsgaltTomb) {
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == "Magyarország") {
            return true;
        }
    }
    return false;
}
function SzerepelEMagyarorszagKiir(vizsgalatEredmenye) {
    if (vizsgalatEredmenye == true) {
        console.log("Az országok között szerepel Magyarország.");
        document.write("<br> Az országok között szerepel Magyarország.");
    }
    else {
        console.log("Az országok között NEM szerepel Magyarország.");
        document.write("<br> Az országok között NEM szerepel Magyarország.");
    }
}
SzerepelEMagyarorszagKiir(SzerepelEMagyarorszag(adatok));
//6. feladat - Statisztika
function ValtozasTipusok(vizsgaltTomb) {
    let valtozasTipusok = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let szerepelE = false;
        for (let j = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            valtozasTipusok.push(vizsgaltTomb[i].valtozas);
        }
    }
    return valtozasTipusok;
}
function ValtozasMennyisegek(vizsgaltTomb, valtozasTipusok) {
    let valtozasMennyisegek = [];
    for (let i = 0; i < valtozasTipusok.length; i++) {
        valtozasMennyisegek.push(0);
    }
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        for (let j = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                valtozasMennyisegek[j]++;
            }
        }
    }
    return valtozasMennyisegek;
}
let valtozasokTipusai = ValtozasTipusok(adatok);
let valtozasokMennyisegei = ValtozasMennyisegek(adatok, valtozasokTipusai);
console.log(valtozasokTipusai);
console.log(valtozasokMennyisegei);
function StatisztikaKiirTABLAZAT(valtozasok, mennyisegek) {
    document.write("<table border='1' <caption><br>Statisztika</caption>");
    document.write("<tr><th>Változás</th><th>Mennyisége</th></tr>");
    for (let i = 0; i < valtozasok.length; i++) {
        if (mennyisegek[i] > 1) { //Ha ezt a feltételt kivesszük az összes változás mennyiség megjelenik
            document.write(`<tr><td>${valtozasok[i]}</td><td>${mennyisegek[i]}</td></tr>`);
        }
    }
    document.write("</table>");
}
StatisztikaKiirTABLAZAT(valtozasokTipusai, valtozasokMennyisegei);
