var m = require('mithril');

module.exports = {
    controller: function() {
        var ctrl = this;
    },

    view: function(ctrl) {
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
                m('p', 'Welcome to the home page.')
            ])
        ];
    }
};
