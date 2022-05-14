
var check = document.getElementById("check");

check.addEventListener("change", proveriCheck);

function proveriCheck() {

    if (this.checked == true) {

        document.getElementById("ispisCheck").innerText = "Uspesno ste prihvatili pravila";

    } else {

        document.getElementById("ispisCheck").innerText = ""
    }
}

var forma = document.getElementById("forma");

forma.addEventListener("submit", proveriEmail);

function proveriEmail(e) {

    e.preventDefault();
    let email = document.getElementById("email").value;
    let paternEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (paternEmail.test(email)) {

        alert("Uspesno verifikovan email");
    } else {

        alert("Neuspesno veriifkovan email");
    }

}

document.getElementById("boje").addEventListener("change", promeniBoju);

function promeniBoju() {

    let labele = document.querySelectorAll("label");

    for (let i = 0; i < labele.length; i++) {
        labele[i].style.color = document.getElementById("boje").value;
    }
}