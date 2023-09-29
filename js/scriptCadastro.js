const nomeCadastro = document.getElementById('nomeCadastrese');
const emailCadastro = document.getElementById('emailCadastrese');
const senhaCadastro = document.getElementById('senhaCadastrese');
const btnCadastro = document.getElementById('formButtonCadastrese');
const montain = document.getElementsByClassName('cadastrese');
const buttonChangeThemeLg = document.getElementsByClassName('ctCd');

if (localStorage.getItem('usuariosNum') == null) {
  localStorage.setItem('usuariosNum', 0);
}

function condicaoFCd() {
  if (rootElement.style.cssText == stringLight) {
    montain[0].classList.remove('svgDark');
  } else if (rootElement.style.cssText == stringDark) {
    montain[0].classList.add('svgDark');
  }
}

buttonChangeThemeLg[0].addEventListener('click', condicaoFCd);

if (localStorage.getItem('usuariosNum') == null) {
  localStorage.setItem('usuariosNum', 0);
}

function cadastrarUsuario(e) {
  e.preventDefault();

  let igualEmail = false;
  let NomeUser = nomeCadastro.value;
  let emailUser = emailCadastro.value;
  let senhaUser = senhaCadastro.value;
  let numUsers = localStorage.getItem('usuariosNum');

  for (let index = 1; index <= +numUsers; index++) {
    let userLocal = JSON.parse(localStorage.getItem(`usuario${index}`));
    let emailLocal = userLocal.email;

    if (emailLocal == emailUser) {
      igualEmail = true;
      console.log('Email já cadastrado!');
      break;
    }
  }
  if (
    igualEmail == false &&
    NomeUser != '' &&
    emailUser != '' &&
    senhaUser != ''
  ) {
    addUmNumberUsers = +numUsers + 1;
    localStorage.setItem('usuariosNum', addUmNumberUsers);
    localStorage.setItem(
      `usuario${addUmNumberUsers}`,
      JSON.stringify({ email: emailUser, senha: senhaUser, nome: NomeUser }),
    );
    alert('Usuario cadastrado com sucesso');
  } else {
    alert('Por Favor, digite todas as informações necessárias!');
  }
}

btnCadastro.addEventListener('click', cadastrarUsuario);
