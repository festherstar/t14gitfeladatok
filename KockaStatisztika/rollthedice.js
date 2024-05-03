var dobasok = [];
console.log(dobasok);
function KockaDobas() {
    return Math.round(Math.random() * 5) + 1;//1 és 6 közötti dobás érték
}

function TobbKockaDobas(dobasMennyiseg) {
    let tobbDobas = [];
    for (let i = 0; i < dobasMennyiseg; i++) {
        tobbDobas.push(KockaDobas());
    }
    return tobbDobas;
}

kockaEldobasa.addEventListener("click", () => { KockaMegjelenites(3) });

function KockaMegjelenites(dobasMennyiseg) {
    let megtortentDobasok = TobbKockaDobas(dobasMennyiseg);
    for (let i = 0; i < megtortentDobasok.length; i++) {
        dobasok.push(megtortentDobasok[i]);

    }
    document.querySelector("#kockaKep01").style.backgroundImage = "url(img/" + megtortentDobasok[0] + ".png)";

    document.querySelector("#kockaKep02").style.backgroundImage = "url(img/" + megtortentDobasok[1] + ".png)";

    document.querySelector("#kockaKep03").style.backgroundImage = "url(img/" + megtortentDobasok[2] + ".png)";

    //TRIPLA DOBÁS FELADATOK:
    MaxDobas(megtortentDobasok);
    HatosDobas(megtortentDobasok);
    TriplaHatos(megtortentDobasok);
    Egyformak(megtortentDobasok);
    NemEgyformak(megtortentDobasok);
    LegkevesebbszerElofordulo(megtortentDobasok);
    LegtobbszorElofordulo(megtortentDobasok);
    LegkevesebbszerEloforduloEgeszben(megtortentDobasok);
    LegtobbszorEloforduloEgeszben(megtortentDobasok);
    SzazalekSzamitas(megtortentDobasok);
    ParatlanDobasokSzama(megtortentDobasok);
    SorozatIdo(megtortentDobasok);
}

function DobasokSzama() {
    let dobasMennyiseg = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < dobasok.length; i++) {
        dobasMennyiseg[dobasok[i]]++;//Ha találok egy adott dobást, annak indexét növelem eggyel...
        dobasMennyiseg[0] += dobasok[i];
    }
    return dobasMennyiseg;
}

function AtlagSzamitas(eredmenyek) {
    return eredmenyek[0] / dobasok.length;
}

function StatisztikaKiir(eredmenyek) {
    document.querySelector("#egyes").innerHTML = eredmenyek[1];
    document.querySelector("#kettes").innerHTML = eredmenyek[2];
    document.querySelector("#harmas").innerHTML = eredmenyek[3];
    document.querySelector("#negyes").innerHTML = eredmenyek[4];
    document.querySelector("#otos").innerHTML = eredmenyek[5];
    document.querySelector("#hatos").innerHTML = eredmenyek[6];
    document.querySelector("#dobasMennyiseg").innerHTML = dobasok.length;
    document.querySelector("#osszesen").innerHTML = eredmenyek[0];
    document.querySelector("#atlag").innerHTML = AtlagSzamitas(eredmenyek).toFixed(2);
    ParatlanDobasokSzama(dobasok);
    SorozatIdo();
}

kockaEldobasa.addEventListener("click", () => { StatisztikaKiir(DobasokSzama()) });

//FELADATOK TRIPLA DOBÁSRA:
function MaxDobas(aktDobasok) {
    let aktDobasOsszege = aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
    let eddigiLegnagyobb = document.querySelector("#legnagyobb").innerHTML;
        if (aktDobasOsszege > eddigiLegnagyobb) {
            document.querySelector("#legnagyobb").innerHTML = aktDobasOsszege;
        }

}

function HatosDobas(aktDobasok) {
    for (let i = 0; i < aktDobasok.length; i++) {
        if (aktDobasok[i] == 6) {
            let aktMennyiseg = document.querySelector("#hatosok").innerHTML;//Kiolvasom
            aktMennyiseg++;//Növelem 
            document.querySelector("#hatosok").innerHTML = aktMennyiseg;//Visszaírom
        }
    }
}

function TriplaHatos(aktDobasok) {
    if (aktDobasok[0] == 6 && aktDobasok[1] == 6 && aktDobasok[2] == 6) {
        document.querySelector("#triplaHat").innerHTML = "Volt";
    }
}

function Egyformak(aktDobasok) {
    if (aktDobasok[0] == aktDobasok[1] && aktDobasok[1] == aktDobasok[2]) {
        let aktMennyiseg = document.querySelector("#egyformak").innerHTML;//Kiolvasom
        aktMennyiseg++;//Növelem 
        document.querySelector("#egyformak").innerHTML = aktMennyiseg;//Visszaírom
    }
}

function NemEgyformak(aktDobasok) {
    if (aktDobasok[0] != aktDobasok[1] && aktDobasok[1] != aktDobasok[2] && aktDobasok[0] != aktDobasok[2]) {
        let aktMennyiseg = document.querySelector("#nemegyformak").innerHTML;//Kiolvasom
        aktMennyiseg++;//Növelem 
        document.querySelector("#nemegyformak").innerHTML = aktMennyiseg;//Visszaírom
    }
}

function LegkevesebbszerElofordulo (aktDobasok) {
    let legkevesebbszerEloforduloSzam = [...aktDobasok.reduce((r, n) => r.set(n, (r.get(n)|| 0) +1), new Map()
    )]
        .reduce ((r, v) => v[1] < r[1] ? v : r)[0];
            document.querySelector("#legkevesebbszer").innerHTML = legkevesebbszerEloforduloSzam;//Visszaírom
}

function LegtobbszorElofordulo (aktDobasok) {
    let legtobbszorEloforduloSzam = [...aktDobasok.reduce((r, n) => r.set(n, (r.get(n)|| 0) +1), new Map()
    )]
        .reduce ((r, v) => v[1] > r[1] ? v : r)[0];
            document.querySelector("#legtobbszor").innerHTML = legtobbszorEloforduloSzam;//Visszaírom
}


function LegkevesebbszerEloforduloEgeszben () {
    let legkevesebbszerEloforduloSzamEgeszben = [...dobasok.reduce((r, n) => r.set(n, (r.get(n)|| 0) +1), new Map()
    )]
        .reduce ((r, v) => v[1] < r[1] ? v : r)[0];
            document.querySelector("#legkevesebbszeregeszben").innerHTML = legkevesebbszerEloforduloSzamEgeszben;//Visszaírom
}

function LegtobbszorEloforduloEgeszben () {
    let legtobbszorEloforduloSzamEgeszben = [...dobasok.reduce((r, n) => r.set(n, (r.get(n)|| 0) +1), new Map()
    )]
        .reduce ((r, v) => v[1] > r[1] ? v : r)[0];
            document.querySelector("#legtobbszoregeszben").innerHTML = legtobbszorEloforduloSzamEgeszben;//Visszaírom
}

function SzazalekSzamitas(dobasMennyiseg) {
    let eddigiDobasok = dobasok.length;

    let ketto = DobasokSzama(dobasMennyiseg)[2];
    let negy = DobasokSzama(dobasMennyiseg)[4];
    let hat = DobasokSzama(dobasMennyiseg)[6]; 

        let szazaleka2 = ((ketto/eddigiDobasok)*100).toFixed(2);
            document.querySelector("#szazalekkettes").innerHTML = "A kettes dobás százalékban kifejezve: " +szazaleka2+ "%";
        let szazaleka4 = ((negy/eddigiDobasok)*100).toFixed(2);
            document.querySelector("#szazaleknegyes").innerHTML = "A négyes dobás százalékban kifejezve: " +szazaleka4+ "%";
        let szazaleka6 = ((hat/eddigiDobasok)*100).toFixed(2);
            document.querySelector("#szazalekhatos").innerHTML = "A hatos dobás százalékban kifejezve: " +szazaleka6+ "%";
}

function ParatlanDobasokSzama(){ 
    let paratlanMennyiseg = 0;
        for (let i = 0; i < dobasok.length; i++) {
            if (dobasok[i] % 2 !== 0) {
                paratlanMennyiseg++; 
            } 
        }
    document.querySelector("#paratlanokszama").innerHTML = paratlanMennyiseg;  
}

function SorozatIdo(aktDobasok){  
    for (let i = 0; i < aktDobasok.length; i++) {
        if (aktDobasok[0] == 1 && aktDobasok[1] == 2 && aktDobasok[2] == 3 ||
            aktDobasok[0] == 2 && aktDobasok[1] == 3 && aktDobasok[2] == 4 ||
            aktDobasok[0] == 3 && aktDobasok[1] == 4 && aktDobasok[2] == 5 ||
            aktDobasok[0] == 4 && aktDobasok[1] == 5 && aktDobasok[2] == 6 ||
            aktDobasok[0] == 6 && aktDobasok[1] == 5 && aktDobasok[2] == 4 ||
            aktDobasok[0] == 5 && aktDobasok[1] == 4 && aktDobasok[2] == 3 ||
            aktDobasok[0] == 4 && aktDobasok[1] == 3 && aktDobasok[2] == 2 ||
            aktDobasok[0] == 3 && aktDobasok[1] == 2 && aktDobasok[2] == 1  ) {

                var jd = new Date();
                document.querySelector("#sorozat").innerHTML = `Sikerült sorozatot dobni. `+jd.getFullYear()+"-"+(1+jd.getMonth())+"-"+jd.getDate()+"_"+jd.getHours()+":"+jd.getMinutes()+":"+jd.getSeconds();
            }
    }
   
}

