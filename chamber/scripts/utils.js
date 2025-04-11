export const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const getLastUpdate = () => {
  const date = document.lastModified;
  return date.toLocaleString();
};

export const parseJson = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
};

export const qs = (selector) => {
  return document.querySelector(selector);
};

const getRelativeDay = (date) => {
  const inputDate = new Date(date + 'T00:00:00');
  const today = new Date().setHours(0, 0, 0, 0);

  const difference = Math.round((inputDate - today) / (1000 * 60 * 60 * 24));

  if (difference === 0) {
    return 'Today';
  } else if (difference === 1) {
    return `${inputDate.toLocaleDateString('en-US', { weekday: 'long' })}`;
  } else if (difference === 2) {
    return `${inputDate.toLocaleDateString('en-US', { weekday: 'long' })}`;
  } else {
    return inputDate.toLocaleDateString('en-US', { weekday: 'long' });
  }
};

export const weatherDataMapper = (data) => {
  const {
    current: {
      condition: { icon: iconUrl, text: conditions },
      temp_c: temperature,
      humidity,
      vis_km: visibility,
      wind_kph: windSpeed,
      wind_dir: windDirection,
      windchill_c: windChill,
      pressure_mb: pressure,
      heatindex_c: heatIndex,
      dewpoint_c: dewPoint,
    },
    forecast: { forecastday: forecastData },
  } = data;
  const current = [
    {
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
    },
  ];
  const forecast = forecastData.map((data) => {
    const {
      astro: { sunrise: sunriseRaw, sunset: sunsetRaw },
      date,
      day: {
        maxtemp_c: higest,
        mintemp_c: lowest,
        condition: { icon: iconUrl },
      },
    } = data;
    const sunrise = sunriseRaw.substring(0, 5);
    const sunset = sunsetRaw.substring(0, 5);
    const day = getRelativeDay(date);
    return { day, iconUrl, higest, lowest, sunrise, sunset };
  });
  return { current, forecast };
};

const getRandomIndex = (max, min = 0) => {
  return Math.floor(Math.random() * (max - 1 - min)) + min;
};

export const getTopMembers = (list) => {
  const TOTAL_CARDS = 3;
  let newList = [];
  const vipMembers = list.filter(
    (item) => item.membershipLevel === 3 || item.membershipLevel === 2
  );
  for (let i = 0; i < TOTAL_CARDS; i++) {
    const index = getRandomIndex(vipMembers.length);
    newList.push(vipMembers.splice(index, 1)[0]);
  }
  return newList;
};
