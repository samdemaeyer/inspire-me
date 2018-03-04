import Controller from '@ember/controller';
import { task } from 'ember-concurrency';

export default Controller.extend({
  updateArtworkTask: task(function*() {
    yield this.get('model').save();
    this.transitionToRoute('authenticated.my-atelier');
  })
});
