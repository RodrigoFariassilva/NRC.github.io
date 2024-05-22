document.addEventListener("DOMContentLoaded", function() {
    var textoElement = document.getElementById("texto-centralizado");
    var textos = ["Melhor Loja SportWear do Brasil", "Entregamos Para Todo Brasil", "Venha ser Feliz!!!"]; 
    // Adicione os textos que deseja exibir
    var cores = ["white", "white", "white"]; 
    // Cores para os textos
    var tamanhos = ["15px", "15px", "15px"]; 
    // Tamanhos para os textos
  
    var index = 0;
    setInterval(function() {
      textoElement.textContent = textos[index];
      textoElement.style.color = cores[index];
      textoElement.style.fontSize = tamanhos[index];
      index = (index + 1) % textos.length;
    }, 5000); 
    // Altera a cada 5 segundos (5.000 milissegundos)
  });
  //Botão de cadastro ou criar conta de usuario//
  document.addEventListener('DOMContentLoaded', (event) => {
    const botao = document.getElementById('botaouser');

    botao.addEventListener('click', () => {
        window.location.href = 'outra_pagina.html'; // substitua com o caminho da sua página de destino
    });
});
//Carrossel de Imagens//
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}