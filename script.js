var werken;
var buitenwerking;
var stoplicht1 = document.getElementById("stoplicht1");
var stoplicht2 = document.getElementById("stoplicht2");
var stoplicht3 = document.getElementById("stoplicht3");
var stoplicht4 = document.getElementById("stoplicht4");
var rijden;
// auto's
var auto1 = document.getElementById('auto1');
var auto2 = document.getElementById('auto2');
var auto3 = document.getElementById('auto3');
var auto4 = document.getElementById('auto4');
// auto 1
auto1.style.position = 'absolute';
auto1.style.left = '775px';
auto1.style.top = '550px';
// auto 2
auto2.style.position = 'absolute';
auto2.style.right = '770px';
auto2.style.bottom = '400px';
var y_auto1 = auto1.style.top;
var y_auto2 = auto2.style.bottom;
// auto3
auto3.style.position = 'absolute';
auto3.style.right = '900px';
auto3.style.top = '390px';
// auto 4
auto4.style.position = 'absolute';
auto4.style.left = '900px';
auto4.style.top = '310px';
// stoplicht check
var slir_bb = true; // stopLicht Is Rood van Boven naar Beneden
var snelheidauto1 = 1;
var snelheidauto2 = 1;
var snelheidauto3 = 1;
var snelheidauto4 = 1;
function starten() {
    auto1.style.top = parseInt(auto1.style.top) - snelheidauto1 + 'px';
    auto2.style.bottom = parseInt(auto2.style.bottom) - snelheidauto2 + 'px';
    auto3.style.right = parseInt(auto3.style.right) - snelheidauto3 + 'px';
    auto4.style.left = parseInt(auto4.style.left) - snelheidauto4 + 'px';
    rijden = setTimeout(starten, 10);
    auto1.style.top = parseInt(auto1.style.top) - snelheidauto1 + 'px';
    auto2.style.bottom = parseInt(auto2.style.bottom) - snelheidauto2 + 'px';
    auto3.style.right = parseInt(auto3.style.right) - snelheidauto3 + 'px';
    auto4.style.left = parseInt(auto4.style.left) - snelheidauto4 + 'px';
/*    stoppenAuto2();
    stoppenAuto3();*/
}
// stoplicht 1
setInterval(function(){
    if  (stoplicht1.src.match("images/stoplicht_rood.png") && (auto1.style.bottom) < 380){
        slir_bb = true;
        snelheidauto1 = 0;}
    if (stoplicht1.src.match("images/stoplicht_oranje.png")){
        snelheidauto1 = 0.5;}
    if (stoplicht1.src.match("images/stoplicht_groen.png")){
        snelheidauto1 = 1;
    }
}, 1000);
// stoplicht 2
setInterval(function(){
    if  (stoplicht2.src.match("images/stoplicht_rood.png") && (auto2.style.top) < 380){
        slir_bb = true;
        snelheidauto2 = 0;}
    if (stoplicht2.src.match("images/stoplicht_oranje.png")){
        snelheidauto2 = 0.5;}
    if (stoplicht2.src.match("images/stoplicht_groen.png")){
        snelheidauto2 = 1;
    }
}, 1000);
// stoplicht 3
setInterval(function(){
    if  (stoplicht3.src.match("images/stoplicht_rood.png") && (auto3.style.left) < 860){
        slir_bb = true;
        snelheidauto3 = 0;}
    if (stoplicht3.src.match("images/stoplicht_oranje.png")){
        snelheidauto3 = 0.5;}
    if (stoplicht3.src.match("images/stoplicht_groen.png")){
        snelheidauto3 = 1;
    }
}, 1000);
// stoplicht 4
setInterval(function(){
    if  (stoplicht4.src.match("images/stoplicht_rood.png") && (auto4.style.right) < 860){
        slir_bb = true;
        snelheidauto4 = 0;}
    if (stoplicht4.src.match("images/stoplicht_oranje.png")){
        snelheidauto4 = 0.5;}
    if (stoplicht4.src.match("images/stoplicht_groen.png")){
        snelheidauto4 = 1;
    }
}, 1000);



/*function stoppenAuto2(){
    if  (stoplicht2.src = "images/stoplicht_rood.png"){
        snelheidauto2 = 0}
    else if (stoplicht2.src = "images/stoplicht_oranje.png"){
        snelheidauto2 = 0}
    else{
        snelheidauto2 = 5
    }
}
function stoppenAuto3(){
    if  (stoplicht3.src = "images/stoplicht_rood.png"){
        snelheidauto3 = 0}
    if (stoplicht3.src = "images/stoplicht_oranje.png"){
        snelheidauto3 = 0}
    if(stoplicht3.src = "images/stoplicht_groen.png"){
        snelheidauto3 = 5
    }
}*/
// respawn auto;'s
setInterval(function(){
    if (parseInt(auto1.style.top) < -10){
        auto1.style.top = '550px';
    }
    if (parseInt(auto2.style.bottom) < -20){
        auto2.style.bottom = '550px';
    }
    if (parseInt(auto3.style.right) < 105){
        auto3.style.right = '1200px';
    }
    if (parseInt(auto4.style.left) < 6){
        auto4.style.left = '1200px';
    }
}, 300);

function stop() {
    clearTimeout(rijden)
}
function opnieuw() {
    clearTimeout(rijden);
    auto1.style.top = '550px';
    auto2.style.bottom = '550px';
    auto3.style.left = '400px';
    auto4.style.left = '1200px'
}

function aanzetten() {
    clearTimeout(buitenwerking);
    maakRoodGroen();
    werken = setTimeout(maakOranjeRood, 10000);
    werken = setTimeout(maakRoodGroen, 30000);
    werken = setTimeout(maakGroenOranje, 12000);
    werken = setTimeout(aanzetten, 17000);
/*
    werken = setTimeout(maakGroenOranje, 12000);
    werken = setTimeout(maakOranjeRood, 4000);
    werken = setTimeout(maakRoodGroen, 10000);
    werken = setTimeout(aanzetten, 10000);
*/

}

function knipperen() {
    clearTimeout(werken);
    wordtOranje();
    buitenwerking = setTimeout(zetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);

}
function uitzetten() {
    zetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}

function maakRoodGroen() {
    stoplicht1.src = "images/stoplicht_rood.png";
    stoplicht2.src = "images/stoplicht_rood.png";
    stoplicht3.src = "images/stoplicht_groen.png";
    stoplicht4.src = "images/stoplicht_groen.png";
    slir_bb = true;
}
function maakGroenOranje() {
    stoplicht1.src = "images/stoplicht_groen.png";
    stoplicht2.src = "images/stoplicht_groen.png";
    stoplicht3.src = "images/stoplicht_oranje.png";
    stoplicht4.src = "images/stoplicht_oranje.png";
    slir_bb = false;
}
function maakOranjeRood() {
    stoplicht1.src = "images/stoplicht_oranje.png";
    stoplicht2.src = "images/stoplicht_oranje.png";
    stoplicht3.src = "images/stoplicht_rood.png";
    stoplicht4.src = "images/stoplicht_rood.png";
    slir_bb = true;
}
function wordtOranje() {
    stoplicht1.src = "images/stoplicht_oranje.png";
    stoplicht2.src = "images/stoplicht_oranje.png";
    stoplicht3.src = "images/stoplicht_oranje.png";
    stoplicht4.src = "images/stoplicht_oranje.png";
    slir_bb = true;
}
function zetUit() {
    stoplicht1.src = "images/stoplicht_uit.png";
    stoplicht2.src = "images/stoplicht_uit.png";
    stoplicht3.src = "images/stoplicht_uit.png";
    stoplicht4.src = "images/stoplicht_uit.png";
    slir_bb = true;
}


/*
function veranderStoplicht() {

    if (stoplicht.src.match("stoplicht_rood")){
        stoplicht.src = "images/stoplicht_groen.png";
    } else {
        stoplicht.src = "images/stoplicht_rood.png"
    }
}*/
