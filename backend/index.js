import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express(); // la constante app tendr� ahora todo el funcionamiento del servidor
import mongoose  from './database.js'; // no se quiere todo el archivo sino la conexi�n
import router from './routes/employee.route.js'; 
/** * Se crea una REST API, es la manera de decirle al servidor que reciba y env�e datos  */
// Configuraciones
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev')); 
app.use(json()); // m�todo que ayuda a convertir el c�digo para que el servidor pueda entender lo que viene del cliente.
app.use(cors({origin: 'http://localhost:4200'})); // m�todo para comunicar con el cliente
// rutas de nuestro servidor
app.use('/api/employees', router);
// Iniciando el servidor
app.listen(app.get('port'), () => {// esta es una mejor manera de configurar el puerto
    console.log('server activo en el puerto', app.get('port'));
}); 
