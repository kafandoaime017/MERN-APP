const express=require('express');
const app=express();
const DB=require('./db/db');
const PORT = 4000;
const routes=require('./routes/etudiantsRoutes');
const cors=require('cors');
app.use(cors())
app.use(express.json())
app.use('/',routes);

app.listen(PORT,()=>{
    console.log('Le serveur est lancé')
})