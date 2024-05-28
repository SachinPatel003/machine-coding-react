const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const moduleRequiredProps = {
  moduleType: ['booking_website', 'sailor_app', 'helpdesk'],
  sailor_app: ['token', 'just_for_sailor'],
  booking_website: ['token'],
  helpdesk: ['token', 'base_url'],
};

export { API_BASE_URL, moduleRequiredProps }
