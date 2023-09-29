const emailLogin = document.getElementById('emailLogin');
const senhaLogin = document.getElementById('senhaLogin');
const btnLogin = document.getElementById('formButtonLogin');
const buttonChangeThemeLg = document.getElementsByClassName('ctLg');
const montain = document.getElementsByClassName('login');

if (localStorage.getItem('usuariosNum') == null) {
  localStorage.setItem('usuariosNum', 0);
}

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

function login(e) {
  e.preventDefault();

  let indexV = 0;
  let igualEmail = false;
  let igualAmbos = false;
  let emailUser = emailLogin.value;
  let senhaUser = senhaLogin.value;
  let numUsers = localStorage.getItem('usuariosNum');
  let numUsersNumber = Number(numUsers);

  for (indexV = 1; indexV <= numUsersNumber; indexV++) {
    let userLocal = JSON.parse(localStorage.getItem(`usuario${indexV}`));
    let emailLocal = userLocal.email;
    let senhaLocal = userLocal.senha;
    let nameLocal = userLocal.nome;

    if (emailLocal == emailUser && senhaLocal == senhaUser) {
      igualAmbos = true;
      console.log('Email e senha já cadastrados!');
    }
    if (!igualAmbos && emailLocal == emailUser) {
      igualEmail = true;
      console.log('Email já cadastrado!');
    }

    if (igualAmbos) {
      localStorage.setItem('userLogado', true);
      localStorage.setItem(
        'usuarioLogado',
        JSON.stringify({ email: emailUser, senha: senhaUser, nome: nameLocal }),
      );
      console.log('Logado Com Sucesso');
      window.location.href = '/';
      break;
    } else if (indexV == numUsersNumber && igualEmail) {
      alert('Senha incorreta!');
      break;
    } else if (indexV == numUsersNumber) {
      alert('Nenhum usuário cadastrado com esse email!');
      break;
    }
  }
}

btnLogin.addEventListener('click', login);
