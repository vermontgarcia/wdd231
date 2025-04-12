import ListComponent from './ListComponent.js';
import { membershipRowTemplate, thankyouTemplate } from './templates.js';
import { getDataMemberRows, qs } from './utils.js';

const myInfo = new URLSearchParams(window.location.search);

const thankyou = new ListComponent(
  qs('#thankyou-container'),
  thankyouTemplate,
  './data/thankyou.json'
);
thankyou.init();

const membershipDetails = new ListComponent(
  qs('#member-data-container'),
  membershipRowTemplate
);
membershipDetails.data = getDataMemberRows(myInfo);
membershipDetails.init();
