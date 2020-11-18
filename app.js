const express       = require('express');
const moment        = require('moment');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const configDB      = require('./config/database');
const app           = express();

/*DATABASE CONFIG*/
mongoose.connect(
    configDB.url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('MongoDB Connected');
        }
    }
);

mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);
/*DATABASE CONFIG*/


/*EXPRESS APP CONFIG*/
app.use(express.json());
app.use(bodyParser.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
/*EXPRESS APP JSON CONFIG*/

/*CORS CONFIG */
app.use(
    cors({
        origin: '*',
    })
);
/*CORS CONFIG */

/*ROUTES*/
require('./routes/index')(app);
/*ROUTES*/


app.listen(3000,function (err){
    if(err){
        console.log(err)
    }else {
        console.log("RUNNING ON 3000")
    }
})