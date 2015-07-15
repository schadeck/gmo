app = {};
app.config = {};
app.data = {};
app.mods = {};
app.anim = {};
app.page = {};
app.util = {};

var m = require('mithril'),
    domready = require('domready'),
    routes = require('./routes'),
    data = require('./data'),
    config = require('./config');

domready(function() {
    m.route.mode = 'pathname';
    m.route(document.body, '/', routes);
});
