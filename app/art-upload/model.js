import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  base64: attr('string'),
  description: attr('string'),

  user: belongsTo('user')
});
