var m = require('mithril'),
	domready = require('domready');

app = {};
app.data = {};
app.mods = {};
app.pages = {};
app.comps = {};

domready(function() {
	var routes = require('./routes');
	m.route.mode = 'pathname';
    m.route(document.body, '/', routes);
});