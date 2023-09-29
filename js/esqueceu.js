const buttonEsqueceu = document.getElementById('formButtonEsqueceu');
const emailEsqueceu = document.getElementById('emailEsqueceu');
const buttonChangeThemeLg = document.getElementsByClassName('ctLg');
const montain = document.getElementsByClassName('login');

function condicaoFLG() {
  if (rootElement.style.cssText == stringLight) {
    montain[0].classList.remove('svgDark');
  } else if (rootElement.style.cssText == stringDark) {
    montain[0].classList.add('svgDark');
  }
}

if (localStorage.getItem('tema') == 'dark') {
  changeTheme(darkTheme);
  montain[0].classList.add('svgDark');
} else if (localStorage.getItem('tema') == 'light') {
  changeTheme(lightTheme);
  montain[0].classList.remove('svgDark');
}

buttonChangeThemeLg[0].addEventListener('click', condicaoFLG);

function EsqueceuSenha(e) {
  e.preventDefault();

  let indexV = 0;
  let emailUser = emailEsqueceu.value;
  let numUsers = localStorage.getItem('usuariosNum');
  let numUsersNumber = Number(numUsers);

  for (indexV = 1; indexV <= numUsersNumber; indexV++) {
    let userLocal = JSON.parse(localStorage.getItem(`usuario${indexV}`));
    let emailLocal = userLocal.email;

    if (emailUser == emailLocal) {
      let senhaLembrar = userLocal.senha;
      alert('A sua senha é: ' + senhaLembrar);
      break;
    } else if (indexV == numUsersNumber) {
      alert('Não há nenhum usuário cadastrado com esse email!');
      break;
    }
  }
}

buttonEsqueceu.addEventListener('click', EsqueceuSenha);
