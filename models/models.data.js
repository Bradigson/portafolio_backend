const mongoose = require('mongoose');

const portafolioSchema = mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    about:{
        type:String,
        require:true
    },
    skills:[
        {
            titleSkills:String,
            urlicon:String,

        }
    ],
    services:[
        {
            title:String,
            descriptionService:String,
            img : String
        }
    ],
    proyects:[
        {
            titleProyect:String,
            descriptionProyect:String,
            websideurl:String,
            repositoryurl:String
        }
    ],
    hobbies:[
        {
            titleHobbie:String,
            descriptionHobie:String,
            icon:String,
        }
    ]
  
    

}, {timestamps : true});
                                               //poner la colecion siempre en plural
const  portafolioSchemaModels = mongoose.model("portafolios", portafolioSchema);
module.exports = portafolioSchemaModels;