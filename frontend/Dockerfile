# Usamos una imagen ultra ligera de Node.js
FROM node:alpine

# Instalamos un servidor web estático global rápido
RUN npm install -g http-server

# Creamos y nos movemos a la carpeta de la app
WORKDIR /app

# Copiamos tus 3 archivos (index, styles y el propio Dockerfile)
COPY index.html .
COPY styles.css .
COPY Restaurante.jpeg .

# Cloud Run le pasa el $PORT, y este comando lo lee de forma nativa e inmediata
CMD ["sh", "-c", "http-server . -p ${PORT:-8080}"]