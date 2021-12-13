const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const path = require('path');

const utilityService = require('./../properties/envProperties');


app.set('port', process.env.PORT || config.get('PORT_HTTP'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(function(error, req, res, next) {
    if (error instanceof SyntaxError) {
        return res.sendStatus(400);
    }
    next();
});

if ('development' == app.get('env')) {
    app.use(errorhandler());
}

console.log("App Environment Running at: ", app.get('env'));