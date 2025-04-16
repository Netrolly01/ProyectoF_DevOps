```markdown
# 🚀 CI/CD Pipeline para Aplicación de Pokémon

Este proyecto implementa una página web de Pokémon con la capacidad de alternar entre los modos claro y oscuro. Además, cuenta con un pipeline de integración continua (CI) y despliegue continuo (CD) utilizando **GitHub Actions** y **GitHub Pages**.

---

## 🎯 Objetivo

Demostrar la integración de herramientas y prácticas DevOps a través de una aplicación web simple, desplegada automáticamente al hacer push a la rama `main`.

---

## 🌐 Características de la Aplicación

- Interfaz temática de Pokémon.
- Alternancia entre modo claro y oscuro para mejorar la experiencia del usuario.
- Animación interactiva con una Pokébola.
- Interfaz intuitiva y responsiva.
- Despliegue automático con GitHub Pages.

---

## ⚙️ Estructura del Proyecto

- `.github/workflows/`: Configuración del pipeline CI/CD con GitHub Actions.
- `index.html`: Página principal.
- `style.css`: Estilos de la interfaz.
- `script.js`: Lógica JS, interacciones y cambio de tema.
- `imagenes/`: Carpeta con recursos visuales.
- `README.md`: Documentación del proyecto.

---

## 🔧 Configuración del CI/CD Pipeline

El proyecto utiliza **GitHub Actions** para automatizar la integración y despliegue continuo. Cada vez que se hace un push o pull request a la rama `main`, el pipeline se activa automáticamente.

### 🧪 Flujo de Trabajo

1. **Checkout del repositorio**: Se clona el código fuente.
2. **Compilación**: Se prepara el entorno de ejecución (Ubuntu).
3. **Pruebas (si están configuradas)**.
4. **Despliegue**: Se publica automáticamente en GitHub Pages.

### 📁 Archivo de Configuración
Ubicado en: `.github/workflows/ci-cd.yml`

```yaml
name: CI/CD Pipeline

on: 
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build and Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.9
        with:
          branch: gh-pages
          folder: .
```

---

## 🧪 Pruebas

- Se realizaron pruebas funcionales manuales desde el navegador:
  - Verificación del botón Pokébola.
  - Cambio de temas (Pikachu y Gengar).
  - Persistencia del tema utilizando `localStorage`.

---

## 📊 Monitoreo

### Monitoreo del Frontend

Se registraron eventos clave del usuario utilizando `console.log()` para tener visibilidad de la actividad:

```js
console.log('[MONITOREO] Pokebola clickeada - panel visible:', panel.classList.contains('active'));
console.log('[MONITOREO] Tema cambiado a: oscuro');
console.log('[MONITOREO] Tema guardado al iniciar:', temaGuardado);
```

Esto permite visualizar en tiempo real los eventos relevantes de la interfaz.

---

## 📥 Instalación y Uso

### Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### Instalación de dependencias (si aplica):

```bash
npm install
```

### Ejecutar la aplicación localmente:

```bash
npm start
```

---

## 🚀 Despliegue Automático

Cada push a `main` desencadena el pipeline CI/CD y publica la app en GitHub Pages:

🔗 **GitHub Page del proyecto:**  
[https://netrolly01.github.io/ProyectoF_DevOps/](https://netrolly01.github.io/ProyectoF_DevOps/)

---

## 🧰 Tecnologías Utilizadas

- HTML, CSS, JavaScript
- GitHub Actions (CI/CD)
- GitHub Pages (Hosting)
- Console logs para monitoreo básico

---

## 🤝 Contribución

Si deseas contribuir, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature-nueva
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Descripción del cambio"
   ```
4. Sube los cambios:
   ```bash
   git push origin feature-nueva
   ```
5. Crea un Pull Request.

---

## 🔍 Lecciones Aprendidas

- Se aprendió a integrar un flujo DevOps usando GitHub Actions.
- El monitoreo no requiere herramientas complejas; `console.log` puede ser suficiente para aplicaciones simples.
- Automatizar el despliegue con GitHub Pages acelera el proceso de desarrollo y entrega.

---

## ✅ Checklist de Entregables

- [x] Página web funcional
- [x] Alternancia de tema claro/oscuro
- [x] Repositorio Git organizado
- [x] CI/CD con GitHub Actions
- [x] Despliegue automático en GitHub Pages
- [x] Monitoreo básico implementado
- [x] Documentación clara

---

## 👨‍💻 Autores

- Netanel de Jesus 
- Jonathan Jose Frias Martinez
```
