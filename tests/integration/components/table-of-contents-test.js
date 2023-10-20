import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table-of-contents', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders as an ol tag and the correct class', async function (assert) {
    await render(hbs`<TableOfContents />`);
    assert.dom('ol').hasClass('toc-level-0');
  });

  test('it builds the class name depending on the provided level', async function (assert) {
    await render(hbs`<TableOfContents @level="1" />`);
    assert.dom('ol').doesNotHaveClass('toc-level-0').hasClass('toc-level-1');
  });
});
