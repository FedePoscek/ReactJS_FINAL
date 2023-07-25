# Tienda de Electrónica

Este proyecto es una app que simula ser una tienda en línea de artículos de electrónica, desarrollada con React JS y Firebase. Con ella podes ver una lista de productos disponibles, agregar productos al carrito de compras, chequearlo en todo momento y realizar una orden de compra.

## Características

- Ver una lista de productos disponibles.
- Agregar productos al carrito de compras.
- Ver el carrito de compras con los productos seleccionados.
- Realizar una orden de compra.

## Tecnologías utilizadas

- Vite
- React JS
- React Router
- Firebase

## Instalación

Para obtener una copia de la aplicación en tu máquina local, sigue estos pasos:

1. Clona el repositorio de GitHub en tu máquina:
 1. git clone https://github.com/tu-usuario/tienda-electronica.git
2. Ingresa al directorio del proyecto:
 2. Ej: cd tienda-electronica
3. Instala las dependencias del proyecto:
 1. npm install
4. Crea un proyecto en Firebase y configura la base de datos:
 1. Ve a https://firebase.google.com y crea un proyecto nuevo.
 2. Copia la configuración de Firebase (clave del SDK) para tu proyecto.
5. Configura las variables de entorno:
 1. Crea un archivo .env en la raíz del proyecto.
 2. Copia la configuración de Firebase en el archivo .env de la siguiente manera:
6. Inicia la aplicación:
 1. npm run dev
7. Abre tu navegador web e ingresa a la dirección dada:
 1. Ej.: http://localhost:5173 para ver la aplicación en funcionamiento.


## Uso de la base de datos de Firebase

Este proyecto utiliza Firebase como base de datos para almacenar los productos y la información de las órdenes de compra. Para utilizar la base de datos de Firebase en tu propio proyecto, sigue estos pasos:

Crea un proyecto en Firebase siguiendo los pasos anteriores.
En el panel de control de Firebase, ve a la sección "Database" y habilita la base de datos Firestore.
Crea una colección llamada "productos" y agrega los documentos correspondientes a cada producto. Cada documento debe contener la información del producto, como nombre, descripción, precio, etc.
Configura las reglas de seguridad de la base de datos de acuerdo a tus necesidades.
Con estos pasos, tendrás la base de datos de Firebase configurada para tu proyecto de la tienda de electrónica.


## Licencia

El proyecto está bajo la Licencia MIT. Consulta el archivo LicenseQueNoExiste para obtener más información.