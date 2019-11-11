const express     = require('express');
const app         = express();
const router      = express.Router();
const routes      = require('./routes');
const bodyParser  = require('body-parser');

routes(router);

app.use(bodyParser.json({limit: '50mb'}));
app.use('/', router);    

app.listen(3001);