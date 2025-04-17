import Header from '../components/Header.mjs';
import { qs } from './helpers/utils.mjs';
import { services } from './content.js';

const container = qs('header');
const header = new Header({ wayfinding: services, container });

header.init();

const servicesAllPageSection = document.querySelector(
  '#services-all .container'
);

if (servicesAllPageSection) {
  const cardsContainer = document.createElement('div');
  cardsContainer.setAttribute('class', 'cards-container');
  services.forEach(({ name, description }) => {
    // Create Services Cards and add them to the DOM
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card');
    const cardH3 = document.createElement('h3');
    const cardP = document.createElement('p');

    cardH3.innerHTML = name;
    cardP.innerHTML = description;

    cardDiv.append(cardH3, cardP);

    cardsContainer.appendChild(cardDiv);
  });
  servicesAllPageSection.append(cardsContainer);
}
