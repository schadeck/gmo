var m = require('mithril');

app.page.contact = {
    controller: function() {
        return {};
    },
    view: function(ctrl) {
        return [
            m('section', {
                class: 'content',
                config: app.config.pageIn
            }, [
                m('h1', ['CONTACT'])
            ])
        ];
    }
};