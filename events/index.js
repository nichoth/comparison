var Bus = require('@nichoth/events')

var bus = Bus({ memo: true })

bus.on('foo', ev => {
    console.log('foo', ev)
})

bus.emit('foo', 'test')
