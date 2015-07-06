var m = require('mithril'),
    domready = require('domready'),
    routes = require('./routes');

m.route.mode = 'pathname';


wv = {};

m.route(document.body, '/', routes);
