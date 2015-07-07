var m = require('mithril');

wv.layout.main = function() {
    return {
        controller: function() {
            return {
                // subCtrl: new subModule.controller(),
                // navCtrl: new wv.layout.nav.controller(),
                // footCtrl: new wv.layout.footer.controller()

            };
        },
        view: function(ctrl) {
            return [
                wv.layout.nav.view(ctrl.navCtrl),
                m('div', {
                    class: 'content',
                }, [
                    wv.pages.view
                ]),
                wv.layout.footer.view(ctrl.footCtrl)
            ];
        }
    }
}