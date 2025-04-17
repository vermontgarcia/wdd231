import Footer from '../components/Footer.mjs';
import { getLastUpdate, getYear } from './helpers/utils.mjs';
import { qs } from './helpers/utils.mjs';

const footerContainer = qs('footer');
const footer = new Footer({ container: footerContainer });
footer.init();

/**
 * Menu
 */
const handleMenu = () => {
  const menu = document.getElementById('menu');
  const icon = document.getElementById('menu-icon');
  if (menu.classList.contains('menu-open')) {
    menu.classList.remove('menu-open');
    icon.innerHTML = 'menu';
  } else {
    menu.classList.add('menu-open');
    icon.innerHTML = 'close';
  }
};
document.getElementById('menu-btn')?.addEventListener('click', handleMenu);

/**
 * Footer
 */
document.getElementById('current-year').innerHTML = getYear();
document.getElementById(
  'last-modified'
).innerHTML = `Last Modification: ${getLastUpdate()}`;
