import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    signOut() {
      this.get('session').close().then(() => this.transitionToRoute('sign-in'));
    }
  }
});
