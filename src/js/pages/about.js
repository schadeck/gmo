app.pages.about = {
    controller: function() {
        return {}
    },
    view: function(ctrl) {
        return [
            m('section', {
                class: 'content'
            }, [
                m('h1', ['ABOUT'])
            ])
        ]
    }
}