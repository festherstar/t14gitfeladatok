
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
    
    //1. feladat
    
    function MegszamlalasCsapat(){
        let csapatDb=0;
            for(let i=0;i<csapatAdat.length;i++){
                csapatDb++;
        }
        return csapatDb;
    }
    
    document.write("Csapatok száma: "+MegszamlalasCsapat());
    
    //2. feladat
    
    function pontszam(){
    let pontszamok = [];
    for (let i = 0; i < csapatAdat.length; i++) {
      let reszek = csapatAdat[i].split(';');
      pontszamok.push(parseInt(reszek[reszek.length - 1]));
      
        }
        return pontszamok;
        }
        
        let pontszamok = pontszam(csapatAdat);
        
        console.log("<hr>");
        console.log(pontszamok);
    
    function AtlagPont(pontszamok){
        let osszPont=0;
        for(let i=0;i<pontszamok.length;i++){
            osszPont+=pontszamok[i];
        }
        return osszPont/pontszamok.length;
    }
    function AtlagPontKiir(kiirandoEredmeny){
         document.write("<hr>");
        document.write("A pontok átlaga: "+kiirandoEredmeny);
    }
    AtlagPontKiir(AtlagPont(pontszamok));
    
    //3. feladat
    
    function AtlagFelettiCsapatok(){
        let teljeskiiras = [];
        let szamketto = 1620;
        for(let i=0;i<csapatAdat.length;i++){
        let keres = csapatAdat[i].split(';');
            if(keres[3]>szamketto){
                teljeskiiras.push(keres[0],keres[1],keres[2],keres[3]);
            }
        }
        return teljeskiiras;
    }
         document.write("<hr>");
        document.write("Az átlag feletti csapatok adatai: " +AtlagFelettiCsapatok());
       
    //4. feladat
    
     function LegtöbbetJavito(){
      let maxErtek = parseInt(csapatAdat[0].split(';')[2]);
      let maxCsapatAdat = csapatAdat[0];
    
      for (let i = 0; i < csapatAdat.length; i++) {
        let reszek = csapatAdat[i].split(';');
        let aktualisErtek = parseInt(reszek[2]);
    
        if (aktualisErtek > maxErtek) {
          maxErtek = aktualisErtek;
          maxCsapatAdat = csapatAdat[i];
        }
      }
    
      return maxCsapatAdat;
    }
    let maxCsapatAdat = LegtöbbetJavito(csapatAdat);
    document.write("<hr>");
    document.write("A legtöbbet javító csapat adatai: " +maxCsapatAdat);
       
    //5. feladat
    
    function SzerepelEaListan(){
    let ocsapat = [];
        for(let i=0;i<csapatAdat.length;i++){
        let ocsapatreszlet = csapatAdat[i].split(';');
      ocsapat.push(ocsapatreszlet[0]);
            if(ocsapatreszlet[0]=='Magyarország'){
                return true;
            }
        }
        return false;
    }
    document.write("<hr>");
    document.write("Szerepel-e Magyarország a listán? "+SzerepelEaListan());
    
    //6. feladat
    
    function egynelTöbbCsapat(csapatAdat) {
      let valtozasokSzama = {};
    
      for (let i = 0; i < csapatAdat.length; i++) {
        let adatokReszek = csapatAdat[i].split(';');
        let valtozas = adatokReszek[2];
    
        if (valtozasokSzama[valtozas] == null) {
          valtozasokSzama[valtozas] = 1;
        } else {
          valtozasokSzama[valtozas]++;
        }
      }
    
      return valtozasokSzama;
    }
    
    
    let helyvaltozasok = egynelTöbbCsapat(csapatAdat);
    document.write("<hr>");
    for (let valtozas in helyvaltozasok) {
      if (helyvaltozasok[valtozas] > 1) {
          
        document.write(valtozas + "  helyezést változott:  " + helyvaltozasok[valtozas] + " csapat ");
      }
    }
    
    