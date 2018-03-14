import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';

export default Route.extend({
  beforeModel({ targetName }) {
    this._super(...arguments);
    if (targetName === 'authenticated.index') {
      this.transitionTo('authenticated.my-atelier');
    }
    return this.get('session').fetch().then(() => {
      const userProxy = getOwner(this).lookup('service:current-user');
      return this.store.findRecord('user', this.get('session.uid')).then(user => userProxy.set('content', user));
    }).catch((error) => {
      if (error.message === 'No session available') {
        this.transitionTo('sign-in')
      }
    });
  }
});
