const organizationData = new URLSearchParams(window.location.search);

document.getElementById('results').innerHTML = `
<p>Appointment for ${organizationData.get('first')} ${organizationData.get(
  'last'
)}</p>
<p>Proxy ${organizationData.get('ordinance')} on ${organizationData.get(
  'date'
)} in the ${organizationData.get('location')} Temple</p>
<p>Your Phone: ${organizationData.get('phone')}</p>
<p>Your email is: ${organizationData.get('email')}</p>
`;
