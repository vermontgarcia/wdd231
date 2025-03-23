import { parseJson } from './utils.js';

const businnessCardTemplate = (business) => {
  const {
    name,
    address,
    phoneNumber,
    websiteUrl,
    imageUrl,
    membershipLevel,
    description,
  } = business;
  return `<div class="business-card">
    <div class="logo-container">
      <img src="${imageUrl}" alt="${name}" width="100" height="50" loading="lazy" />
    </div>
    <p>${name}</p>
    <p>${address}</p>
    <p>${phoneNumber}</p>
    <a href="${websiteUrl}" target="_blank">${websiteUrl}</a>
  </div>`;
};

export default class Directory {
  constructor(parentElement) {
    this.data = [];
    this.parentElement = parentElement;
  }

  async getData() {
    const data = await fetch('./data/members.json');
    this.data = await parseJson(data);
  }

  renderList(list) {
    const htmlStrins = list.map(businnessCardTemplate);
    this.parentElement.insertAdjacentHTML('afterBegin', htmlStrins.join(''));
  }

  async init() {
    await this.getData();
    this.renderList(this.data);
  }
}

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
const directory = new Directory(document.getElementById('directory-container'));
directory.init();
