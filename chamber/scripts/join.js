import ListComponent from './ListComponent.js';
import { membershipTemplate } from './templates.js';
import { qs } from './utils.js';

const memberships = new ListComponent(
  qs('#levels-container'),
  membershipTemplate,
  './data/membership.json'
);

memberships.init();

const showModal = ({ name, detailedDescription }) => {
  const modal = qs('#membership-details');
  modal.innerHTML = `
    <button id="close-modal">X</button>
    <h2>${name}</h2>
    <div>
      ${detailedDescription}
    </div>
  `;
  modal.showModal();
  document.getElementById('close-modal').addEventListener('click', () => {
    modal.close();
  });
};

const addMembershipDetails = async (list) => {
  const data = await list.getData(memberships.dataMapper);
  document.querySelectorAll('.view-details-btn').forEach((button) => {
    button.addEventListener('click', (el) => {
      const id = el.currentTarget.dataset.id;
      const membership = data.find((level) => level.id === id);
      console.log(membership);
      showModal(membership);
    });
  });
};

addMembershipDetails(memberships);
