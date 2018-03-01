import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { task } from 'ember-concurrency';

export default Controller.extend({
  init(...args) {
    this._super(...args);
    this.uploads = [];
  },

  uploadLoop: computed('uploads.[]', function() {
    const uploadsLength = this.get('uploads').length;
    const loops = uploadsLength === 5 ? uploadsLength : uploadsLength + 1;
    return new Array(loops);
  }),

  actions: {
    submitArtwork() {
      this.get('uploads').forEach(upload => this.get('submitArtworkTask').perform(upload));
    }
  },

  submitArtworkTask: task(function*(upload) {
    yield upload.save();
    const currentUser = this.get('currentUser.content');
    currentUser.get('artUploads').pushObject(upload);
    currentUser.save();

    this.transitionToRoute('authenticated');
  })
});
