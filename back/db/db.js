const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/GestEtudiants')
    .then(() => {
        console.log('Connexion à la base de données réussie !');
    })
    .catch((error) => {
        console.error('Erreur de connexion à la base de données :', error);
    });
