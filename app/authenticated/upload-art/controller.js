import Controller from '@ember/controller';

export default Controller.extend({
  init(...args) {
    this._super(...args);
    this.uploads = [];
  },
});
