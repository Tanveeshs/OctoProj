const multer = require('multer');
const upload = multer({dest: 'uploads/'});

module.exports = (app)=> {
    const add_event = require('./add_event');
    const delete_event = require('./delete_event');
    const upcoming_events = require('./upcoming_events')
    const add_user = require('./add_user')
    const delete_user = require('./delete_user')
    const attend_user = require('./attend_user');
    app.post('/add_event',upload.single('image'),add_event)
    app.post('/delete_event',delete_event)
    app.post('/upcoming_events',upcoming_events)
    app.post('/add_user',add_user)
    app.post('/delete_user',delete_user)
    app.post('/',attend_user)
    
}