const INTERN_URL = process.env.INTERN_URL || 'https://historyofkhorinis.org';
const POLISH_URL = process.env.POLISH_URL || 'https://dziejekhorinis.org';

console.log('INTERN_URL is ', process.env.INTERN_URL)

module.exports = {
  items: [{
    lang: 'pl',
    url: `${POLISH_URL}`,
    text: 'Polski'
  }, {
    lang: 'en',
    url: `${INTERN_URL}`,
    text: `English`
  }, {
    lang: 'de',
    url: `${INTERN_URL}/de`,
    text: 'Deutsche',
  }, {
    lang: 'ru',
    url: `${INTERN_URL}/ru`,
    text: 'Русский',
  }, {
    lang: 'cz',
    url: `${INTERN_URL}/cz`,
    text: 'Český',
  }, {
    lang: 'ro',
    url: `${INTERN_URL}/ro`,
    text: 'Română',
  }, {
    lang: 'it',
    url: `${INTERN_URL}/it`,
    text: 'Italiana',
  }, {
    lang: 'es',
    url: `${INTERN_URL}/es`,
    text: 'Español',
  }, {
    lang: 'hu',
    url: `${INTERN_URL}/hu`,
    text: 'Magyar',
  }, {
    lang: 'sk',
    url: `${INTERN_URL}/sk`,
    text: 'Slovenský',
  }]
};
