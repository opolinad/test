# ¿Cómo correr el backend?

1. Se debe hacer una copia del archivo .env.example (en la raíz del directorio)
2. La copia se debe llamar .env
3. Se debe asegurar que la informacion contenida sea la correcta (la información de conexión se envía por otro medio).
4. Desde la raíz (carpeta back) se abre una terminal y se ejecuta el siguiente comando. Este comando instala las dependencias, realiza las migraciones y corre los seeders.

        npm run build:dev

5. Una vez finalizado este comando, se puede iniciar el servidor, para lo cual se usa el siguiente comando:

        npm run start:dev

# ¿Cómo correr el frontend?
1. Se debe hacer una copia del archivo .env.example (en la raíz del directorio)
2. La copia se debe llamar .env
3. Se debe asegurar que la informacion contenida sea la correcta (la información de conexión se envía por otro medio).
4. Desde la raíz (carpeta back) se abre una terminal y se ejecuta el siguiente comando. Este comando instala las dependencias, realiza las migraciones y corre los seeders.

        npm install

5. Una vez finalizado este comando, se puede iniciar el servidor, para lo cual se usa el siguiente comando:

        npm start