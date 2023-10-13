import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | sanitize', function (hooks) {
  setupRenderingTest(hooks);

  test('it sanitize not allowed HTML tags', async function (assert) {
    await render(
      hbs`{{sanitize '<em>Allowed tag</em><img /><script>const myVariable = 0</script>'}}`
    );
    assert.dom(this.element).hasText('<em>Allowed tag</em>');
  });
});
