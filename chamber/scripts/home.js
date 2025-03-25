import ListComponent from './ListComponent.js';
import WeatherComponents from './WeatherComponents.js';
import {
  businessCardTemplate,
  eventsTemplate,
  forecastDataTemplate,
  weatherDataTemplate,
} from './templates.js';
import { getTopMembers, qs, weatherDataMapper } from './utils.js';

const weatherCcomponents = new WeatherComponents(
  qs('#current-weather .card-content'),
  qs('#forecast-weather .card-content'),
  weatherDataTemplate,
  forecastDataTemplate,
  'https://api.weatherapi.com/v1/forecast.json?days=3&key=39a96f02b1314125884191955250602&q=provo&aqi=yes',
  weatherDataMapper
);

weatherCcomponents.init();

const events = new ListComponent(
  qs('#events-container .card-content'),
  eventsTemplate,
  './data/events.json',
  undefined,
  true
);

events.init();

const businessCards = new ListComponent(
  qs('#business-card-container'),
  businessCardTemplate,
  './data/members.json',
  getTopMembers,
  true
);

businessCards.init();
