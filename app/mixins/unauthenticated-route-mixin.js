import Mixin from '@ember/object/mixin';

export default Mixin.create({
  beforeModel() {
    return this.get('session').fetch().catch(() => {});
  },

  redirect() {
    if (this.get('session.currentUser')) {
      this.transitionTo('authenticated');
    }
  }
});
