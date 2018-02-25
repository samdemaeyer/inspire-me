import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),

  init(...args) {
    this._super(...args);
    this.store.query('user', { uid: this.get('session.uid') }).then((users) => this.set('content', users.lastObject));
  }
});
