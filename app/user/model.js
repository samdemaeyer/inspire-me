import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  email:     attr('string'),
  firstName: attr('string'),

  artUpload: hasMany('art-upload'),
});
