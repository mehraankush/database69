const PrismaClient = require('@prisma/client').PrismaClient

const prisma = new PrismaClient();

module.exports.authorClient = async(req,res) =>{
   try{
      console.log(req.body);
       const result = await prisma.Credential.create({
        data:req.body
       })

       res.status(200).json({message:result});

   }catch(err){
    console.log('ERROR ',err);
    res.status(404).json({message:"Error"})
   }
}


module.exports.getAllIds = async(req,res) =>{
   try{
       const result = await prisma.Credential.findMany();
       res.status(200).json({message:result})

   }catch(err){
    console.log('ERROR ',err);
    res.status(404).json({message:"Error"})
   }
}