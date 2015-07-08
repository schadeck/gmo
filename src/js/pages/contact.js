var m = require('mithril');

app.pages.contact = {
    controller: function() {
        return {};
    },
    view: function() {
        return [
            m('section', {
                class: 'content'
            }, [
                m('h1', ['CONTACT'])
            ])
        ];
    }
};