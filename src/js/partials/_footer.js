var m = require('mithril');

m("footer", [
    m("div", {
        class: "container"
    }, [
        "Mithril-Boilerplate, copyright (c) 2014 Vu Nguyen - Released under ",
        m("a", {
            href: "https://github.com/ng-vu/mithril-boilerplate/blob/master/LICENSE"
        }, ["MIT License"])
    ])
])
