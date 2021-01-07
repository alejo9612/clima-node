//reuerimos axios ya que es quien nos ayudará a obtener las APIS en nuestro proyecto
const axios = require('axios');

//creamos la primera función  getLatitudLog de manera asyncrona para que nos retorne la promesa, en la cual le declaramos que el dato a recibir sera (dir)
const getLatitudLog = async(dir) => {

        const encodedUlr = encodeURI(dir); //almacenamos el dato dir en una constante nueva para no enredarnos y asignar cada valor de manera que lo podamos entender facilmente

        const instance = axios.create({ //creamos una constante nueva en la cual declaramos el axios.crear, el cual  nos traera la primera consulta con su URL de la API que utulizaremos.
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
            headers: { 'X-RapidAPI-Key': '4f96a1932cmsh023fcc43086cb46p135795jsne4c3ddaef376' }
        });

        //creamos la nueva variale de respuesta con el await ya que viene dentro de la misma función  la mostramos
        const resp = await instance.get();
        if (resp.data.Results.legth === 0) {
            throw new Error(`No hay resultados para ${dir}`);
        }

        //En este punto lo que hacemos es ver como se llaman los datos que nos arroja la consula de la ciudad mediante la API por consola, con el finde de discriminar los datos que necesitamos, en este caso serían la longitud, latitud y el nombre de la ciudad, por lo que almacenamos esto en unas varibales, luego de recorrerlas con el data.
        const data = resp.data.Results[0];
        const direccion = data.name;
        const latitude = data.lat;
        const longitude = data.lon;

        return { //mostramos los datos que necesitamos mediante el return
            direccion,
            latitude,
            longitude
        }
    }
    //importante expotar la función ya que es necesario para poder llamarla desde el app.js que es el principal
module.exports = {
    getLatitudLog
}