var m = require('mithril');
var header = require('../partials/_header');

module.exports = {
    // controller: function() {
    //     var ctrl = this;
    // },

    view: function() {
        return [
            m('.container', [
                m('nav', [
                    m('a', {
                        href: '/',
                        config: m.route
                    }, 'home'),
                    m('a', {
                        href: '/about',
                        config: m.route
                    }, 'about')
                ]),
                m('h1', 'HOME'),
                m('p', 'Welcome to the home page.'),
                header
            ])
        ];
    }
};
