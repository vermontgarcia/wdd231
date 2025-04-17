import Header from '../components/Header.mjs';
import ExternalServices from '../services/ExternalServices.mjs';
import { home } from './helpers/consts.mjs';
import { qs } from './helpers/utils.mjs';
import { addReviews, addServices, addTeam } from './helpers/templates.mjs';

const headerContainer = qs('header');
const header = new Header({ wayfinding: home, container: headerContainer });
header.init();

const servicesAPIClient = new ExternalServices();

const setServices = async () => {
  const services = await servicesAPIClient.getServices();
  addServices(services);
};

const setReviews = async () => {
  const reviews = await servicesAPIClient.getReviews();
  addReviews(reviews);
};

const setTeam = async () => {
  const reviews = await servicesAPIClient.getTeam();
  addTeam(reviews);
};

setReviews();
setServices();
setTeam();
