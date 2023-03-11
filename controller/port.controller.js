const portafolioSchema = require('../models/models.data');

class controller{

    //read
    async readPortafolio(req, res){
        try{
            const post = await portafolioSchema.find();
            res.json(post);
    
        }catch(err){
            res.status(500).send({
                status:400,
                errorMessage : err
            });
        }
    }   




    //create
    async insertPortafolioData(req, res){
       
        const _response = await portafolioSchema(req.body);
        _response
        .save()
        .then((data)=>{
            res.json({
                state:200,
                message:"Portafolio creado"

            })
            console.log(data)

        } )
        .catch((err)=> res.json({status:400, message: err}));

    }



    //update
    async updateportafolio(req, res){
        const {id} = req.params;
        const {name, about, skills:[{titleSkills, urlicon}], services:[{titleService, descriptionService, urlImg}],proyects:[{titleProyect, descriptionProyect, websideurl, repositoryurl}], hobbies:[{titleHobbie, descriptionHobie, icon}]} = req.body;

        try{
            const post = await portafolioSchema .findByIdAndUpdate(id, {name, about, skills:[{titleSkills, urlicon}], services:[{titleService, descriptionService, urlImg}],proyects:[{titleProyect, descriptionProyect, websideurl, repositoryurl}], hobbies:[{titleHobbie, descriptionHobie, icon}]}); 
            res.json({
                status:200,
                meessage : "Portafolio Updated"
            })
        }catch(err){
            res.status(500).send({
                status:400,
                errorMessage : err
            });
            console.log(err)
        }
    }
}


module.exports = new controller;