// Helper Funtions

import Directory from './Directory.js';

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const getLastUpdate = () => {
  const date = document.lastModified;
  return date.toLocaleString();
};

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

document.getElementById('menu-btn').addEventListener('click', handleMenu);

document.getElementById('icon-btn-grid').addEventListener('click', () => {
  document.querySelector('#icon-btn-grid i').classList.add('selected');
  document.querySelector('#icon-btn-list i').classList.remove('selected');

  const directoryContainer = document.getElementById('directory-container');
  directoryContainer.classList.remove('list');
  directoryContainer.classList.add('grid');
});

document.getElementById('icon-btn-list').addEventListener('click', () => {
  document.querySelector('#icon-btn-list i').classList.add('selected');
  document.querySelector('#icon-btn-grid i').classList.remove('selected');
  const directoryContainer = document.getElementById('directory-container');
  directoryContainer.classList.remove('grid');
  directoryContainer.classList.add('list');
});

/** DOM Manipulation */

// Footer
document.getElementById('current-year').innerHTML = getYear();
document.getElementById(
  'last-modified'
).innerHTML = `Last Modification: ${getLastUpdate()}`;

//
const directory = new Directory(document.getElementById('directory-container'));
directory.init();
