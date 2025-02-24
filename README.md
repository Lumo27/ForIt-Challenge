# React App con Vite: Gestión de Usuarios

Este proyecto es una aplicación web construida con React y Vite. Permite visualizar una lista de usuarios, realizar búsquedas por nombre, correo electrónico o ciudad, y agregar nuevos usuarios a la lista. (Los datos en esta version aun no persisten.)

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:
- **Vite**: Puedes descargarlo desde [aquí]([(https://vite.dev/)]).
- **Node.js**: Puedes descargarlo desde [aquí](https://nodejs.org/).

## Pasos para Configurar y Probar la Aplicación

1. **Clonar el Repositorio**

   Clona el repositorio en tu máquina utilizando Git:

   ```bash
   git clone https://github.com/Lumo27/ForIt-Challenge.git
   ```

2. **Instalar Dependencias**

   Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   cd nombre-del-repositorio
   npm install
   ```

3. **Ejecutar la Aplicación**

   Después de que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar la aplicación en tu entorno local:

   ```bash
   npm run dev
   ```

   Esto abrirá la aplicación en tu navegador predeterminado, generalmente en `http://localhost:3000`.

## Características

- **Visualización de Usuarios**: Muestra una lista de usuarios que se obtiene desde una API externa (https://jsonplaceholder.typicode.com/users).
- **Búsqueda**: Filtra usuarios por nombre, correo electrónico o ciudad.
- **Formulario para Agregar Usuarios**: Permite agregar nuevos usuarios con su nombre, usuario, correo electrónico, ciudad, teléfono y nombre de la empresa.

## Estructura del Proyecto

- **App.jsx**: El componente principal de la aplicación donde se manejan la visualización de usuarios, búsqueda y el formulario para agregar usuarios.
- **App.css**: Los estilos CSS que dan formato a la interfaz de usuario, incluyendo las tarjetas para mostrar a los usuarios y el formulario para agregar nuevos usuarios.
