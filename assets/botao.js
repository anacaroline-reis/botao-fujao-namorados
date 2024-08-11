function fuja(){
    let botaoNao = document.getElementById("nao");
    let larguraJanela = window.innerWidth;
    let alturaJanela = window.innerHeight;
    let maxdeX = larguraJanela - botaoNao.offsetWidth;
    let maxdeY = alturaJanela - botaoNao.offsetHeight;

    let aleatoriaLargura = Math.floor(Math.random() * maxdeX);
    let aleatoriaAltura = Math.floor(Math.random() * maxdeY);


    botaoNao.style.lef = aleatoriaLargura + "px";
    botaoNao.style.top = aleatoriaAltura + "px";



}