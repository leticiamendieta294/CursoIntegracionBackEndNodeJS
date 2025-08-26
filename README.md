1. Descargar el .zip o clonar el repositorio

2. Instalar dependencias con el comando (recordar abrir en tu VSCode la carpeta para ejercutar el comando en la terminal)

npm install

3. Crear manualmente un archivo .env en la raíz del proyecto (no viene en el repo).(cambiar usuario y password por el tuyo)

DATABASE_URL="postgresql://usuario:password@localhost:5432/db_user

4. Ejecutar migraciones de Prisma para crear tablas:

npx prisma migrate dev --name init

5. Levantar el servidor

npm run dev
