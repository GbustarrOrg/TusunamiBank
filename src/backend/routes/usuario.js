import express from 'express';
const router = express.Router();

// importar el modelo nota
import usuarioSchema from '../models/usuario';



router.post('/addUsuario', async(req, res) => {
  const body = req.body;
  const usuario = usuarioSchema(body)
  console.log("addUsuario",usuario)
  await usuario.save().then((result) => {
    res.json(
      {"Respuesta" : true

      }

    ) 
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

router.get('/getNumeroUsuarios', async(req, res) => {
  await usuarioSchema.countDocuments().then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);


router.get('/verificarUsuarioPorSucursal/:sucursal/:rut', async (req, res) => {
  try {
    const sucursal = req.params.sucursal;
    const rutUsuarioActual = req.params.rut;

    const usuariosPorSucursal = await usuarioSchema.find({ _sucursal: sucursal });

    if (usuariosPorSucursal.length === 0) {
      return res.json({ "Respuesta": true});

    }

    const otroUsuarioConMismoRUT = usuariosPorSucursal.find(user => user.rut === rutUsuarioActual);

    if (otroUsuarioConMismoRUT) {
      return res.json({"Respuesta": false });
    }

    res.json({"Respuesta": true});

  } catch (error) {
    console.error(error);
    res.json({ error: 'Error interno del servidor' });
  }
});

router.get('/getUsuarioByID/:id', async(req, res) => {
  const id = req.params.id;  
 
  const filtro = {"_id":id}
      
  await usuarioSchema.findById(filtro)
  .then((result) => {
    res.json(result)
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

router.get('/confirmarUsuarioByRut/:rut', async(req, res) => { 
  const rut = req.params.rut;
  console.log('llego' + rut)
  const filtro = {"rut":rut}
  await usuarioSchema.findOne(filtro)
  .then((result) => {
    if (result === null) {
      res.json({
        "Respuesta": false
      })
    }
    else{
      res.json({
        "Respuesta": true
      })
    }
    
  });
});




router.post('/getAllUsuarios', async(req, res) => {

  await usuarioSchema.find()
  .then((result) => {
    res.json(result)
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);
router.put('/updateUsuarioByNombre', async(req, res) => {
  const id = req.body.id;  
  const nombre = req.body.nombre;
 
  
  const filtro = {"_id":id}

  const cambio = {"nombre":nombre}
  //{new: true} retorna el documento modificado
  await usuarioSchema.findOneAndUpdate(filtro, cambio, {new: true})
  .then((result) => {
    res.json(result)
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);
router.delete('/deleteUsuarioByID', async(req, res) => {
  const id = req.body.id;  
  
  const filtro = {"_id":id}
  await usuarioSchema.deleteOne(filtro)
  .then((result) => {
    res.json(result)
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

router.post('/logusuario', async(req, res) => {
  const rut = req.body.rut;
  const password = req.body.password;

  const response = await usuarioSchema.findOne({rut:rut})
  
  .then((result) => {
    console.log(result)
    if (result.password === password && password !== null) {
      console.log("Usuario Encontrado")
      res.json({
        "resplogin":true,
        "usuario":result
       
       })
      
    }
    else{
      console.log("Usuario Incorrecto")
      res.json({
      "resplogin":false,
      "usuario":{}

      })
    }    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);
module.exports = router;