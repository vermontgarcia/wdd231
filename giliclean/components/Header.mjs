import {
  aboutUs,
  contact,
  home,
  services,
} from '../scripts/helpers/consts.mjs';

export default class Header {
  constructor({ wayfinding, container, clearContainer = false }) {
    this.wayfinding = wayfinding;
    this.container = container;
    this.clearContainer = clearContainer;
  }

  renderHeader() {
    if (this.clearContainer) {
      this.container.innerHTML = '';
    }
    this.container.innerHTML = `
      <div>
      <div class="logo-container">
        <img
          src="images/logo-new.svg"
          alt="Gili Clean Logo"
          width="100"
          height="71"
          loading="eager"
        />
      </div>
      <a href="contact.html" class="contact-phone">(801)259-4138</a>
      <div class="menu-btn">
        <a id="menu-btn" role="button" class="menu-icon">
          <i id="menu-icon" class="material-icons">menu</i>
        </a>
      </div>
    </div>
    <nav class="menu" id="menu">
      <a id="here" href="index.html" class="${
        this.wayfinding === home ? 'active' : ''
      }">Home</a>
      <a href="services.html" class="${
        this.wayfinding === services ? 'active' : ''
      }">Services</a>
      <a href="contact.html" class="${
        this.wayfinding === contact ? 'active' : ''
      }">Contact</a>
      <a href="about.html" class="${
        this.wayfinding === aboutUs ? 'active' : ''
      }">About Us</a>
    </nav>
    `;
  }

  init() {
    this.renderHeader();
  }
}
