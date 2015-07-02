var m = require('mithril'),
    home = require('./pages/home.js'),
    about = require('./pages/about.js');

m.route.mode = 'pathname';

m.route(document.body, "/", {
    "/": home,
    "/about": about
});