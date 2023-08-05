// IMplementar um controle de estado que determina se o Ken vai abrir o coração ou não de acordo com o amor da barbie

let barbieLove = Math.floor((Math.random() * 100)) + 1;

let isKenHeartOpen = false;

function hugKen() {
    let message = {
        friend: "Ken curtiu o abraço da Barbie",
        date: "Ken abraçou a Barbie de volta",
        love: "Ken abraçou a Barbie, olhos nos olhos",
    }
    if (barbieLove <= 40) {
        barbieLove += 41;
        return console.log(message.friend);
    } else if (barbieLove <= 50) {
        barbieLove += 10;
        return console.log(message.date);
    } else if (barbieLove <= 60) {
        barbieLove += 10;
        return console.log(message.love);
    }
}

function kissKen() {
    let message = {
        friend: "Ken ficou confuso com o beijo da Barbie",
        date: "Ken devolveu o beijo da Barbie",
        love: "Ken beijou a Barbie com amor",
    }
    if (barbieLove <= 70) {
        barbieLove += 10;
        return console.log(message.friend);
    } else if (barbieLove <= 80) {
        barbieLove += 10;
        return console.log(message.date);
    } else if (barbieLove < 100) {
        barbieLove += 20;
        return console.log(message.love);
    }
}   

function openKenHeart() {
    console.log("Ken abriu o coração!");
    isKenHeartOpen = true;
    letsGoParty();
}

function letsGoParty() {
    let fun = Math.floor((Math.random() * 100));
    console.log("Barbie chamou o Ken para entrar e tomar uma xícara de café depois da festa");
    if (fun > 70) {
        goingInside();
    } else {
        return console.log("Ken disse que não toma café.");
    }
}

function goingInside() {
    return console.log("Ken disse que aceita, se não for nenhum incômodo.");
}

while (!isKenHeartOpen) {
    console.log(barbieLove)
    if (barbieLove <= 60) {
        hugKen();
    } else if ((barbieLove < 100)) {
        kissKen();
    } else {
        openKenHeart();
    }
}