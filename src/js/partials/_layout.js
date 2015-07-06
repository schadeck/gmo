var m = require('mithril');

m("div", {
    class: "page"
}, [
    require('./_header'),
    m("div", {
        class: "content"
    }),
    require('./_footer')
])
