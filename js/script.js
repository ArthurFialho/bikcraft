//Ativar Links de Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Ativar Itens do Orçamento

const parametros = new URLSearchParams(location.search);

function AtivarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(AtivarProduto);

//Perguntas Frequentes

const perguntas = querySelectorAll("perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAtributte("aria-controls");
  const resposta = document.getElementById(controls);

  const ativa = resposta.classList.toggle("ativa");
  resposta.classList.contains("ativa");
  pergunta.setAtributte("aria-expanded", "true");
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListner("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(minwidth:1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
  galeriaContainer.prepend(img);
}

function eventosGaleria(img) {
  img.addEventListner("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
