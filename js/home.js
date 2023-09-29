const montain = document.getElementsByClassName('login');
const BannerTop = document.getElementsByClassName('cont');
const buttonChangeThemeHm = document.getElementsByClassName('ctIndx');

function condicaoFLG() {
  if (rootElement.style.cssText == stringLight) {
    BannerTop[0].classList.remove('svgDark');
  } else if (rootElement.style.cssText == stringDark) {
    BannerTop[0].classList.add('svgDark');
  }
}

if (localStorage.getItem('tema') == 'dark') {
  changeTheme(darkTheme);
  BannerTop[0].classList.add('svgDark');
} else if (localStorage.getItem('tema') == 'light') {
  changeTheme(lightTheme);
  BannerTop[0].classList.remove('svgDark');
}

buttonChangeThemeHm[0].addEventListener('click', condicaoFLG);
