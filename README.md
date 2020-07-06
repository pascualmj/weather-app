Proyecto realizado con [Create React App](https://github.com/facebook/create-react-app).

## Indicaciones

Existen 2 ramas con objetivos diferentes:

- **use-openweather-api**: en esta rama, la aplicación realiza las peticiones directamente al servicio de [IP-API](https://ip-api.com/) y [Open Weather Map](https://openweathermap.org/) respectivamente. Para correr esta aplicación cree un archivo `.env.local` con las variables de entorno que se detallan en `.env.local.example`. Es necesaria una API Key del servicio de [Open Weather Map](https://openweathermap.org/).

- **use-custom-api**: en esta rama se realizan las peticiones al servidor propio desarrollado en NodeJS. Para descargarlo visite [este repositorio](https://github.com/pascualmj/weather-app-api) y siga las indicaciones ahí detalladas.

## Aclaraciones

En la rama **use-openweather-api** se utilizó el nuevo servicio de One Call API de Open Weather para reducir la cantidad de peticiones HTTP a realizar. Para más información sobre este servicio consulte la documentación [aquí](https://openweathermap.org/api/one-call-api).

## Scripts Disponibles

### `npm start`

Corre la aplicación en modo desarrollo. Abra [http://localhost:3000/](http://localhost:3000) para visitarla.

### `npm run build`

Construye la aplicación para producción dentro de la carpeta `build`.
