import ListComponent from './ListComponent.js';

export default class WeatherComponents extends ListComponent {
  constructor(
    parentElementCurent,
    parentElementForecast,
    templateCurrent,
    templateForecast,
    dataUrl,
    dataMapper,
    clearParentElement = true
  ) {
    super();
    this.parentElementCurent = parentElementCurent;
    this.parentElementForecast = parentElementForecast;
    this.templateCurrent = templateCurrent;
    this.templateForecast = templateForecast;
    this.dataUrl = dataUrl;
    this.dataMapper = dataMapper;
    this.clearParentElement = clearParentElement;
  }

  async init() {
    const { current, forecast } = await this.getData(this.dataMapper);
    this.renderList(current, this.parentElementCurent, this.templateCurrent);
    this.renderList(
      forecast,
      this.parentElementForecast,
      this.templateForecast
    );
  }
}
