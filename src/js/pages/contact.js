var m = require('mithril');

app.pages.contact = {
    controller: function() {
        return {};
    },
    view: function(ctrl) {
        return [
            m('section', {
                class: 'content'
            }, [
                m('h1', ['CONTACT'])
            ])
        ];
    }
};