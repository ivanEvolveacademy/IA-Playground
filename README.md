# IA-Playground

## Descripción

Este proyecto es una API básica que simula la gestión de usuarios y productos utilizando archivos JSON como base de datos. Está diseñado para ser un entorno de prueba y aprendizaje para trabajar con APIs RESTful en Node.js.

## Características

- Gestión de usuarios y productos.
- Almacenamiento de datos en archivos JSON (`users.json` y `products.json`).
- Endpoints para obtener y agregar usuarios y productos.
- Configuración sencilla con `dotenv` para variables de entorno.

## Requisitos

- Node.js (versión 18 o superior).
- npm o yarn para gestionar dependencias.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd IA-Playground
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y define el puerto y otras variables necesarias:
   ```
   PORT=3000
   ```

## Uso

1. Inicia el servidor:
   ```bash
   npm start
   ```

2. Accede a la API en `http://localhost:3000`.

## Endpoints

### Usuarios

- **GET** `/api/users`: Obtiene la lista de usuarios.
- **POST** `/api/users`: Agrega un nuevo usuario. El cuerpo de la solicitud debe incluir `name`, `email` y `age`.

### Productos

- **GET** `/api/products`: Obtiene la lista de productos.
- **POST** `/api/products`: Agrega un nuevo producto. El cuerpo de la solicitud debe incluir `name`, `price` y `stock`.

## Estructura del Proyecto

```
IA-Playground/
├── controllers/
│   ├── productController.js
│   ├── userController.js
├── models/
│   ├── products.json
│   ├── users.json
├── routes/
│   ├── productRoutes.js
│   ├── userRoutes.js
├── api.js
├── .env
├── package.json
├── README.md
```

## Contribuciones

Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.
