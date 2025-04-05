# CI/CD Pipeline para Aplicación de Pokémon

Este proyecto implementa una página web de Pokémon con la capacidad de alternar entre los modos claro y oscuro. Además, cuenta con una integración continua (CI) y despliegue continuo (CD) utilizando GitHub Actions y GitHub Pages.

## Características de la Aplicación
- Muestra información sobre Pokémon.
- Permite alternar entre el modo claro y oscuro para mejorar la experiencia del usuario.
- Interfaz intuitiva y responsiva.
- Desplegado automáticamente en **GitHub Pages**.

## Configuración del CI/CD Pipeline
El proyecto utiliza GitHub Actions para automatizar la integración y despliegue continuo. 
Cada vez que hay un *push* o una *pull request* a la rama `main`, el pipeline se ejecuta.

### Flujo de Trabajo
1. **Checkout del Repositorio**: Se clona el repositorio en el entorno de ejecución.
2. **Compilación**: Se construye la aplicación en un entorno Ubuntu.
3. **Ejecución de pruebas** (si están configuradas).
4. **Despliegue en GitHub Pages**.

### Archivo de Configuración (`.github/workflows/ci-cd.yml`)
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
            folder: build
```

## Instalación y Uso
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Ejecutar la aplicación:
   ```sh
   npm start
   ```

## Tecnologías Utilizadas
- **HTML, CSS y JavaScript** para la interfaz de usuario.
- **React** (si aplica) para la construcción de la página.
- **GitHub Actions** para la automatización del CI/CD.
- **GitHub Pages** para el despliegue automático.

## Contribución
Si deseas contribuir, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama (`git checkout -b feature-nueva`).
3. Realiza tus cambios y haz un commit (`git commit -m "Descripción"`).
4. Sube los cambios (`git push origin feature-nueva`).
5. Crea un Pull Request.

## Licencia
Este proyecto está bajo la licencia MIT.

#Link de GitHub Page : https://netrolly01.github.io/Prueba/

