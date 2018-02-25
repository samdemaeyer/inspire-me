import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title:       attr('string'),
  base64:      attr('string'),
  description: attr('string'),
  surface:     attr('string'),
  medium:      attr('string'),
  style:       attr('string'),
  price:       attr('number'),
  subjects:    attr(),
  tags:        attr(),

  user: belongsTo('user')
});
