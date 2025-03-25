import ListComponent from './ListComponent.js';
import { businnessDirectoryTemplate } from './templates.js';
import { qs } from './utils.js';

// DOM Manipulation
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

//
const directoryList = new ListComponent(
  qs('#directory-container'),
  businnessDirectoryTemplate,
  './data/members.json'
);
directoryList.init();
