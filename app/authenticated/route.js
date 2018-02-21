import Route from '@ember/routing/route';
import AuthenticatedMixin from 'inspire-me/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedMixin, {
  model() {
    return this.store.findRecord('user', this.get('session.uid'));
  }
});
