import Header from '../components/Header.mjs';
import ExternalServices from '../services/ExternalServices.mjs';
import { qs } from './helpers/utils.mjs';
import { services } from './helpers/consts.mjs';
import { addAllServices } from './helpers/templates.mjs';

const container = qs('header');
const header = new Header({ wayfinding: services, container });

header.init();

const servicesAPIClient = new ExternalServices();

const setServices = async () => {
  const services = await servicesAPIClient.getServices();
  addAllServices(services);
};

setServices();
