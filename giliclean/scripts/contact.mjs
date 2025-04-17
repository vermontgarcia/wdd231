import Header from '../components/Header.mjs';
import { contact } from './helpers/consts.mjs';
import { qs } from './helpers/utils.mjs';

const container = qs('header');
const header = new Header({ wayfinding: contact, container });

header.init();

// Contact Form

document.querySelectorAll('input[name="topic"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    console.log(`Radio selected: ${event.target.value}`);
    const topic = event.target.value;
    if (topic === 'review') {
      document.getElementById('stars-reviews').classList.remove('hidden');
      document
        .querySelectorAll('.star-radio')[0]
        .setAttribute('required', 'required');
      document
        .getElementById('submit-btn')
        .setAttribute(
          'value',
          `Publish My ${topic.charAt(0).toUpperCase() + topic.slice(1)}`
        );
    } else {
      document.getElementById('stars-reviews').classList.add('hidden');
      document.querySelectorAll('.star-radio')[0].removeAttribute('required');
      document
        .getElementById('submit-btn')
        .setAttribute(
          'value',
          `Request My ${topic.charAt(0).toUpperCase() + topic.slice(1)}`
        );
    }
  });
});

document
  .querySelector('#contact-form')
  ?.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    let data = {};
    for (const [name, value] of formData.entries()) {
      data[name] = value;
    }
    const requets = JSON.parse(localStorage.getItem('requets')) || [];
    data.timeStamp = Date.now();
    requets.push(data);
    localStorage.setItem('requets', JSON.stringify(requets));
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  });
