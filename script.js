
document.getElementById('criarConta').addEventListener('click', function() {
    document.getElementById('modalCriarConta').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modalCriarConta').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modalCriarConta')) {
      document.getElementById('modalCriarConta').style.display = 'none';
    }
  });
  