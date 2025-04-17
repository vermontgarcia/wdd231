import Header from '../components/Header.mjs';
import { aboutUs } from './helpers/consts.mjs';
import { qs } from './helpers/utils.mjs';

const container = qs('header');
const header = new Header({ wayfinding: aboutUs, container });

header.init();

import {
  aboutUsSpeach,
  ourStorySpeach,
  ourMissionSpeach,
  ourValuesSpeach,
  whyChooseUsSpeach,
} from './content.js';

// About Us

const aboutUsContainer = document.getElementById('about-us-container');

if (aboutUsContainer) {
  aboutUsSpeach.content.forEach((about) => {
    const aboutP = document.createElement('p');
    aboutP.innerHTML = about;
    aboutUsContainer.appendChild(aboutP);
  });
}

// Our Story
const ourStoryContainer = document.getElementById('our-story-container');

if (ourStoryContainer) {
  ourStorySpeach.content.forEach((story) => {
    const storyP = document.createElement('p');
    storyP.innerHTML = story;
    ourStoryContainer.appendChild(storyP);
  });
}

// Our Mission
const ourMissionContainer = document.getElementById('our-mission-container');

if (ourMissionContainer) {
  ourMissionSpeach.content.forEach((mission) => {
    const missionP = document.createElement('p');
    missionP.innerHTML = mission;
    ourMissionContainer.appendChild(missionP);
  });
}
// Our Values
const ourValuesContainer = document.getElementById('our-values-container');

if (ourValuesContainer) {
  ourValuesSpeach.content.forEach((value) => {
    const valuesP = document.createElement('p');
    valuesP.innerHTML = value;
    ourValuesContainer.appendChild(valuesP);
  });
}
// Why Chooose Us
const whyChooseUsContainer = document.getElementById('why-choose-us');

if (whyChooseUsContainer) {
  whyChooseUsSpeach.content.forEach((reason) => {
    const reasonsP = document.createElement('p');
    reasonsP.innerHTML = reason;
    whyChooseUsContainer.appendChild(reasonsP);
  });
}
export default {
  aboutUsSpeach,
  ourStorySpeach,
  ourMissionSpeach,
  ourValuesSpeach,
  whyChooseUsSpeach,
};
