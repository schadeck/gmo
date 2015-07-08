var m = require('mithril');

app.mods.footer = {
    controller: function() {
        return {};
    },
    view: function() {
        return [
            m('footer', {
                class: 'footer'
            }, ['Footer'])
        ];
    }
};
