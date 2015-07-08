var m = require('mithril');

app.pages.about = {
    controller: function() {
        return {};
    },
    view: function() {
        return [
            m('section', {
                class: 'content'
            }, [
                m('h1', ['ABOUT']),
                m('p', [new Date().getFullYear()])
            ])
        ];
    }
};