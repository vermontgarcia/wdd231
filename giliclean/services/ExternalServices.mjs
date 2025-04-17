const baseURL = './datasources';

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

export default class ExternalServices {
  constructor() {
    this.baseURL = baseURL;
  }

  async getServices() {
    try {
      const response = await fetch(`${this.baseURL}/services.json`);
      return await convertToJson(response);
    } catch (error) {
      console.error('getServices error: ', error);
    }
  }

  async getTeam() {
    try {
      const response = await fetch(`${this.baseURL}/team-members.json`);
      return await convertToJson(response);
    } catch (error) {
      console.error('getServices error: ', error);
    }
  }

  async getReviews() {
    try {
      const reviewsRes = await fetch(`${this.baseURL}/reviews.json`);
      const starAttributesRes = await fetch(
        `${this.baseURL}/starAttributes.json`
      );
      const reviews = await convertToJson(reviewsRes);
      const inputStartAttributes = await convertToJson(starAttributesRes);
      return { reviews, inputStartAttributes };
    } catch (error) {
      console.error('getReviews error: ', error);
    }
  }
}
