import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Controller.extend({
  isSignInPage: true,

  btnDisabled: computed('email', 'password', function() {
    const { email, password } = this.getProperties('email', 'password');
    return isEmpty(email) || isEmpty(password);
  }),

  actions: {
    signIn() {
      const { email, password } = this.getProperties('email', 'password');
      const params = { provider: 'password', email, password };
      this.get('session').open('firebase', params).then(() => this.transitionToRoute('authenticated'));
    },
  }
});
