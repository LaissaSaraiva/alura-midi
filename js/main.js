function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
console.log(listaDeTeclas)

let i = 0;
while (i < listaDeTeclas.length) {
  listaDeTeclas[i].onclick = tocaSom;
  i++;
  console.log(i);
}