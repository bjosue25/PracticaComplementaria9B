# Usar una imagen base con Node.js
FROM node:14

# Establecer el directorio de trabajo en la carpeta de la aplicación de React
WORKDIR /app

# Copiar el package.json y el package-lock.json a la carpeta de trabajo
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar los archivos de la aplicación a la carpeta de trabajo
COPY . .

# Compilar la aplicación de React
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Iniciar la aplicación de React
CMD ["npm", "start"]