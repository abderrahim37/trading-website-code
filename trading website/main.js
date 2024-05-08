let allImpo = document.getElementById('allImpo');

window.onscroll = function(){
    if( window.scrollY >= 100 ){
        allImpo.style.top = "0px";
        allImpo.style.display = "block";
        allImpo.style.filter = "blur(0)";
    }else{
        allImpo.style.top = "200px";
    };
};

let svg1 = document.getElementById('svg1');
let box1 = document.getElementById('box1');

svg1.onclick = function(){
    svg1.style.background = "orange";
    box1.style.background = " rgb(3, 3, 3)";
};

let svg2 = document.getElementById('svg2');
let box2 = document.getElementById('box2');

svg2.onclick = function(){
    svg2.style.background = "orange";
    box2.style.background = " rgb(3, 3, 3)";
};

let svg3 = document.getElementById('svg3');
let box3 = document.getElementById('box3');

svg3.onclick = function(){
    svg3.style.background = "orange";
    box3.style.background = " rgb(3, 3, 3)";
};

let svg4 = document.getElementById('svg4');
let box4 = document.getElementById('box4');

svg4.onclick = function(){
    svg4.style.background = "orange";
    box4.style.background = " rgb(3, 3, 3)";
};

let svg5 = document.getElementById('svg5');
let box5 = document.getElementById('box5');

svg5.onclick = function(){
    svg5.style.background = "orange";
    box5.style.background = " rgb(3, 3, 3)";
};

let svg6 = document.getElementById('svg6');
let box6 = document.getElementById('box6');

svg6.onclick = function(){
    svg6.style.background = "orange";
    box6.style.background = " rgb(3, 3, 3)";
};

let svg7 = document.getElementById('svg7');
let box7 = document.getElementById('box7');

svg7.onclick = function(){
    svg7.style.background = "orange";
    box7.style.background = " rgb(3, 3, 3)";
};

let svg8 = document.getElementById('svg8');
let box8 = document.getElementById('box8');

svg8.onclick = function(){
    svg8.style.background = "orange";
    box8.style.background = " rgb(3, 3, 3)";
};

let svg9 = document.getElementById('svg9');
let box9 = document.getElementById('box9');

svg9.onclick = function(){
    svg9.style.background = "orange";
    box9.style.background = " rgb(3, 3, 3)";
};

let svg10 = document.getElementById('svg10');
let box10 = document.getElementById('box10');

svg10.onclick = function(){
    svg10.style.background = "orange";
    box10.style.background = " rgb(3, 3, 3)";
};

let svg11 = document.getElementById('svg11');
let box11 = document.getElementById('box11');

svg11.onclick = function(){
    svg11.style.background = "orange";
    box11.style.background = " rgb(3, 3, 3)";
};

let navS = document.getElementById('navS');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');

btn1.onclick = function(){
    window.scroll({
        top:240,
        behavior:"smooth",
    })
};

btn2.onclick = function(){
    window.scroll({
        top:1100,
        behavior:"smooth",
    })
};

btn3.onclick = function(){
    window.scroll({
        top:2400,
        behavior:"smooth",
    })
};

btn4.onclick = function(){
    window.scroll({
        top:2900,
        behavior:"smooth",
    })
};

btn5.onclick = function(){
    window.scroll({
        top:3560,
        behavior:"smooth",
    })
};

