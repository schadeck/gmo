var m = require('mithril');
module.exports = app.pages.home = {
    controller: function() {
        return {};
    },
    view: function(ctrl) {
        return [
            m('section', {
                class: 'content'
            }, [
                m('h1', ['HOME'])
            ])
        ];
    }
};
