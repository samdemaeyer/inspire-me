import ObjectProxy from '@ember/object/proxy';

export function initialize(appInstance) {
  let service = ObjectProxy.create({ isServiceFactory: true });
  appInstance.register('service:current-user', service, { instantiate: false, singleton: true });
  appInstance.inject('route', 'currentUser', 'service:current-user');
  appInstance.inject('controller', 'currentUser', 'service:current-user');
  appInstance.inject('component', 'currentUser', 'service:current-user');
}

export default {
  name: 'current-user',
  initialize
};
