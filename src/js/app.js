var m = require('mithril'),
	domready = require('domready');

app = {};
// app.data = {};
app.mods = {};
app.pages = {};
app.comps = {};
var routes = require('./routes');

domready(function() {
	m.route.mode = 'pathname';
    m.route(document.body, '/', routes);
});