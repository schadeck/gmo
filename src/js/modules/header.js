var m = require('mithril');
var nav = {
    "links": [{
        "order": 1,
        "path": "\/",
        "title": "Home"
    }, {
        "order": 2,
        "path": "\/about",
        "title": "About"
    }, {
        "order": 3,
        "path": "\/contact",
        "title": "Contact"
    }]
};


app.mods.header = {
    controller: function() {
        return {
            visible: m.prop(false),
            isActive: function(route) {
                var active = (route === '/' + m.route().split('/')[1]);
                return active;
            }
        };
    },
    view: function(ctrl) {
        return [
            m('header', {
                class: 'header'
            }, [
                m('nav', [
                    m('ul', {
                            class: 'left no-pm'
                        },
                        nav.links.map(function(link) {
                            return m('li', {
                                    class: 'nav-link'
                                },
                                m('a', {
                                    href: link.path,
                                    class: ctrl.isActive(link.path) ? 'active' : ''
                                }, link.title)
                            );
                        })
                    )

                ])
            ])
        ];
    }
};