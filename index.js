
const express = require('express');

const routers = require('./routes/route');

const db = require('./Db/dbconnection');

const cors = require('cors');

const app = express();




app.set("port", process.env.PORT || 3000);



app.use(express.json());

app.use(cors('*'));

app.use('/api/v1', routers);

const port = app.get("port");

app.listen(port,()=>{
    console.log("server available at:", port );
})


