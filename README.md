# LogisticApp

Una aplicacíon movíl de logistica para gestionar envíos hecha con React Native.

## Stack

El **Stack** seleccionado para este proyecto es MERN.

La idea es realizar una aplicación movíl que permita gestionar el estado de envíos de "X" producto.

Inicialmente se pensó en manejar un repositorio independiente para el backend sin embargo, luego se pensó que era mejor manejarlo por medio de Docker, creando un archivo docker-compose que permita la ejecución de una api rest hecha con node.

## Cosas por finalizar:

- [x] Integración de Mongo con el api rest en Node (Back).

- [x] Manejo del login (App).

- [x] Crear los endpoins necesarios para el manejo de la data que provea el api (Back).

## Necesario

Debes crear el archivo .env y colocar las siguientes variables

```
API=http://localhost:9876
MAP_API_KEY=YourApiKey

```

## Aspectos que podría mejorar la aplicación

Usar una solución en la nube para la rapida integración de los servicios en un mvp y luego manejarlo de forma mas especifica.

<img src="./public/screenshot-1.png" width="100%">

**La aplicación corre optimamente en ios y android**

para el backend ver: https://github.com/joshdev15/LogisticBack

en la rama joshua
