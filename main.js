function tocaSomLobo(){
    document.querySelector("#som_tecla_lobo").play();
}
const listadeTeclas = document.querySelectorAll(".tecla");

listadeTeclas[2].onclick = tocaSomLobo;