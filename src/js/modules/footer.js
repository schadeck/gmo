var m = require('mithril');

app.mods.footer = {
    controller: function() {
        return {};
    },
    view: function() {
        return [
            m('footer', {
                class: 'footer'
            }, [
                m('p', [
                    '\u00A9' + new Date().getFullYear()
                ])
            ])
        ];
    }
};
