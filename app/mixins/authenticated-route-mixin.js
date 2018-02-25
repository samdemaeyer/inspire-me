import Mixin from '@ember/object/mixin';

export default Mixin.create({
  beforeModel() {
    return this.get('session').fetch().catch((error) => {
      if (error.message === 'No session available') {
        this.transitionTo('sign-in')
      }
    });
  }
});
