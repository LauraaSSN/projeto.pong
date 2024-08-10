
let campoIdade;
let campoFantasia;
let campoFiccao;

function setup() {
  createCanvas(550, 400);
  createElement("h2", "recomendando filmes");
  createSpan("Minha Idade");
  campoIdade = createInput();
  campoFantasia = createCheckbox("gosto de fantasia");
  campoFiccao = createCheckbox("gosto de ficção científica");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeFiccao = campoFiccao.checked();
  
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeFiccao);
  
  fill(color(76, 0, 15));
  textAlign(CENTER, CENTER);
  textSize(32);
  text(recomendacao, width / 2 , height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeFiccao) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "Jogos Vorazes";
    } else {
      if(idade >= 12) {
        if(gostaDeFantasia || gostaDeFiccao) {
         return "Rogue One: Uma História Star Wars";
        } else {
         return "Gente Grande"; 
        }
      } else {
      if(gostaDeFantasia) {
         return "Malévola";
      } else {
        return "Alladin";
      }
      }
    }
  } else {
    if(gostaDeFantasia) {
      return "Descendentes";
    } else {
      return "Malévola";
    }
  } 
 } 