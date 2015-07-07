m = require('mithril');
domready = require('domready');

app = {};
app.dat = {};
app.mods = {};
app.pages = {};
app.comps = {};
routes = require('./routes');

m.route.mode = 'pathname';
domready(function() {
    m.route(document.body, '/', routes);
});
