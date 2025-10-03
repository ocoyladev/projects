# Imagen ligera con Node 20
FROM node:20-alpine

# Carpeta de trabajo
WORKDIR /app

# Copiamos solo los manifests para cachear deps
COPY package*.json ./

# Instala dependencias (usa ci si tienes package-lock)
RUN npm ci || npm install

# Copia el resto del código
COPY . .

# Vite suele correr en 5173
EXPOSE 5173

# Importante para acceder desde el host
ENV HOST=0.0.0.0
ENV CHOKIDAR_USEPOLLING=true

# Arranca el dev server (ajusta si tu script no es "dev")
CMD ["npm", "run", "dev", "--", "--host"]
