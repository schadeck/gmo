var m = require('mithril');

wv = {};
wv.pages = {}
wv.pages.home = {
    controller: function() {

    },
    view: function(ctrl) {
        return [
            m("div", {
                class: "home"
            }, [
                m("h1", ["Home"]),
                m("a", {
                    href: "/about"
                }, ["About"])
            ])
        ]
    }
}
wv.pages.about = {
    controller: function() {

    },
    view: function(ctrl) {
        return [
            m("div", {
                class: "about"
            }, [
                m("h1", ["About"]),
                m("a", {
                    href: "/"
                }, ["Home"])
            ])
        ]
    }
}


wv.layout = {};


require('../partials/_layout');
require('../partials/_header');
require('../partials/_footer');


module.exports = {
    "/": wv.layout.main(wv.pages.home),
    "/about": wv.layout.main(wv.pages.about)
};
