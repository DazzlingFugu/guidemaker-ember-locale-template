/* eslint-disable ember/no-classic-classes, ember/require-tagless-components, prettier/prettier */
import LinkComponent from '@ember/routing/link-component';

export default LinkComponent.extend({
  click() {
    if(document) {
      document.getElementById('toc-toggle').checked = false;
    }
  }
});
