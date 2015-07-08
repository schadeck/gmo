var layout = require('./modules/layout'),
	home = require('./pages/home'),
	about = require('./pages/about'),
	contact = require('./pages/contact');

var am = app.mods;
var ap = app.pages;
module.exports = {
    '/': am.layout(ap.home),
    '/about': am.layout(ap.about),
    '/contact': am.layout(ap.contact)
};