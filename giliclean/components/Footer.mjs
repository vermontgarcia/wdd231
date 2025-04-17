export default class Footer {
  constructor({ container, clearContainer = false }) {
    this.container = container;
    this.clearContainer = clearContainer;
  }

  renderFooter() {
    this.container.innerHTML = `
      <div class="links">
        <a href="index.html">Benefits</a>
        <a href="about.html">Testimonials</a>
        <a href="index.html">Join Our Team</a>
        <a href="contact.html">Contact</a>
      </div>
      <div>
        <div class="copyright-wrapper">
          <p class="copyright">
            © <span id="current-year"></span> • Gili Clean • All rights reserved
          </p>
          <p class="copyright">
            <a href="index.html">Terms of Service</a> • Privacy Policy
          </p>
        </div>
        <p class="copyright-small" id="last-modified"></p>
      </div>
      <div id="social"></div>
      <a href="index.html">
        <img src="images/logo-mark.svg" alt="logo" width="100" height="100" />
      </a>
    `;
  }

  init() {
    this.renderFooter();
  }
}
