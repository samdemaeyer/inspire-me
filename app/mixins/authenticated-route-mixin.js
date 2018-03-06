import Mixin from '@ember/object/mixin';
import { getOwner } from '@ember/application';

export default Mixin.create({
  beforeModel() {
    return this.get('session').fetch().then(() => {
      const userProxy = getOwner(this).lookup('service:current-user');
      const userParams = { uid: this.get('session.uid') };
      return this.store.queryRecord('user', userParams).then(user => userProxy.set('content', user));
    }).catch((error) => {
      if (error.message === 'No session available') {
        this.transitionTo('sign-in')
      }
    });
  }
});
