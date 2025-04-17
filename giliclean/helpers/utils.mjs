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
