import ListComponent from './ListComponent.js';
import { membershipTemplate } from './templates.js';
import { addMembershipDetails, qs, setTimestamp } from './utils.js';

const memberships = new ListComponent(
  qs('#levels-container'),
  membershipTemplate,
  './data/membership.json'
);

memberships.init();

addMembershipDetails(memberships);

setTimestamp(qs('#timestamp'));
