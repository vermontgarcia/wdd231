import { parseJson } from './utils.js';

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
    parentElement.insertAdjacentHTML('afterBegin', htmlStrins.join(''));
  }

  async init() {
    const data = await this.getData(this.dataMapper);
    this.renderList(data, this.parentElement, this.template);
  }
}
