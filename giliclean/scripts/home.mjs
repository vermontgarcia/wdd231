import Header from '../components/Header.mjs';
import { home } from './helpers/consts.mjs';
import { qs } from './helpers/utils.mjs';
import {
  services,
  reviews,
  inputStartAttributes,
  teamMembers,
} from './content.js';

const headerContainer = qs('header');
const header = new Header({ wayfinding: home, container: headerContainer });
header.init();

// DOM Selectors Home Page
const servicesSection = document.querySelector('#services .container');

if (servicesSection) {
  const cardsContainer = document.createElement('div');
  cardsContainer.setAttribute('class', 'cards-container');
  services.slice(0, 3).forEach(({ name, description }) => {
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
  servicesSection.append(cardsContainer);
}

// DOM Selectors Home Page
const reviewsSection = document.querySelector('#reviews .container');

if (reviewsSection) {
  const cardsContainer = document.createElement('div');
  cardsContainer.setAttribute('class', 'cards-container');
  reviews
    .slice(0, 4)
    .forEach(({ user, imgUrl, date, stars, review }, uIndex) => {
      // Create Review Cards and add them to the DOM
      const cardDiv = document.createElement('div');
      cardDiv.setAttribute('class', 'card');

      const headerDiv = document.createElement('div');
      headerDiv.setAttribute('class', 'card-header');
      const avatarImg = document.createElement('img');
      avatarImg.setAttribute('src', imgUrl);
      avatarImg.setAttribute('alt', `${user} - avatar image`);
      avatarImg.setAttribute('width', 64);
      avatarImg.setAttribute('height', 64);

      const userDataDiv = document.createElement('div');
      const nameDiv = document.createElement('div');
      nameDiv.innerHTML = user;
      const dateDiv = document.createElement('div');
      // TODO: Calculate time ago
      dateDiv.innerHTML = date;

      userDataDiv.append(nameDiv, dateDiv);

      headerDiv.append(avatarImg, userDataDiv);

      const starsDiv = document.createElement('div');
      starsDiv.setAttribute('class', 'stars');

      const reviewP = document.createElement('p');
      reviewP.innerHTML = review;

      cardDiv.append(headerDiv, starsDiv, reviewP);

      inputStartAttributes.forEach(({ type, id, name, value }, index) => {
        const starInput = document.createElement('input');
        starInput.setAttribute('disabled', 'disabled');
        starInput.setAttribute('type', type);
        starInput.setAttribute('id', `${uIndex}-${id}`);
        starInput.setAttribute('name', `${uIndex}-${name}`);
        starInput.setAttribute('value', value);
        const starLabel = document.createElement('label');
        starLabel.setAttribute('for', `${uIndex}-${id}`);

        if (index === stars - 1) {
          starInput.setAttribute('checked', 'checked');
        }
        starsDiv.prepend(starLabel);
        starsDiv.prepend(starInput);
      });

      cardsContainer.appendChild(cardDiv);
    });
  reviewsSection.append(cardsContainer);
}

// DOM Selectors Home Page
const joinOurTeamSection = document.querySelector('#join-our-team .container');

if (joinOurTeamSection) {
  const cardsContainer = document.createElement('div');
  cardsContainer.setAttribute('class', 'cards-container');
  teamMembers.slice(0, 3).forEach(({ imgUrl, name, captions, more }) => {
    // Create teamMembers Cards and add them to the DOM
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card-flat');
    const teamMemberPicture = document.createElement('img');
    const captionsDiv = document.createElement('div');
    const captionsP = document.createElement('span');
    const moreP = document.createElement('span');

    teamMemberPicture.setAttribute('src', imgUrl);
    teamMemberPicture.setAttribute('alt', `${name} picture`);
    captionsP.innerHTML = `<strong class="member-name">${name}</strong> - <span class="member-captions">${captions}</span>: `;
    moreP.innerHTML = more;

    captionsDiv.append(captionsP, moreP);

    cardDiv.append(teamMemberPicture, captionsDiv);

    cardsContainer.appendChild(cardDiv);
  });
  joinOurTeamSection.appendChild(cardsContainer);
}
