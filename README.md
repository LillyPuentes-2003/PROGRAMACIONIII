🐾 Web_Mascotas – Proyecto Fullstack con Docker Compose
Aplicación para gestionar mascotas y sus cuidados , implementada con una arquitectura monolítica moderna en contenedores Docker.

🚀 Tecnologías utilizadas
Frontend: Next.js 14 (TypeScript + TailwindCSS + SWR)
Backend: Go (manejadores + almacenes y modelos)
Base de datos: PostgreSQL 13
Orquestación: Docker Compose v2
⚙️ Requisitos
Escritorio Docker
Código de Visual Studio
🧱 Estructura del proyecto
web_arquitecturamonolitica/
  backend/
    cmd/api/main.go
    internal/
      config/
        config.go
      database/
        db.go
        migrate.go
        migrations/0001_init.sql
      http/
        handlers.go
        router.go
        errors.go
      models/
        cuidado.go
        mascota.go
    go.mod
    Dockerfile
  frontend/
    app/
      layout.tsx
      page.tsx
      error.tsx
    components/
      PetForm.tsx
      PetList.tsx
      CareList.tsx
      Skeleton.tsx
      Toast.tsx
    lib/
      api/client.ts
      hooks.ts
    public/
    styles/
      globals.css
    next.config.mjs
    package.json
    tsconfig.json
    postcss.config.js
    tailwind.config.ts
    Dockerfile
  docker-compose.yml
🌐 Puertos
Servicio	Puerto host	Puerto contenedor	Descripción
Interfaz	3000	3000	Next.js (interfaz web)
Backend	8080	8080	API Go
Base de datos	5436	5432	PostgreSQL
🐳 Levantar con Docker Compose
Desde la raíz del proyecto:

docker compose up -d --build
🔎 Verificación rápida
Backend:

docker compose logs --follow backend
→ “El servidor backend está escuchando en el puerto :8080”

Base de datos:

docker compose logs --follow db
→ comprobación de salud OK

Interfaz:

docker compose logs --follow frontend
→ Listo en puerto 3000

🧪 Pruebas rápidas
🌍 Web: http://localhost:3000
⚙️ API: http://localhost:8080/health
Para los servicios:

docker compose down
Para limpiar volúmenes y reconstruir todo:

docker compose down -v
docker compose up -d --build
🔐 Variables de entorno
Backend
Variable	Descripción	Valor por defecto
PORT	Puerto del servidor	8080
DB_DSN	Cadena de conexión a Postgres	al serviciodb
ALLOWED_ORIGINS	CORS lo permitía	http://localhost:3000
Interfaz
Variable	Descripción	Valor por defecto
NEXT_PUBLIC_API_URL	URL base de la API	http://localhost:8080
🔗 Puntos finales principales
chequeo de salud
Método	Ruta	Respuesta
CONSEGUIR	/health	{ "status": "ok" }
CONSEGUIR	/ready	204
mascotas
Método	Ruta	Descripción
CONSEGUIR	/mascotas?limit&offset	Listar
CORREO	/mascotas	Crear mascota
OBTENER/INSERTAR/ELIMINAR	/mascotas/{id}	Operaciones CRUD
Cuidados
Método	Ruta	Descripción
CONSEGUIR	/mascotas/{id}/cuidados	Listar cuidados de una mascota
CORREO	/mascotas/{id}/cuidados	Agregar cuidado
OBTENER/INSERTAR/ELIMINAR	/cuidados/{id}	Operaciones CRUD sobre cuidado
✨ Autor
Lilly Signey Puentes Rincón 📅 Proyecto Fullstack con Docker
