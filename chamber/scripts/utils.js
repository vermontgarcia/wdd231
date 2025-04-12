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

export const showModal = ({ name, detailedDescription }) => {
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

export const addMembershipDetails = async (list) => {
  const data = await list.getData(list.dataMapper);
  document.querySelectorAll('.view-details-btn').forEach((button) => {
    button.addEventListener('click', (el) => {
      const id = el.currentTarget.dataset.id;
      const membership = data.find((level) => level.id === id);
      console.log(membership);
      showModal(membership);
    });
  });
};

export const getDataMemberRows = (params) => {
  const timestamp = params.get('timestamp');
  const fname = params.get('fname');
  const lname = params.get('lname');
  const organizationTitle = params.get('organizationTitle');
  const email = params.get('email');
  const phone = params.get('phone');
  const organization = params.get('organization');
  const membership = params.get('membership');
  const description = params.get('description');

  timeToHuman(timestamp);
  return [
    {
      name: 'Date',
      data: timeToHuman(timestamp),
    },
    {
      name: 'Name',
      data: `${fname} ${lname}`,
    },
    {
      name: 'Position',
      data: `${organizationTitle}`,
    },
    {
      name: 'Email',
      data: `${email}`,
    },
    {
      name: 'Phone',
      data: `${phone}`,
    },
    {
      name: 'Organization',
      data: `${organization}`,
    },
    {
      name: 'Organization Details',
      data: `${description}`,
    },
    {
      name: 'Membership Level',
      data: `${membership}`,
    },
  ];
};

export const setTimestamp = (el) => {
  const now = new Date();
  const pad = (num) => num.toString().padStart(2, '0');
  const y = now.getFullYear();
  const m = pad(now.getMonth() + 1);
  const d = pad(now.getDate());
  const h = pad(now.getHours());
  const min = pad(now.getMinutes());
  el.value = `${y}-${m}-${d}T${h}:${min}`;
};

export const timeToHuman = (timestamp) => {
  const date = new Date(timestamp);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return date.toLocaleDateString('en-US', options);
};
