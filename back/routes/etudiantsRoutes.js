const express = require('express');
const router = express.Router();

const etudiantsController = require('../controllers/etudiantController');

// Routes API REST FULL
router.get('/etudiants', etudiantsController.getEtudiants);
router.get('/etudiant/:id',etudiantsController.getEtudiant);
router.post('/etudiants',etudiantsController.addEtudiant);
router.delete('/etudiant/:id',etudiantsController.deleteEtudiant);




module.exports = router;
