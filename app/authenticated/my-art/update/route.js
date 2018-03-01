import Route from '@ember/routing/route';

export default Route.extend({
  model({ upload_id }) {
    return this.store.findRecord('art-upload', upload_id);
  },
});
