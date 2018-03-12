import Route from '@ember/routing/route';
import AuthenticatedMixin from 'inspire-me/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedMixin, {
  beforeModel({ targetName }) {
    this._super(...arguments);
    if (targetName === 'authenticated.index') {
      this.transitionTo('authenticated.my-atelier');
    }
  }
});
