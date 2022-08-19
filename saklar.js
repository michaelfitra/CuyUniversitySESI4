
function saklar() {
    let toggle1 = document.getElementById("toggle1");
    let toggle2 = document.getElementById("toggle2");
    let toggle3 = document.getElementById("toggle3");
    let toggle4 = document.getElementById("toggle4");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.png"
    } else {
        lampu1.src = "assets/images/off.png"
    }
    if (toggle2.checked) {
        lampu2.src = "assets/images/on.png"
    } else {
        lampu2.src = "assets/images/off.png"
    }
    if (toggle3.checked) {
        lampu3.src = "assets/images/on.png"
    } else {
        lampu3.src = "assets/images/off.png"
    }
    if (toggle4.checked) {
        lampu4.src = "assets/images/on.png"
    } else {
        lampu4.src = "assets/images/off.png"
    }

}

function allSaklar() {
    let toggle0 = document.getElementById("toggle0");

    if (toggle0.checked){
        toggle1.checked = true
        toggle2.checked = true
        toggle3.checked = true
        toggle4.checked = true
        lampu1.src = "assets/images/on.png"
        lampu2.src = "assets/images/on.png"
        lampu3.src = "assets/images/on.png"
        lampu4.src = "assets/images/on.png"
    } else {
        toggle1.checked = false
        toggle2.checked = false
        toggle3.checked = false
        toggle4.checked = false
        lampu1.src = "assets/images/off.png"
        lampu2.src = "assets/images/off.png"
        lampu3.src = "assets/images/off.png"
        lampu4.src = "assets/images/off.png"
    }
}

function allSaklar1() {
    let toggle0 = document.getElementById("toggle10");

    if (toggle0.checked){
        toggle1.checked = true
        toggle2.checked = true
        toggle3.checked = true
        lampu1.src = "assets/images/on.png"
        lampu2.src = "assets/images/on.png"
        lampu3.src = "assets/images/on.png"
    } else {
        toggle1.checked = false
        toggle2.checked = false
        toggle3.checked = false
        lampu1.src = "assets/images/off.png"
        lampu2.src = "assets/images/off.png"
        lampu3.src = "assets/images/off.png"
    }
}

function allSaklar2() {
    let toggle0 = document.getElementById("toggle20");

    if (toggle0.checked){
        toggle1.checked = true
        toggle2.checked = true

        lampu1.src = "assets/images/on.png"
        lampu2.src = "assets/images/on.png"

    } else {
        toggle1.checked = false
        toggle2.checked = false

        lampu1.src = "assets/images/off.png"
        lampu2.src = "assets/images/off.png"

    }
}

function allSaklar3() {
    let toggle0 = document.getElementById("toggle30");

    if (toggle0.checked){
        toggle1.checked = true
        lampu1.src = "assets/images/on.png"
    } else {
        toggle1.checked = false
        lampu1.src = "assets/images/off.png"
    }
}
