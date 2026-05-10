function prikaziDatum() {
    var mjeseci = [
        "siječnja", "veljače", "ožujka", "travnja",
        "svibnja", "lipnja", "srpnja", "kolovoza",
        "rujna", "listopada", "studenoga", "prosinca"
    ];

    var danas = new Date();
    var dan    = danas.getDate();
    var mjesec = mjeseci[danas.getMonth()];
    var godina = danas.getFullYear();

    var tekst = dan + ". " + mjesec + " " + godina + ".";
    document.getElementById("datum-prikaz").textContent = tekst;
}


function toggleKvadrat() {
    var kvadrat = document.getElementById("kvadrat");
    if (kvadrat.hidden) {
        kvadrat.hidden = false;
        azurirajInfo();
    } else {
        kvadrat.hidden = true;
        document.getElementById("info-kvadrat").textContent = "";
    }
}


function toggleKlizac() {
    var klizac = document.getElementById("klizac");
    klizac.hidden = !klizac.hidden;
}


function promijeniVelicinu(vrijednost) {
    var kvadrat = document.getElementById("kvadrat");
    kvadrat.style.width  = vrijednost + "px";
    kvadrat.style.height = vrijednost + "px";

    // Prikaži kvadrat ako je skriven
    if (kvadrat.hidden) {
        kvadrat.hidden = false;
    }

    azurirajInfo();
}

function azurirajInfo() {
    var kvadrat = document.getElementById("kvadrat");
    var stranica = parseInt(kvadrat.style.width) || 20;
    var povrsina = stranica * stranica;
    document.getElementById("info-kvadrat").textContent =
        "stranica = " + stranica + ", površina = " + povrsina;
}