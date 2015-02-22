// the app/scripts/main.js file, which defines our RequireJS config
require.config({
    waitSeconds: 30,
    paths: {
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.min',
        angularResource: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.17/angular-resource.min',
        angularRoute: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.17/angular-route.min',
        angularUiDate: '../../../lib/angularui/date',
        highcharts: '../../../lib/charts/highcharts/highcharts', //highcharts
        highcharts_exporting: '../../../lib/charts/highcharts/exporting', //highcharts
        highcharts_exportCSV: '../../../lib/charts/highcharts/exportCSV', //highcharts
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
        jquerycookie: '../../../lib/jquery/jquery.cookie',
        jqueryui: '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min',
        lodash: '../../../lib/utils/lodash.min',
        mainCtrl: 'controllers/mainCtrl',
        ngGrid: '../../../lib/angularui/ng-grid/ng-grid-2.0.11.min',
        ngGridClick: '../../../lib/angularui/ng-grid/plugins/ngGridClick',
    },
    shim: {
        angular: { deps: ['jquery'], exports: 'angular' },
        angularResource: { deps: ['angular'] },
        angularRoute: { deps: ['angular'] },
        angularUiDate: { deps: ['angular', 'jqueryui'] },
        app: { deps: ['angular', 'angularRoute', 'angularResource', 'angularUiDate', 'ngGrid'] },
        configService: { deps : ['app', 'jquerycookie'] },
        highcharts: { deps: ['jquery'] },
        highcharts_exporting: { deps: ['jquery', 'highcharts'] },
        highcharts_exportCSV: { deps: ['jquery', 'highcharts'] },
        jqueryui: { deps: ['jquery'] },
        mainCtrl: { deps : ['app'] },
        ngGrid: { deps: ['angular'] },
        ngGridClick : { deps : ['ngGrid'] },
        routes : { deps : ['app', 'angularRoute'] }
    }
});

require([
    'angular',
    'mainCtrl',
    'routes'
], function(angular) {
    'use strict';

    return angular.element(document).ready(function() {
        return require(['bootstrap']);
    });
});
