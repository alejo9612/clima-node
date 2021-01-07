//requerimos el axios al igual que en lugar.js para pdoer trabajar con la APIS
const axios = require('axios');

//creamos la nueva función asyncrona la cual nos ayudará a ver el clima de la ciudad, dependiendo de sus datos, tales comola longitud  y latitud
const getClima = async(latitude, longitude) => {

        //creamos la constante con la respuesta de await axios de la api
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=32f843d833c38373032f825c4a92418a`);

        return resp.data.main.temp;
    }
    //exportamos el dato para poder utilizarlos de app.js que es el principal
module.exports = {
    getClima
}