// IMplementar um controle de estado que determina se o Ken vai abrir o coração ou não de acordo com o amor da barbie
// Importante: rodar o script no console do navegador para ver o resultado com CSS aplicado

let barbieLove = 0;
let isKenHeartOpen = false;
let css = "{background-color: pink, color: white; font-size: 24px; font-weight: bold; padding: 8px;}"

function hugKen() {
    let message = {
        friend: "%c Ken curtiu o abraço da Barbie",
        date: "%c Ken abraçou a Barbie de volta",
        date: "%c Ken abraçou a Barbie, olhos nos olhos",
    }
    if (barbieLove < 40) {
        barbieLove += 40;
        return console.log(message.friend, css);
    } else if (barbieLove <= 40) {
        barbieLove += 20;
        return console.log(message.date, css);
    } else if (barbieLove <= 60) {
        return console.log(message.love, css);
    }
}

function kissKen() {
    let message = {
        friend: "%c Ken ficou confuso com o beijo da Barbie",
        date: "%c Ken devolveu o beijo da Barbie",
        love: "%c Ken beijou a Barbie com amor",
    }
    if (barbieLove <= 60) {
        barbieLove += 10;
        return console.log(message.friend, css);
    } else if (barbieLove <= 70) {
        barbieLove += 10;
        return console.log(message.date,css);
    } else if (barbieLove < 100) {
        barbieLove += 20;
        return console.log(message.love, css);
    }
}   

function openKenHeart() {
    console.log("%c Ken abriu o coração!", css);
    isKenHeartOpen = true;
    letsGoParty();
}

function letsGoParty() {
    let fun = (Math.random() * 100).toFixed(0);
    console.log("%c Barbie chamou o Ken para entrar e tomar uma xícara de café depois da festa", css);
    if (fun > 80) {
        goingInside();
    } else {
        return console.log("%c Ken disse que não toma café.", css);
    }
}


function goingInside() {
    return console.log("%c Ken disse que aceita, se não for nenhum incômodo.", css);
}

while (!isKenHeartOpen) {
    if (barbieLove < 59) {
        hugKen();
    } else if ((barbieLove < 100)) {
        kissKen();
    } else {
        openKenHeart();
    }
}