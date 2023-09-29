const btnTop = document.getElementsByClassName('button-scroll-up');
const iconUserHeader = document.querySelector('li.loginMenu');
const iconUserHeaderLink = document.querySelector('.linkDeslogarLogar');
const buttonChangeTheme = document.getElementById('change-theme');
const fundoQuemSomos = document.getElementsByClassName('cinzaContainer');
const casinhaHeader = document.getElementsByClassName('homeMenu');
const infoHeader = document.getElementsByClassName('quemSomosMenu');
const personHeader = document.getElementsByClassName('loginMenu');
const menuContainerMontain = document.getElementsByClassName('menu-container');
const menuLogoutPorta = document.getElementsByClassName('liLogout');
const menuLogoutPortaFill = document.getElementsByClassName('fillChange');
const rootElement = document.documentElement;

if (localStorage.getItem('tema') == null) {
  localStorage.setItem('tema', 'light');
}

const lightTheme = {
  '--principal': '#252323',
  '--secundaria': '#ECA00D',
  '--terciaria': '#9AB09F',
  '--quaternaria': '#fff',
  '--fundo': '#fff',
};
const darkTheme = {
  '--principal': '#FFFFFF',
  '--secundaria': '#ECA00D',
  '--terciaria': '#354739',
  '--quaternaria': '#28282D',
  '--fundo': '#18181D',
};
let stringDark =
  '--principal: #FFFFFF; --secundaria: #ECA00D; --terciaria: #354739; --quaternaria: #28282D; --fundo: #18181D;';
let stringLight =
  '--principal: #252323; --secundaria: #ECA00D; --terciaria: #9AB09F; --quaternaria: #fff; --fundo: #fff;';

function changeTheme(theme) {
  for (let prop in theme) {
    changeProperty(prop, theme[prop]);
  }
}
function changeProperty(property, value) {
  rootElement.style.setProperty(property, value);
}
function condicaoF() {
  if (rootElement.style.cssText == stringLight) {
    changeTheme(darkTheme);
    localStorage.setItem('tema', 'dark');
    casinhaHeader[0].classList.add('svgDark');
    infoHeader[0].classList.add('svgDark');
    personHeader[0].classList.add('svgDark');
    menuContainerMontain[0].classList.add('svgDark');
    menuLogoutPortaFill[0].classList.add('fillDark');
    menuLogoutPortaFill[1].classList.add('fillDark');
    menuLogoutPortaFill[2].classList.add('fillDark');
  } else if (rootElement.style.cssText == stringDark) {
    changeTheme(lightTheme);
    localStorage.setItem('tema', 'light');
    casinhaHeader[0].classList.remove('svgDark');
    infoHeader[0].classList.remove('svgDark');
    personHeader[0].classList.remove('svgDark');
    menuContainerMontain[0].classList.remove('svgDark');
    menuLogoutPortaFill[0].classList.remove('fillDark');
    menuLogoutPortaFill[1].classList.remove('fillDark');
    menuLogoutPortaFill[2].classList.remove('fillDark');
  }
}
if (rootElement.style.cssText == '') {
  changeTheme(lightTheme);
}

if (localStorage.getItem('tema') == 'dark') {
  changeTheme(darkTheme);
  casinhaHeader[0].classList.add('svgDark');
  infoHeader[0].classList.add('svgDark');
  personHeader[0].classList.add('svgDark');
  menuContainerMontain[0].classList.add('svgDark');
  menuLogoutPortaFill[0].classList.add('fillDark');
  menuLogoutPortaFill[1].classList.add('fillDark');
  menuLogoutPortaFill[2].classList.add('fillDark');
} else if (localStorage.getItem('tema') == 'light') {
  changeTheme(lightTheme);
  casinhaHeader[0].classList.remove('svgDark');
  infoHeader[0].classList.remove('svgDark');
  personHeader[0].classList.remove('svgDark');
  menuContainerMontain[0].classList.remove('svgDark');
  menuLogoutPortaFill[0].classList.remove('fillDark');
  menuLogoutPortaFill[1].classList.remove('fillDark');
  menuLogoutPortaFill[2].classList.remove('fillDark');
}

buttonChangeTheme.addEventListener('click', condicaoF);

function ocultar() {
  if (window.scrollY > 200) {
    btnTop[0].style.display = 'flex';
  } else {
    btnTop[0].style.display = 'none';
  }
}

document.addEventListener('scroll', ocultar);

function verificaUserLogado() {
  let logado = localStorage.getItem('userLogado');
  let userLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (logado && userLogado != null) {
    iconUserHeader.innerText = userLogado.nome;
    menuLogoutPorta[0].classList.add('aparece');
  }
  if (iconUserHeader.innerText != 'Faça o Login!') {
    iconUserHeaderLink.href = '/';
  }
}
function DeslogarUser() {
  let logado = localStorage.getItem('userLogado');
  let userLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  localStorage.setItem('userLogado', false);
  localStorage.setItem('usuarioLogado', null);
  menuLogoutPorta[0].classList.remove('aparece');
  window.location.href = '/';
}

menuLogoutPorta[0].addEventListener('click', DeslogarUser);

ocultar();
verificaUserLogado();
