# Descripción del Proyecto

Este proyecto es una aplicación web construida con React que implementa un patrón MVC (Modelo-Vista-Controlador). La aplicación se conecta a una API para gestionar una base de datos de productos, permitiendo a los usuarios visualizar, agregar y eliminar productos de manera eficiente.

## Instalación y Ejecución

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta la aplicación:
   ```bash
   npm start
   ```

   La aplicación se abrirá en [http://localhost:3000](http://localhost:3000).

## Endpoints Principales de la API

### 1. Obtener todos los productos
- **Método:** GET
- **Endpoint:** `/api/productos`
- **Ejemplo de uso:**
  ```bash
  curl -X GET http://localhost:3000/api/productos
  ```

### 2. Agregar un nuevo producto
- **Método:** POST
- **Endpoint:** `/api/productos`
- **Cuerpo de la solicitud:**
  ```json
  {
    "nombre": "Nombre del producto",
    "precio": 100,
    "descripcion": "Descripción del producto"
  }
  ```
- **Ejemplo de uso:**
  ```bash
  curl -X POST http://localhost:3000/api/productos -H "Content-Type: application/json" -d '{"nombre": "Producto 1", "precio": 100, "descripcion": "Descripción del producto 1"}'
  ```

### 3. Eliminar un producto
- **Método:** DELETE
- **Endpoint:** `/api/productos/:id`
- **Ejemplo de uso:**
  ```bash
  curl -X DELETE http://localhost:3000/api/productos/1
  ```
