import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Controller.extend({
  flashMessages: service(),

  saveDetails: task(function*() {
    try {
      yield this.model.save();
      this.flashMessages.success('Success!');
    } catch (e) {
      this.flashMessages.success('Oooops something went wrong, we could not update the details.');
    }
  })
});
