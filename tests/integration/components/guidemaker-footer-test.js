import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | guidemaker-footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders as a footer tag', async function (assert) {
    await render(hbs`<GuidemakerFooter />`);
    assert.dom('footer').exists();
  });
});
