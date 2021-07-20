let items = ['item1', 'item2']
const person = {
    name: 'bob',
}

// we can actually immediatly export the above codes as follow below:
module.exports.items = [ 'item1', 'item2' ]
// we can actually do i that way because module.eports is an object
// to which we can add properties
module.exports.singlePerson = person