function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log(" elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    const eventName = evento.code;
    console.log(evento.code);

    if (eventName === "Space" || eventName === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
