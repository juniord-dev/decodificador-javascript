// TRANSFORMAR TEXTO INSERIDO EM MINÚSCULAS

var txtArea = document.querySelector('.text_encrypt');
txtArea.addEventListener('input', function (e) {
  this.value = this.value.replace(/[^a-zA-Z0-9 ]/g, '');
});

window.onload = function () {
  var elementos = document.getElementsByClassName('text_encrypt');
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].oninput = function () {
      this.value = this.value.toLowerCase();
    };
  }
};

const textArea = document.querySelector('.text_encrypt');
const msg = document.querySelector('.msg');

// CRIPTOGRAFAR

function btnCriptografar() {
  const textoExterno = textArea.value.trim();
  if (textoExterno !== '') {
    const textoEncriptado = criptografar(textoExterno);
    msg.value = textoEncriptado;

    // Oculta o background da textarea alvo ao inserir texto automaticamente
    document.querySelector('.msg').classList.add('hide-background');
    document
      .querySelectorAll('.textarea-container h2, .textarea-container p')
      .forEach(element => {
        element.classList.add('hide-text-dynamic');
      });
  } else {
    // Se a textarea externa estiver vazia, esvazia a textarea alvo
    msg.value = '';

    // Mostra o background da textarea alvo e os textos dinâmicos
    document.querySelector('.msg').classList.remove('hide-background');
    document
      .querySelectorAll('.textarea-container h2, .textarea-container p')
      .forEach(element => {
        element.classList.remove('hide-text-dynamic');
      });
  }
}

function criptografar(stringEncriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

// DESCRIPTOGRAFAR

function btnDescriptografar() {
  const textoExterno = textArea.value.trim();
  if (textoExterno !== '') {
    const textoDescriptografado = descriptografar(textoExterno);
    msg.value = textoDescriptografado;

    // Oculta o background da textarea alvo ao inserir texto automaticamente
    document.querySelector('.msg').classList.add('hide-background');
    document
      .querySelectorAll('.textarea-container h2, .textarea-container p')
      .forEach(element => {
        element.classList.add('hide-text-dynamic');
      });
  } else {
    // Se a textarea externa estiver vazia, esvazia a textarea alvo
    msg.value = '';

    // Mostra o background da textarea alvo e os textos dinâmicos
    document.querySelector('.msg').classList.remove('hide-background');
    document
      .querySelectorAll('.textarea-container h2, .textarea-container p')
      .forEach(element => {
        element.classList.remove('hide-text-dynamic');
      });
  }
}

function descriptografar(stringDescriptografada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptografada.includes(matrizCodigo[i][1])) {
      stringDescriptografada = stringDescriptografada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDescriptografada;
}

// COPIAR TEXTO

function copiarTexto() {
  const textoAlvo = msg.value.trim(); // Obtém o texto da textarea alvo e remove espaços em branco no início e no final

  // Verifica se o texto da textarea alvo não está vazio
  if (textoAlvo !== '') {
    // Se não estiver vazio, executa a lógica de cópia
    msg.select();
    document.execCommand('copy');
    exibirMensagem('Texto copiado com sucesso!');
    window.getSelection().removeAllRanges();
  } else {
    // Se estiver vazio, exibe a mensagem "Nada a copiar."
    exibirMensagem('Nada a copiar! Verifique o texto inserido.');
  }
}

// ANIMAÇÃO DOS BOTÕES

function btnAnimation(button) {
  document
    .querySelectorAll('.btn-encriptar, .btn-descriptografar')
    .forEach(function (btn) {
      btn.classList.remove('btn-animation');
    });
  button.classList.add('btn-animation');

  setTimeout(function () {
    button.classList.remove('btn-animation');
  }, 2000);
}

function exibirMensagem(mensagem) {
  const mensagemElement = document.querySelector('.mensagem');
  mensagemElement.innerText = mensagem;
  setTimeout(function () {
    mensagemElement.innerText = '';
    mensagemElement.classList.remove('copiado-animation');
    document.querySelector('.btn-copiar').classList.remove('btn-animation');
  }, 2000);
  mensagemElement.classList.add('copiado-animation');
  document.querySelector('.btn-copiar').classList.add('btn-animation');
}

// TEXTO DINAMICO

function adicionarTextosDinamicos() {
  const section = document.querySelector('.textarea-container');

  const h2 = document.createElement('h2');
  h2.textContent = 'Nenhuma mensagem encontrada.';

  const p = document.createElement('p');
  p.textContent =
    'Digite um texto que você deseja criptografar ou descriptografar';

  section.appendChild(h2);
  section.appendChild(p);

  // Mostra os elementos dinâmicos
  h2.classList.remove('hide-text-dynamic');
  p.classList.remove('hide-text-dynamic');
}

adicionarTextosDinamicos();

function verificarTexto() {
  const textarea = document.querySelector('.msg');
  const text = textarea.value.trim();

  if (text === '') {
    textarea.classList.remove('hide-background');
    document
      .querySelectorAll('.textarea-container h2, .textarea-container p')
      .forEach(element => {
        element.classList.remove('hide-text-dynamic');
      });
  }
}

document.querySelector('.msg').addEventListener('input', verificarTexto);
verificarTexto();

// DARK MODE

function toggleDarkMode() {
  const dark_mode_icon = document.getElementById('dark_mode_icon');
  const darkModeButton = document.getElementById('darkModeButton');

  // Adiciona ou remove a classe 'dark-mode' do elemento <body> para alternar entre os modos
  document.body.classList.toggle('dark-mode');

  // Verifica se o modo escuro está ativado
  const isDarkMode = document.body.classList.contains('dark-mode');

  // Altera o ícone e o título do botão com base no modo atual
  if (isDarkMode) {
    dark_mode_icon.classList.remove('fa-moon');
    dark_mode_icon.classList.add('fa-sun');
    darkModeButton.title = 'Light Mode';
  } else {
    dark_mode_icon.classList.remove('fa-sun');
    dark_mode_icon.classList.add('fa-moon');
    darkModeButton.title = 'Dark Mode';
  }
}
toggleDarkMode();
