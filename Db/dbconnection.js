const mongoose = require('mongoose');

require('dotenv').config({path:'./.env'});
                                                                                            //here we put the name of the database, between (/) and (?);
//const connectionstring = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@portafolio.dv5bc9f.mongodb.net/MyPortafolio?retryWrites=true&w=majority`;
// const conexion = mongoose.connect(connectionstring, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=> console.log('conected')).catch((err)=> console.log(err));

const connectionstring = `${process.env.DB_URL}`;
const conection = mongoose.connect(connectionstring, {
    useNewUrlParser: true,
    useUnifiedTopology: true
     })   
.then(() => console.log("Database connected!"))
.catch(err => console.log(err + `${process.env.DB_USERNAME}`));


module.exports = conection;