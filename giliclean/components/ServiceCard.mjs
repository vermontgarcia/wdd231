export default class ServiceCard {
  constructor({ service }) {
    this.service = service;
  }

  getServiceTemplate(){
    return `
      <div class="card service">
        <div class="card-header">
          <img src="${imageUrl}" alt="${name}" />
          <h3>${name}</h3>
        </div>
        <div class="card-content">
          <p>${description}</p>
        </div>
        <div class="card-actions">
          <button class="service-details-btn" data-id="${id}">
            Learn More
          </button>
        </div>
      </div>
    `;
  }
}
