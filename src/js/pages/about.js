var m = require('mithril');

app.page.about = {
    controller: function() {
        return {};
    },
    view: function(ctrl) {
        return [
            m('section', {
                class: 'content',
                config: app.config.pageIn
            }, [
                m('h1', ['ABOUT'])
            ])
        ];
    }
};