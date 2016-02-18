import angular from 'angular'
import uiRouter from 'angular-ui-router'

export default angular.module('ui-router-logger', [uiRouter]).run(['$rootScope', function routingEventsLogger($rootScope) {
    const ROUTING_EVENTS = [
        '$stateChangeStart',
        '$stateChangeSuccess',
        '$stateChangeError'
    ];

    const VIEW_EVENTS = [
        '$viewContentLoading',
        '$viewContentLoaded'
    ];

    ROUTING_EVENTS.forEach(function (routingEvent) {
        $rootScope.$on(routingEvent, function (event, toState, toParams, fromState, fromParams, error) {
            console.log(routingEvent, event, toState, toParams, fromState, fromParams, error);
        });
    });

    VIEW_EVENTS.forEach(function (viewEvent) {
        $rootScope.$on(viewEvent, function (event, viewConfig) {
            console.log(viewEvent, event, viewConfig);
        });
    });
}]).name;
