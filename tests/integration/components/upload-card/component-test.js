import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { find } from '@ember/test-helpers';

module('Integration | Component | upload-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('upload', { base64: 'base64String', title: 'upload-title' });

    await render(hbs`{{upload-card upload=upload}}`);
    assert.equal(find('h4.title').textContent.trim(), 'upload-title', 'correct title btn rendered');
    assert.equal(find('.buttons-wrapper button').textContent.trim(), 'Remove', 'correct remove btn rendered');
    assert.ok(find('.buttons-wrapper button').disabled, 'Remove btn is disabled');
    assert.equal(find('.buttons-wrapper a').textContent.trim(), 'Update', 'correct update btn rendered');
    assert.equal(find('.img').style.backgroundImage, 'url("base64String")', 'Correct img-url rendered');
  });
});
