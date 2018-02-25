import Mixin from '@ember/object/mixin';

export default Mixin.create({
  beforeModel() {
    const session = this.get('session');
    return session.fetch().then(() => {
      if (session.get('currentUser')) {
        this.transitionTo('authenticated');
      }
    }).catch(() => {});
  },
});
