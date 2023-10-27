import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | includes', function (hooks) {
  setupRenderingTest(hooks);

  test('it returns true if the given string includes the given query', async function (assert) {
    await render(hbs`
      {{#if (includes 'this-is-a-string' 'is')}}
        <p>Includes</p>
      {{/if}}
    `);
    assert.dom('p').hasText('Includes');
  });

  test('it returns false if the given string does not include the given query', async function (assert) {
    await render(hbs`
      {{#if (includes 'this-is-a-string' 'no')}}
        <p>Doesn't include</p>
      {{/if}}
    `);
    assert.dom('p').hasText("Doesn't include");
  });
});
