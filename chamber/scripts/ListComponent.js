import { businnessCardTemplate } from './templates.js';
import { parseJson } from './utils.js';

export default class ListComponent {
  constructor(parentElement, template, dataUrl) {
    this.data = [];
    this.parentElement = parentElement;
    this.template = template;
    this.dataUrl = dataUrl;
  }

  async getData() {
    const data = await fetch(this.dataUrl);
    this.data = await parseJson(data);
  }

  renderList(list) {
    const htmlStrins = list.map(this.template);
    this.parentElement.insertAdjacentHTML('afterBegin', htmlStrins.join(''));
  }

  async init() {
    await this.getData();
    this.renderList(this.data);
  }
}
