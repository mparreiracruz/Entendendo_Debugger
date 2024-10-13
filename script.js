function exibirNome() {
    const nome = document.getElementById('nomeInput').value;
    const resultado = document.getElementById('resultado');
    if (nome) {
      resultado.textContent = `Você digitou: ${nome}`;
    } else {
      resultado.textContent = 'Por favor, insira um nome.';
    }
  }
   