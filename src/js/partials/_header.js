
var m = require('mithril');

//model
var people = [{
    id: 1,
    name: "John"
}, {
    id: 2,
    name: "Mary"
}, {
    id: 3,
    name: "Bob"
}]


return m("ul", [
    people.map(function(person) {
        return m("li", person.name)
    })
])
