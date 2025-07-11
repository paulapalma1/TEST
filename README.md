# Proyecto Gestión de Productos

Este proyecto es una aplicación web para gestionar productos con funcionalidades de listado, subida y eliminación. Está dividido en **backend** (Django + MySQL) y **frontend** (Angular 19).

---

## Estructura del proyecto

- `/backend-productos` → Código backend en Django  
- `/frontend-productos` → Código frontend en Angular  

---

## Tecnologías usadas

- Backend: Django, Django REST Framework, MySQL, Pillow  
- Frontend: Angular 19, Reactive Forms, HttpClient  
- Base de datos: MySQL  
- Servidor backend corre en el puerto `8080`  
- Servidor frontend corre en el puerto por defecto (4200)

---

## Requisitos previos

- Python 3.x  
- Node.js y npm  
- MySQL instalado y configurado  
- Angular CLI instalado (`npm install -g @angular/cli`)  

---

## Instalación y configuración

### Backend

1. Activar entorno virtual  
bash
cd backend-productos
python -m venv env
source env/bin/activate # Linux/Mac
env\Scripts\activate    # Windows PowerShell

2. Instalar dependencias
bash
pip install -r requirements.txt

3. Configurar conexión a MySQL en settings.py (asegúrate que está apuntando a tu base de datos)

4. Migrar base de datos
bash
python manage.py migrate

5. Ejecutar servidor
bash
python manage.py runserver 8080

### Frontend

1. Instalar dependencias
bash
cd frontend-productos
npm install

2. Ejecutar aplicación
bash
ng serve

3. Abrir en el navegador
arduino
localhost:4200

## Uso

Desde la página de inicio puedes elegir:

- Ver lista de productos (muestra todos con imágenes y detalles)
- Subir un producto (formulario con imagen incluida)

## Notas

El backend expone una API REST para la gestión de productos.

El frontend consume esta API mediante HttpClient.

## Autor

Paula Priscila Palma Alvarado
