import ListComponent from './ListComponent.js';
import { interestPlaceTemplate } from './templates.js';
import { getDiscoverTitle, qs } from './utils.js';

const interestPlaces = new ListComponent(
  qs('#discover-container'),
  interestPlaceTemplate,
  './data/places.json'
);

interestPlaces.init();

qs('h1').innerHTML = getDiscoverTitle();
