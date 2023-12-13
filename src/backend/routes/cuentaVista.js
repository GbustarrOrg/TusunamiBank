import express from 'express';
const router = express.Router();

// importar el modelo nota
import cuentaVistaSchema from '../models/cuentaVista';


router.post('/addCuentaVista', async(req, res) => { 
    const body = req.body;
    const cuentaVista = cuentaVistaSchema(body)
    console.log("addCuentaVista",cuentaVista)
    await cuentaVista.save().then((result) => {
        res.json(
        {"Respuesta" : true
    
        }
    
        ) 
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    }); 
});

router.get('/getNumeroCuentaVista', async(req, res) => {
    await cuentaVistaSchema.countDocuments().then((result) => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    }); 
});

module.exports = router;