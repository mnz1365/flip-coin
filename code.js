var heads = 0;
var tails = 0;

function myFlip() {
    var num = Math.floor(Math.random() * 2);

    if(num == 0) {
        document.getElementById('myimg').src = "img/head.jpg";
        heads = heads + 1;
        document.getElementById('headlable').innerHTML = `Heads: ${heads}`;
    }
    if(num == 1) {
        document.getElementById('myimg').src = "img/tail.jpg";
        tails = tails + 1;
        document.getElementById('taillabel').innerHTML = `Tails: ${tails}`;


    }
}

function myReset() {

    document.getElementById('myimg').src = "img/head.jpg";
    heads = 0;
    tails = 0;
    document.getElementById('headlable').innerHTML = `Heads: ${heads}`;
    document.getElementById('taillabel').innerHTML = `Tails: ${tails}`;
}