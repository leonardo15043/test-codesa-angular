<p align="center"><a href="https://www.codesa.com.co/" target="_blank"><img src="https://ii.ct-stc.com/1/logos/empresas/2017/09/08/codesa-234B49A044C42368204329thumbnail.png" width="400"></a></p>


## Test Codesa - Angular

### Instalación y configuración 

- Tener todo el ambiente de desarrollo, esto incluye tener node js y un IDE de desarrollo
- Clonar el repositorio en nuestro computador 
- Nos dirigimos a la carpeta de nuestro proyecto por consola y ejecutamos el siguiente comando para instalar las dependencias de npm 

    ```npm install```   

- Para que el proyecto funcione correctamente en un ambiente local fue necesario crear el archivo **proxy.conf.json** para evitar problemas de **CORS** con el backend, si el proyecto de Spring no se ejecuta en el puerto **8080** se debe cambiar en este archivo.

- Luego ejecutamos nuestro proyecto para que se visualice en el navegador con el comando 

   ```ng serve```
   
- Abrimos el proyecto en nuestro navegados con el puerto especificado, por lo general es **http://localhost:4200/**

