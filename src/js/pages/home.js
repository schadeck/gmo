var m = require('mithril');

app.page.home = {
    controller: function() {
        return {};
    },
    view: function(ctrl) {
        return [
            m('section', {
                class: 'content',
                config: app.config.pageIn
            }, [
                m('h1', ['HOME'])
            ])
        ];
    }
};
