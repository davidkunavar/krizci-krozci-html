
function funkcija() {
    let a = document.getElementById("naslov");
    a.innerText = '';
    let b1 = document.getElementById("prvi__prvi").value
    let b2 = document.getElementById("prvi__drugi").value
    let b3 = document.getElementById("prvi__tretji").value
    let b4 = document.getElementById("drugi__prvi").value
    let b5 = document.getElementById("drugi__drugi").value
    let b6 = document.getElementById("drugi__tretji").value
    let b7 = document.getElementById("tretji__prvi").value
    let b8 = document.getElementById("tretji__drugi").value
    let b9 = document.getElementById("tretji__tretji").value

    /* zmaga X */
    if (b1 === "x" && b2 === "x" && b3 === "x") {
        document.getElementById("prvi__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("prvi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("prvi__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec X";
    }
    else if (b4 === "x" && b5 === "x" && b6 === "x") {
        document.getElementById("drugi__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec X";
    }
    else if (b7 === "x" && b8 === "x" && b9 === "x") {
        document.getElementById("tretji__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec X";
    }

    else if (b1 === "x" && b5 === "x" && b9 === "x") {
        document.getElementById("prvi__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec X";
    }
    else if (b3 === "x" && b5 === "x" && b7 === "x") {
        document.getElementById("prvi__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec X";
    }
    else if (b1 === "x" && b4 === "x" && b7 === "x") {
        document.getElementById("prvi__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec X";
    }
    else if (b2 === "x" && b5 === "x" && b8 === "x") {
        document.getElementById("prvi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec X";
    }
    else if (b3 === "x" && b6 === "x" && b9 === "x") {
        document.getElementById("prvi__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec X";
    }

    /* zmaga O */
    if (b1 === "o" && b2 === "o" && b3 === "o") {
        document.getElementById("prvi__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("prvi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("prvi__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec O";
    }
    else if (b4 === "o" && b5 === "o" && b6 === "o") {
        document.getElementById("drugi__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec O";
    }
    else if (b7 === "o" && b8 === "o" && b9 === "o") {
        document.getElementById("tretji__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec O";
    }

    else if (b1 === "o" && b5 === "o" && b9 === "o") {
        document.getElementById("prvi__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec O";
    }
    else if (b3 === "o" && b5 === "o" && b7 === "o") {
        document.getElementById("prvi__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec O";
    }
    else if (b1 === "o" && b4 === "o" && b7 === "o") {
        document.getElementById("prvi__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__prvi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec O";
    }
    else if (b2 === "o" && b5 === "o" && b8 === "o") {
        document.getElementById("prvi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__drugi").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec O";
    }
    else if (b3 === "o" && b6 === "o" && b9 === "o") {
        document.getElementById("prvi__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("drugi__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        document.getElementById("tretji__tretji").style.backgroundColor = "rgba(200, 200, 200, 0.6)";
        a.innerText = "Zmagal je igralec O";
    }
    /* napacno vneseno */
    else if(b9 !== "x" || b9 !== "o"){
        a.innerText = "napacno"
        }
}