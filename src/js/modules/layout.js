var m = require('mithril');
var header = require('./header');
var footer = require('./footer');

module.exports = app.mods.layout = function(subModule) {
    return {
        controller: function() {
            return {
                subCtrl: new subModule.controller(),
                headCtrl: new app.mods.header.controller(),
                footCtrl: new app.mods.footer.controller()
            };
        },
        view: function(ctrl) {
            return [
                // Header
                app.mods.header.view(ctrl.headCtrl),
                // Content
                m('section', {
                    class: 'content'
                }, [subModule.view(ctrl.subCtrl)]),
                //Footer
                app.mods.footer.view(ctrl.footCtrl)
            ];
        }
    };
};