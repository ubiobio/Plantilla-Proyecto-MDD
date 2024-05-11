> [!IMPORTANT]
> Recuerden que deben cambiar el contenido del README.md por su número de grupo, explicación breve del tema asignado y los nombres de los integrantes del grupo.

# Backend Plantilla Metodología de Desarrollo 🧑‍🚀

### Instrucciones para crear el repositorio 📝

- Cuando creen un nuevo repositorio, les recomiendo ir al repositorio en donde se encuentra la [plantilla del proyecto](https://github.com/Didudocl/Plantilla-Proyecto-MDD).
- Clickean el botón `Use this template` y luego `Create a new repository`.
- Le añaden un **nombre** al repositorio.
- Le añaden una **descripción** del proyecto.
- Mantengan el **repositorio público** y le dan a `Create repository`, esto les generará el repositorio en base a la plantilla.

### Pasos a seguir 📝

1. Una vez creado el repositorio, ir al boton verde `<> Code` y copien la URL proporcionada.
2. Vayan al **escritorio** y crean una carpeta.
3. Hagan **click derecho** sobre la carpeta y abran **Git Bash**.
4. En la **Git Bash**, escriban: `git clone <URL> .`
5. Después de escribir el comando para clonarlo, escribir en la **Git Bash**: `code .`
6. Empezar a codear!


### Instrucciones de uso 📝

Una vez clonado el repositorio y con el **Visual Studio Code** abierto, sigan los siguientes pasos:

1. Abrir una nueva terminal en **Visual Studio Code.**
2. Vayan al directorio backend con: `cd backend`
3. Ejecuten `npm i` o `npm install` para instalar las dependecias
4. Agreguen el archivo **.env** a la carpeta **config** junto con su configuración correspondiente.
5. Una vez agregado el archivo **.env**, pueden ejecutar el comando: `npm run dev` o `npm start` para correr el backend.
6. Recuerden que pueden utilizar **Postman**, **Insomnia** o **Thunder Client** para realizar las peticiones a la API.


### Estructura del proyecto 📚

```bash
├── backend
│   ├── node_modules
│   ├── src
│   │   ├── config
│   │   │   ├── .env.example
│   │   │   ├── configDB.js
│   │   │   ├── configEnv.js
│   │   │   └── initSetup.js
│   │   ├── constants
│   │   │   └── roles.constants.js
│   │   ├── controllers
│   │   │   ├── auth.controller.js
│   │   │   └── user.controller.js
│   │   ├── middlewares
│   │   │   ├── auth.middleware.js
│   │   ├── models
│   │   │   ├── role.model.js
│   │   │   └── user.model.js
│   │   ├── routes
│   │   │   ├── auth.routes.js
│   │   │   ├── index.routes.js
│   │   │   └── user.routes.js
│   │   └── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
└── └── README.md
```

## Dependencias utilizadas 🛠️

- Express: Framework de aplicación web para Node.js.
- Mongoose: Biblioteca de modelado de objetos MongoDB para Node.js.
- Dotenv: Módulo que carga variables de entorno desde un archivo .env en process.env.
- Cors: Middleware de Express para habilitar el control de acceso HTTP.
- Morgan: Middleware de registro de solicitudes HTTP para Node.js.
- Nodemon: Herramienta que ayuda a desarrollar aplicaciones basadas en Node.js al reiniciar automáticamente la aplicación cuando se detectan cambios en el directorio.
- Bcryptjs: Biblioteca para el hash de contraseñas.
- Express-session: Middleware de Express para el manejo de sesiones.