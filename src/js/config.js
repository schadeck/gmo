var m = require('mithril'),
    v = require('velocity-animate');

app.util.getStyle = function(el, prop) {
    return window.getComputedStyle(document.getElementById(el), null).getPropertyValue(prop);
};
app.util.id = function(idName) {
    return document.getElementById(idName);
};

app.util.class = function(className) {
    return document.getElementsByClassName(className);
};




// app.config.pageOut = function(el, init, context) {
//     if (!init) {
//         el.onclick = function(e) {
//             e.preventDefault();
//             app.anim.fadeOut(el);
//         };
//     }
// };

// app.config.pageIn = function(ctrl) {
//     return function(el, init, context) {
//         var route = m.route();
//         if (!init) {
//             // setMeta(ctrl.data().META_DESCRIPTION, ctrl.data().META_KEYWORDS, ctrl.data().PAGETITLE);
//             // ga('send', 'pageview', route);
//             app.anim.fadeIn(el);
//         }
//     };
// };


app.config.pageIn = function(element, init, context) {
    var f = app.util.class('content')
    if (!init) {
        v(f, {
            'padding-left': '0%'
        })
    }
}
app.config.pageOut = function(element, init, context) {
    var f = app.util.class('content')
    if (!init) {
        element.onclick = function(e) {
            e.preventDefault()
            v(f, {
                'padding-left': '50%'
            }, {
                complete: function() {
                    m.route(element.getAttribute("href"), true)
                }
            })
        }
    }
}


















// var m = require('mithril');

// var siteroot = 'http://woodsidevillage.ideaworkdev.com';

// app.data = function(path) {
//     return m.request({
//         dataType: 'jsonp',
//         url: siteroot + '/library/ajax/content/page/index.cfm?path=/' + path
//     });
// };


// app.data.nav = m.request({
//     dataType: 'jsonp',
//     url: siteroot + '/library/ajax/content/navigation/index.cfm?'
// });

//model
// var constants = [{
//     "BRAND": {
//         "NAME": "GMO",
//         "SOCIAL": [{
//             "site": "facebook",
//             "link": "https://www.facebook.com/jgdubai"
//         }, {
//             "site": "twitter",
//             "link": "https://twitter.com/JGDubai"
//         }, {
//             "site": "instagram",
//             "link": "https://instagram.com/JGDubai"
//         }, {
//             "site": "tripadvisor",
//             "link": "#"
//         }]
//     }
// }]
// m("ul", [
//     constants.map(function(c) {
//         var name = c.BRAND.NAME;
//         var social = c.BRAND.SOCIAL;
//         return m("li", social[0].site)
//     })
// ])
