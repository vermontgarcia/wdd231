export const reviewCardTemplate = ({ imgUrl, user, date, stars, review }) => `
  <div class="card">
    <div class="card-header">
      <img
        src="${imgUrl}"
        alt="${user} - avatar image"
        width="64"
        height="64"
      />
      <div>
        <div>${user}</div>
        <div>${date}</div>
      </div>
    </div>
    <div class="stars">
      <input
        disabled="disabled"
        type="radio"
        id="0-onestar"
        name="0-stars"
        value="1"
        checked=checked
      /><label for="0-onestar"></label
      ><input
        disabled="disabled"
        type="radio"
        id="0-twostar"
        name="0-stars"
        value="2"
      /><label for="0-twostar"></label
      ><input
        disabled="disabled"
        type="radio"
        id="0-threestar"
        name="0-stars"
        value="3"
      /><label for="0-threestar"></label
      ><input
        disabled="disabled"
        type="radio"
        id="0-fourstar"
        name="0-stars"
        value="4"
      /><label for="0-fourstar"></label
      ><input
        disabled="disabled"
        type="radio"
        id="0-fivestar"
        name="0-stars"
        value="5"
      /><label for="0-fivestar"></label>
    </div>
    <p>
      ${review}
    </p>
  </div>
`;

export const addReviews = ({ reviews, inputStartAttributes }) => {
  const reviewsSection = document.querySelector('#reviews .container');
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
      avatarImg.setAttribute('loading', 'lazy');

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
};

export const addServices = (ourServices) => {
  const servicesSection = document.querySelector('#services .container');
  const cardsContainer = document.createElement('div');
  cardsContainer.setAttribute('class', 'cards-container');
  ourServices.slice(0, 3).forEach(({ name, description }) => {
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
};

export const addTeam = (teamMembers) => {
  const joinOurTeamSection = document.querySelector(
    '#join-our-team .container'
  );
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
    teamMemberPicture.setAttribute('loading', 'lazy');

    captionsP.innerHTML = `<strong class="member-name">${name}</strong> - <span class="member-captions">${captions}</span>: `;
    moreP.innerHTML = more;

    captionsDiv.append(captionsP, moreP);

    cardDiv.append(teamMemberPicture, captionsDiv);

    cardsContainer.appendChild(cardDiv);
  });
  joinOurTeamSection.appendChild(cardsContainer);
};

export const addAllServices = (ourServices) => {
  const servicesAllPageSection = document.querySelector(
    '#services-all .container'
  );
  const cardsContainer = document.createElement('div');
  cardsContainer.setAttribute('class', 'cards-container');
  ourServices.forEach(({ name, description }) => {
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
};

export const addAboutUs = (aboutUsSpeach) => {
  const aboutUsContainer = document.getElementById('about-us-container');
  aboutUsSpeach.content.forEach((about) => {
    const aboutP = document.createElement('p');
    aboutP.innerHTML = about;
    aboutUsContainer.appendChild(aboutP);
  });
};

export const addOurStory = (ourStorySpeach) => {
  const ourStoryContainer = document.getElementById('our-story-container');
  ourStorySpeach.content.forEach((story) => {
    const storyP = document.createElement('p');
    storyP.innerHTML = story;
    ourStoryContainer.appendChild(storyP);
  });
};

export const addOurMission = (ourMissionSpeach) => {
  const ourMissionContainer = document.getElementById('our-mission-container');
  ourMissionSpeach.content.forEach((mission) => {
    const missionP = document.createElement('p');
    missionP.innerHTML = mission;
    ourMissionContainer.appendChild(missionP);
  });
};

export const addOurValues = (ourValuesSpeach) => {
  const ourValuesContainer = document.getElementById('our-values-container');
  ourValuesSpeach.content.forEach((value) => {
    const valuesP = document.createElement('p');
    valuesP.innerHTML = value;
    ourValuesContainer.appendChild(valuesP);
  });
};

export const addWhyChooseUs = (whyChooseUsSpeach) => {
  const whyChooseUsContainer = document.getElementById('why-choose-us');
  whyChooseUsSpeach.content.forEach((reason) => {
    const reasonsP = document.createElement('p');
    reasonsP.innerHTML = reason;
    whyChooseUsContainer.appendChild(reasonsP);
  });
};
