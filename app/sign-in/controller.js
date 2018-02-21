import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    signIn() {
      const { email, password } = this.getProperties('email', 'password');
      const params = { provider: 'password', email, password };
      this.get('session').open('firebase', params).then(() => this.transitionToRoute('authenticated'));
    },
  }
});
