const enLang = require('./src/languages-data/en');
const deLang = require('./src/languages-data/de');
const ruLang = require('./src/languages-data/ru');
const plLang = require('./src/languages-data/pl');
const czLang = require('./src/languages-data/cz');
const roLang = require('./src/languages-data/ro');
const itLang = require('./src/languages-data/it');
const esLang = require('./src/languages-data/es');
const huLang = require('./src/languages-data/hu');
const skLang = require('./src/languages-data/sk');
const path = require(`path`);
const fs = require(`fs`);
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const pages = fs.readdirSync('./src/templates').filter(i => i.endsWith('.js')).filter(page => page !== 'team.js');

  if ( process.env.LANG_VERSION === 'pl' ) {
    pages.forEach(page => {
      const pagePath = page.replace('.js', '');
      const isIndex = pagePath === 'index';
      createPage({
        path: `/${isIndex ? '' : pagePath}`,
        component: path.resolve(`./src/templates/${page}`),
        context: {
          ...plLang,
        },
      })
    });
  } else {
    pages.forEach(page => {
      const pagePath = page.replace('.js', '');
      const isIndex = pagePath === 'index';
      createPage({
        path: `/${isIndex ? '' : pagePath}`,
        component: path.resolve(`./src/templates/${page}`),
        context: {
          ...enLang,
        },
      })
    });

    const languages = [deLang, ruLang, czLang, roLang, itLang, esLang, huLang, skLang];

    languages.forEach(lang => {
      pages.forEach(page => {
        const pagePath = page.replace('.js', '');
        const isIndex = pagePath === 'index';
        createPage({
          path: `/${lang.lang}/${isIndex ? '' : pagePath}`,
          component: path.resolve(`./src/templates/${page}`),
          context: {
            ...lang,
          },
        })
      })
    });
  }
};
