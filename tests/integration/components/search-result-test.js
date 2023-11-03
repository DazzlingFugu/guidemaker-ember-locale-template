import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | search-result', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders as a div tag and the correct class', async function (assert) {
    await render(hbs`<SearchResult />`);
    assert.dom('div').hasClass('ds-suggestion');
  });
});
