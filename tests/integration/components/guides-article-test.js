import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | guides-article', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders in an article tag and the correct class', async function (assert) {
    await render(hbs`<GuidesArticle />`);
    assert.dom('article').hasClass('chapter');
  });
});
