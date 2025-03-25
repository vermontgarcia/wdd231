export const businnessCardTemplate = (business) => {
  const {
    name,
    address,
    phoneNumber,
    websiteUrl,
    imageUrl,
    membershipLevel,
    description,
  } = business;
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
