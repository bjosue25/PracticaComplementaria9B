## Explicación 
En esta practica se creo dos contenedores de una api para produccion, utilizando un solo stage y otro utilizando multistage, posteriormente se lo subio a dockerhub para tener la imagen siempre disponible. 

## Comandos usados
docker build --tag bjosue25/taller:StageMulti . <br>
docker push bjosue25/taller:StageMulti<br>
docker container run -d -p 80:80 bjosue25/taller:StageMulti .

## Screenshots

<img src="assets/screenshots/1.png" height="500cm" />

<img src="assets/screenshots/2.png" height="500cm" />

<img src="assets/screenshots/3.png" height="500cm" />