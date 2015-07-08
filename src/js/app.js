var m = require('mithril'),
    domready = require('domready');

app = {};
// app.data = {};
app.mods = {};
app.pages = {};
app.comps = {};
routes = require('./routes');

m.route.mode = 'pathname';
domready(function() {
    m.route(document.body, '/', routes);
});
