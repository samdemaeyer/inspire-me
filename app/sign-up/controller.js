import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Controller.extend({
  firebaseApp: service(),

  btnDisabled: computed('firstName', 'email', 'password', 'passwordConfirmation', function() {
    const {
      firstName,
      email,
      password,
      passwordConfirmation
    } = this.getProperties('firstName', 'email', 'password', 'passwordConfirmation');
    const passwordsMatch = password === passwordConfirmation;
    return isEmpty(firstName) || isEmpty(email) || isEmpty(password) || !passwordsMatch;
  }),

  actions: {
    signUp() {
      const auth = this.get('firebaseApp').auth();
      const { email, password, firstName } = this.getProperties('email', 'password', 'firstName');
      auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
        const user = this.store.createRecord('user', {
          id: userResponse.uid,
          email: userResponse.email,
          firstName
        });
        return user.save().then(() => this.transitionToRoute('authenticated.my-atelier'));
      });
    },
  }
});
