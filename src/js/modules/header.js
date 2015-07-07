app.mods.header = {
    controller: function() {
        return {}
    },
    view: function(ctrl) {
        return [
            m('header', {
                class: 'header'
            }, ['Header'])
        ]
    }
}