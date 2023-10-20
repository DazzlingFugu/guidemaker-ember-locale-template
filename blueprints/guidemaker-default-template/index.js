/* eslint-disable prettier/prettier */
/* eslint-env node */

module.exports = {
  description: 'The default blueprint for guidemaker-ember-locale-template.',

  normalizeEntityName() {
    // no-op
  },

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        'ember-cli-google-fonts'
      ]
    });
  }
};
