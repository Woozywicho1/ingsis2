const express = require('express');
const app = express();
const port = 3000;

/*  app.get('/get', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/post', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/put', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/delete', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});    */

app.get('/getgeneros', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/postgeneros', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putgeneros', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deletegeneros', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.get('/getsubgeneros', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/postsubgeneros', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putsubgeneros', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deletesubgeneros', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.get('/getplataforma', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/postplataforma', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putplataforma', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deleteplataforma', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.get('/getclasificacion', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/postclasificacion', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putclasificacion', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deleteclasificacion', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.get('/getvideojuego', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/postvideojuego', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putvideojuego', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deletecideojuego', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.get('/getventa', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/postventa', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putventa', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deleteventa', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.get('/getorden', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/postorden', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putorden', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deleteorden', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.get('/getdesarrollador', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/postdesarrollador', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putdesarrollador', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deletedesarrollador', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.get('/getnacionalidad', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/postnacionalidad', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putnacionalidad', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deletenacionalidad', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.get('/getnacioncliente', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
   
app.post('/postcliente', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putcliente', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deletecliente', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.get('/getregistro', (req, res) => {
return res.send('Se ha consultado de la base de datos');
});
    
app.post('/postregistro', (req, res) => {
return res.send('Se ha agregado a la base de datos');
});

app.put('/putregistro', (req, res) => {
return res.send('Se ha actualizado/modificado en la base de datos');
});

app.delete('/deleteregistro', (req, res) => {
return res.send('Se ha eliminado de la base de datos');
});

app.listen(port,() => {
    console.log(`Example app at http://localhost:${port}`)
})