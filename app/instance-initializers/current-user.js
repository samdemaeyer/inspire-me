export function initialize(appInstance) {
  appInstance.inject('route', 'currentUser', 'service:current-user');
  appInstance.inject('controller', 'currentUser', 'service:current-user');
  appInstance.inject('component', 'currentUser', 'service:current-user');
}

export default {
  initialize
};
