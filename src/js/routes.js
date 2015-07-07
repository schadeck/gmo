var layout = require('./modules/layout'),
	home = require('./pages/home'),
	about = require('./pages/about'),
	about = require('./pages/contact');


am = app.mods;
ap = app.pages;

module.exports = {
    '/': am.layout(ap.home),
    '/about': am.layout(ap.about),
    '/contact': am.layout(ap.contact)
};