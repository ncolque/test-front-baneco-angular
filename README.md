# Frontend Angular - Sistema de Gestión de Tareas

Este proyecto es un frontend desarrollado con Angular 20 y Angular Material, diseñado para consumir la API REST de tareas.
Permite gestionar tareas mediante un panel administrativo, con funcionalidades de crear, listar, editar y eliminar tareas.

## Características principales

✅ **Componentización:** Uso de módulos y componentes reutilizables.

✅ **Angular Material:** Interfaz moderna con Material 3, incluyendo toolbar, sidenav, botones e inputs.

✅ **Reactive Forms:** Validaciones de formularios con FormBuilder y Validators.

✅ **Servicios HTTP:** Comunicación con backend mediante HttpClient y manejo de errores con subscribe y confirm dialogs.

✅ **Arquitectura modular:** Separación de modules, shared, core y layouts.

✅ **Confirm Dialog:** Uso de componentes compartidos para confirmaciones de acciones críticas (eliminar tareas).

## Funcionalidades del sistema

✅ **Crear tarea:** Formulario con título, descripción y estado (Pendiente, En Progreso, Completada).

✅ **Editar tarea:** Formulario prellenado con los datos existentes de la tarea.

✅ **Listar tareas:** Tabla con todas las tareas registradas, mostrando ID, título, descripción, estado y acciones.

✅ **Eliminar tarea:** Confirmación antes de eliminar y actualización de la tabla.

✅ **Validaciones de formulario:** Campos obligatorios, selección de estados válidos.

## Servicios principales

- TareaService: Maneja todas las operaciones CRUD de tareas y comunicación con el backend.
- ConfirmDialogComponent: Componente compartido para mostrar cuadros de confirmación al eliminar tareas.
- HeaderComponent: Barra superior con menú y botones de navegación.
- NavComponent: Navegación lateral con íconos y rutas a los módulos.

## Endpoints consumidos por el frontend

Todos los servicios consumen la API REST de Tareas:

Método		Endpoint		Descripción
- GET		/api/tarea		Listar todas las tareas
- GET		/api/tarea/{id}	Obtener tarea por ID
- POST		/api/tarea		Crear nueva tarea
- PUT		/api/tarea/{id}	Actualizar tarea existente
- DELETE	/api/tarea/{id}	Eliminar tarea

## Formularios y validaciones

1. Create/Edit Tarea

- Campos obligatorios: Titulo, Descripcion, Estado.
- Estado permitido: "pendiente", "en-progreso", "completada".
- Botones: Guardar (deshabilitado si el formulario es inválido) y Cancelar.

2. Confirmación de eliminación

- Ventana modal que solicita confirmar antes de eliminar una tarea.

## Estilos y temas

- Angular Material con tema Material 3.
- Toolbar, sidenav y botones personalizados mediante SCSS.
- Iconos (mat-icon) y textos configurables por CSS según el componente.

## Stack Tecnológico

- Framework: Angular 20
- Framework Estilos : Angular Material 3
- Validaciones: Propias

## Instalación

Instrucciones para Ejecutar el Proyecto Localmente
Prerequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes programas en tu máquina:

- Node.js: Necesario para instalar y ejecutar las dependencias de Angular. Puedes descargarlo desde aquí.
- Angular CLI: El CLI de Angular es necesario para compilar y ejecutar el proyecto. Si aún no lo tienes, puedes instalarlo ejecutando:

```bash
npm install -g @angular/cli
```

Clonar el repositorio:

```bash
git clone https://github.com/ncolque/test-front-baneco-angular.git
cd test-front-baneco-angular
```

Instalar Dependencias

```bash
npm install
```

Ejecutar el Proyecto Localmente

```bash
ng serve -o
```

**IMPORTANTE** Conectar con la API (Backend)
En la carpeta environment, en el archivo environment.development.ts
```
export const environment = {
  production: false,
  urlApi: 'https://localhost:44347/api', // <-- Cambia esto si tu API tiene una URL diferente
};
```

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── core/                     # Servicios globales, interceptores, utilidades
│   ├── data/                     # Datos ficticios, modelos o configuraciones
│   ├── layouts/
│   │   └── admin-layout/         # Layout principal del panel administrativo
│   │       ├── admin-layout.html
│   │       ├── admin-layout.scss
│   │       └── admin-layout.ts
│   ├── modules/
│   │   └── tareas/               # Módulo de tareas
│   │       ├── components/
│   │       │   ├── create-edit-tarea/
│   │       │   │   ├── create-edit-tarea.html
│   │       │   │   ├── create-edit-tarea.scss
│   │       │   │   └── create-edit-tarea.ts
│   │       │   └── list-tareas/
│   │       │       ├── list-tareas.html
│   │       │       ├── list-tareas.scss
│   │       │       └── list-tareas.ts
│   │       ├── interfaces/       # Interfaces TypeScript para modelos de datos
│   │       └── services/         # Servicios HTTP para consumir la API
│   ├── shared/
│   │   └── components/
│   │       ├── confirm-dialog/   # Componente de confirmación de acciones
│   │       ├── header/           # Componente de header
│   │       └── nav/              # Componente de navegación
│   ├── app.config.ts             # Configuración global de la app
│   ├── app.html                  # Plantilla raíz
│   ├── app.routes.ts             # Configuración de rutas
│   └── app.scss                  # Estilos globales
│   └── app.ts                    # Componente principal
```                  

---

## Autor

- Desarrollador: Nicolás Colque
- Versión: 1.0.0
- Framework: Angular 20

## Licencia
Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

---
© 2025 Nicolás Colque — Todos los derechos reservados.