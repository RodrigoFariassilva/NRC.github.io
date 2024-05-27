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
//Carrossel de Imagens//
