/* eslint-disable prettier/prettier */
'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'trailing-history',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    guidemaker: {
      title: 'Guidemaker Ember Locale Template',
      description: 'A Guidemaker template to translate Ember.js Guides in any language',
      sourceRepo: 'https://github.com/DazzlingFugu/ember-fr-guides-source',
      host: {
        name: 'Netlify',
        site: 'https://app.netlify.com',
      },
      mascots: {
        tomster: { image: '/images/mascots/tomster.png', name: 'Tomster' },
        zoey: { image: '/images/mascots/zoey.png', name: 'Zoey' },
      },
      // Everything in texts could be handle with an actual intl tool in a later time
      texts: {
        searchInputPlaceholder: 'Search the guides',
        searchResultsPlaceholder: 'Search results',
        currentChapter: 'We\'ve finished covering',
        nextChapter: 'Next up:',
      }
    },

    historySupportMiddleware: true
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
