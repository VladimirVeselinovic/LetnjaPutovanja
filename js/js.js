

var slikaTeam = document.getElementById("onamaImg");
var brojac = 1;
slikaTeam.addEventListener("click", promeniSlikuTima);

function promeniSlikuTima() {

    if (brojac == 1) {
        slikaTeam.style.background = "url('slike/team2.jpg') no-repeat center center/cover";
        brojac = 2
    } else {
        slikaTeam.style.background = "url('slike/team1.jpg') no-repeat center center/cover";
        brojac = 1
    }

}

