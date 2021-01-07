//Requerimos las carpetas que creamos con los archivos de JS que llamamos en cada una de ellas ya que es necesario para por rodar la aplicación
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//requerimos el método yargs para poder abreviar la consulta que queremos hacer mediante la consola, la cual con tan solo colocar -d = 'Direción de la ciudad para obtener el clima'
const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direción de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*
Ensayamos de manera individal cada una de las funciones que creamos en la carpeta de lugar, así nos damos cuenta si funcionan o on para poder unificarlas luego de manera correcta
lugar.getLatitudLog(argv.direccion)
    .then(console.log);
clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log);
*/

//Creamo una nueva función la cual nos ayuda a unificar las 2 que creamos anteriormente, mediante el async que nos regresa promesas por ddefecto, cabe aclarar que en este caso es necesario usar tambien el método try y catch
const getInfo = async(direccion) => {

        try {
            const cordenada = await lugar.getLatitudLog(direccion); //cremaos la constante que almacena la función lugar
            const temperatura = await clima.getClima(cordenada.latitude, cordenada.longitude); //cremaos la constante que almacena la función clima
            return `El clima de la ciudad de ${cordenada.direccion} es de ${temperatura}.`;
            //recorremos las funcioones con los nuevas costantes ya declaradas
        } catch (error) {
            return `No es posible determinar el clima de la ciudad de ${direccion}`;
        }
    }
    //llamamos la función principal que nos arrojará los datos
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);