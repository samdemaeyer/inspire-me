import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import firebase from 'firebase';

export default Controller.extend({
  firebaseApp: service(),
  isSignInPage: true,

  btnDisabled: computed('email', 'password', function() {
    const { email, password } = this.getProperties('email', 'password');
    return isEmpty(email) || isEmpty(password);
  }),

  actions: {
    signIn() {
      const { email, password } = this.getProperties('email', 'password');
      const params = { provider: 'password', email, password };
      this.get('session').open('firebase', params).then(() => this.transitionToRoute('authenticated.my-atelier'));
    },

    signInWithFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.get('firebaseApp').auth().signInWithPopup(provider).then(userData => {
        const user = this.store.createRecord('user', {
          id: userData.user.uid,
          email: userData.user.email,
        });
        return user.save().then(() => this.transitionToRoute('authenticated.my-atelier'));
      })
    },

    // signInWithGoogle() {
    //   const provider = new firebase.auth.FacebookAuthProvider();
    //   this.get('firebaseApp').auth().signInWithPopup(provider).then(() => this.transitionToRoute('authenticated'));
    // }
  }
});
