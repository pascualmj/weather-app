Proyecto realizado con [Create React App](https://github.com/facebook/create-react-app).

## Indicaciones

Para correr la aplicación cree un archivo `.env.local` con las variables de entorno que se detallan en `.env.local.example`. Es necesaria una API Key del servicio de [Open Weather Map](https://openweathermap.org/).

## Aclaraciones

Se utilizó el nuevo servicio de One Call API de Open Weather para minimizar la cantidad de peticiones HTTP a realizar. Para más información sobre este servicio consulte la documentación [aquí](https://openweathermap.org/api/one-call-api).

## Scripts Disponibles

### `npm start`

Corre la aplicación en modo desarrollo. Abra [http://localhost:3000/](http://localhost:3000) para visitarla.

### `npm run build`

Construye la aplicación para producción dentro de la carpeta `build`.
