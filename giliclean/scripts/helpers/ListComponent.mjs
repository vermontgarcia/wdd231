import { parseJson } from './utils.mjs';

export default class ListComponent {
  constructor(
    parentElement,
    template,
    dataUrl,
    dataMapper = (data) => data,
    clearParentElement = false
  ) {
    this.data = [];
    this.parentElement = parentElement;
    this.template = template;
    this.dataUrl = dataUrl;
    this.dataMapper = dataMapper;
    this.clearParentElement = clearParentElement;
  }

  async getData(dataMapper) {
    const data = await fetch(this.dataUrl);
    return dataMapper(await parseJson(data));
  }

  renderList(list, parentElement, template) {
    if (this.clearParentElement) {
      parentElement.innerHTML = '';
    }
    const htmlStrins = list.map(template);
    parentElement.insertAdjacentHTML('beforeend', htmlStrins.join(''));
  }

  async init() {
    if (this.dataUrl) {
      this.data = await this.getData(this.dataMapper);
    }
    this.renderList(this.data, this.parentElement, this.template);
  }
}
