import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | authenticated/my-atelier', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:authenticated/my-atelier');
    assert.ok(route);
  });
});