const buttonChangeThemeQs = document.getElementsByClassName('ctqs');
const svgLinkedinD = document.getElementsByClassName('linkVectorLinkedin');
const svgGitHubD = document.getElementsByClassName('linkVectorGithub');
const montain = document.getElementsByClassName('login');
const BannerTopC = document.getElementsByClassName('cont');

function condicaoFQS() {
  if (rootElement.style.cssText == stringLight) {
    BannerTopC[0].classList.remove('svgDark');
    fundoQuemSomos[0].classList.remove('fundoDark');
    svgGitHubD[0].src = './src/img/vectorGitHub.svg';
    svgGitHubD[1].src = './src/img/vectorGitHub.svg';
    svgGitHubD[2].src = './src/img/vectorGitHub.svg';
    svgGitHubD[3].src = './src/img/vectorGitHub.svg';
    svgGitHubD[4].src = './src/img/vectorGitHub.svg';
    svgLinkedinD[0].src = './src/img/vectorLinkedin.svg';
    svgLinkedinD[1].src = './src/img/vectorLinkedin.svg';
    svgLinkedinD[2].src = './src/img/vectorLinkedin.svg';
    svgLinkedinD[3].src = './src/img/vectorLinkedin.svg';
    svgLinkedinD[4].src = './src/img/vectorLinkedin.svg';
  } else if (rootElement.style.cssText == stringDark) {
    BannerTopC[0].classList.add('svgDark');
    fundoQuemSomos[0].classList.add('fundoDark');
    svgGitHubD[0].src = './src/img/vectorGitHubDark.svg';
    svgGitHubD[1].src = './src/img/vectorGitHubDark.svg';
    svgGitHubD[2].src = './src/img/vectorGitHubDark.svg';
    svgGitHubD[3].src = './src/img/vectorGitHubDark.svg';
    svgGitHubD[4].src = './src/img/vectorGitHubDark.svg';
    svgLinkedinD[0].src = './src/img/vectorLinkedinDark.svg';
    svgLinkedinD[1].src = './src/img/vectorLinkedinDark.svg';
    svgLinkedinD[2].src = './src/img/vectorLinkedinDark.svg';
    svgLinkedinD[3].src = './src/img/vectorLinkedinDark.svg';
    svgLinkedinD[4].src = './src/img/vectorLinkedinDark.svg';
  }
}

if (localStorage.getItem('tema') == 'dark') {
  changeTheme(darkTheme);
  fundoQuemSomos[0].classList.add('fundoDark');
  svgGitHubD[0].src = './src/img/vectorGitHubDark.svg';
  svgGitHubD[1].src = './src/img/vectorGitHubDark.svg';
  svgGitHubD[2].src = './src/img/vectorGitHubDark.svg';
  svgGitHubD[3].src = './src/img/vectorGitHubDark.svg';
  svgGitHubD[4].src = './src/img/vectorGitHubDark.svg';
  svgLinkedinD[0].src = './src/img/vectorLinkedinDark.svg';
  svgLinkedinD[1].src = './src/img/vectorLinkedinDark.svg';
  svgLinkedinD[2].src = './src/img/vectorLinkedinDark.svg';
  svgLinkedinD[3].src = './src/img/vectorLinkedinDark.svg';
  svgLinkedinD[4].src = './src/img/vectorLinkedinDark.svg';
  BannerTopC[0].classList.add('svgDark');
} else if (localStorage.getItem('tema') == 'light') {
  changeTheme(lightTheme);
  fundoQuemSomos[0].classList.remove('fundoDark');
  svgGitHubD[0].src = './src/img/vectorGitHub.svg';
  svgGitHubD[1].src = './src/img/vectorGitHub.svg';
  svgGitHubD[2].src = './src/img/vectorGitHub.svg';
  svgGitHubD[3].src = './src/img/vectorGitHub.svg';
  svgGitHubD[4].src = './src/img/vectorGitHub.svg';
  svgLinkedinD[0].src = './src/img/vectorLinkedin.svg';
  svgLinkedinD[1].src = './src/img/vectorLinkedin.svg';
  svgLinkedinD[2].src = './src/img/vectorLinkedin.svg';
  svgLinkedinD[3].src = './src/img/vectorLinkedin.svg';
  svgLinkedinD[4].src = './src/img/vectorLinkedin.svg';
  BannerTopC[0].classList.remove('svgDark');
}

buttonChangeThemeQs[0].addEventListener('click', condicaoFQS);
