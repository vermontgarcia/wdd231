export const businnessDirectoryTemplate = (business) => {
  const { name, address, phoneNumber, websiteUrl, imageUrl } = business;
  return `
  <div class="business-card">
    <div class="logo-container">
      <img src="${imageUrl}" alt="${name}" width="100" height="50" loading="lazy" />
    </div>
    <p>${name}</p>
    <p>${address}</p>
    <p>${phoneNumber}</p>
    <a href="${websiteUrl}" target="_blank">${websiteUrl}</a>
  </div>
  `;
};

export const weatherDataTemplate = (weather) => {
  const {
    iconUrl,
    temperature,
    conditions,
    humidity,
    visibility,
    windSpeed,
    windDirection,
    windChill,
    pressure,
    heatIndex,
    dewPoint,
  } = weather;
  return `
    <div class="weather-image">
      <img
        id="weather-icon"
        class=""
        src="${iconUrl}"
        alt="weather icon"
        width="80"
        height="80"
      />
      <div class="temp">${temperature} °C</div>
    </div>
    <div class="weather-body">
      <ul id="weather-list">
        <li>${conditions}</li>
        <li>Humidity: ${humidity} %</li>
        <li>Visibility: ${visibility} km</li>
        <li>Wind: ${windSpeed} km/h</li>
        <li>Wind Direction: ${windDirection}</li>
        <li>Wind Chill: ${windChill} °C</li>
        <li>Pressure: ${pressure} mb</li>
        <li>Heat Index: ${heatIndex} °C</li>
        <li>Dew Point: ${dewPoint} °C</li>
      </ul>
    </div>
  `;
};

export const forecastDataTemplate = (forecast) => {
  const { day, iconUrl, higest, lowest, sunrise, sunset } = forecast;
  return `
    <div>${day}</div>
    <div class="forecast-body">
      <div>
        <div class="weather-image">
          <img
            id="weather-icon"
            class=""
            src="${iconUrl}"
            alt="weather icon"
            width="40"
            height="40"
          />
        </div>
      </div>
      <div>
        <div class="temp">H: ${higest} °C</div>
        <div class="temp">L: ${lowest} °C</div>
      </div>
      <div>
        <div>Sunrise: ${sunrise} am</div>
        <div>Sunset: ${sunset} pm</div>
      </div>
    </div>
  `;
};

export const businessCardTemplate = (company) => {
  const { name, tagline, imageUrl, contactEmail, phoneNumber, websiteUrl } =
    company;
  return `
    <div class="business-card">
      <div class="business-card-header">
        <h3>${name}</h3>
        <p>${tagline}</p>
      </div>
      <hr />
      <div class="business-card-content">
        <img
          src="${imageUrl}"
          alt="business-logo"
          width="50"
          height="50"
        />
        <div>
          <p><strong>SITE: </strong><a href="${websiteUrl}">${websiteUrl}</a></p>
          <p>
            <strong>EMAIL: </strong
            ><a href="mailto:${contactEmail}">${contactEmail}</a>
          </p>
          <p><strong>PHONE: </strong>${phoneNumber}</p>
        </div>
      </div>
    </div>
  `;
};

export const eventsTemplate = (event) => {
  const { company, date, time, name, description } = event;
  return `
  <div class="event-item">
    <div class="event-data">
      <p>${date}</p>
      <p>${time}</p>
      <p>${company}</p>
      </div>
    <div class="event-detail">
      <p>${name}</p>
      <p>${description}</p>
    </div>
  </div>
  `;
};
