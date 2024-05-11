const mongoose=require('mongoose');

const etudiantSchema = new mongoose.Schema({
    nom:String,
    prenom:String,
    email:String
})

const Etudiant=mongoose.model('Etudiant',etudiantSchema);

module.exports=Etudiant;