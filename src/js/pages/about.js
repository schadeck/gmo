var m = require('mithril');
module.exports = app.pages.about = {
    controller: function() {
        return {};
    },
    view: function(ctrl) {
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
