const Etudiant = require("../models/etudiant")


exports.getEtudiants= async(req,res)=>{
    try {
        const etudiants= await Etudiant.find();
        return res.status(200).json(etudiants)
    } catch (error) {
        console.log('EChec',error)
        return res.status(500);
    }   
}

exports.getEtudiant=async(req,res)=>{
    try {
        const etudiant = await Etudiant.findById(req.params.id);
        if (!etudiant) {
            return res.status(404).json({ message: "Étudiant non trouvé" });
        }
        return res.status(200).json(etudiant);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'étudiant :', error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
}

exports.addEtudiant = async (req, res) => {
    try {
        const etudiant = new Etudiant(req.body);
        await etudiant.save();
        // Envoyer une réponse JSON avec un statut 201 (Created) et l'objet de l'étudiant créé
        return res.status(201).json({ message: 'Etudiant créé avec succès !', etudiant });
    } catch (error) {
        console.error('Erreur lors de la création de l\'étudiant :', error);
        // En cas d'erreur, renvoyer une réponse d'erreur avec un statut 500 (Internal Server Error)
        return res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'étudiant.' });
    }
};


exports.deleteEtudiant = async (req, res) => {
    try {
        const etudiant = await Etudiant.findById(req.params.id);
        if (!etudiant) {
            return res.status(404).json({ message: "Étudiant non trouvé" });
        }
        await etudiant.deleteOne();

        return res.status(200).json(etudiant);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
}


exports.updateStudent = async (req, res) => {
    try {
        const etudiant = await Etudiant.updateOne(req.body);
        return res.status(201).json({ message: 'Etudiant créé avec succès !', etudiant });
    } catch (error) {
        console.error('Erreur lors de la création de l\'étudiant :', error);
        return res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'étudiant.' });
    }
};