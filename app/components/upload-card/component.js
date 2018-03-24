import Component from '@ember/component';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  classNames: ['col-md-6', 'mb-3'],

  init(...args) {
    this._super(...args);
    this.style = htmlSafe(`background-image: url(${this.upload.base64})`);
  }
});
