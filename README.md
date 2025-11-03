# 🐾 Web_Mascotas – Proyecto Fullstack con Docker Compose

Aplicación para gestionar mascotas y sus cuidados, implementada con una arquitectura monolítica moderna en contenedores Docker.

---

## 🚀 Tecnologías utilizadas

* **Frontend:** Next.js 14 (TypeScript + TailwindCSS + SWR)
* **Backend:** Go (manejadores, almacenes y modelos)
* **Base de datos:** PostgreSQL 13
* **Orquestación:** Docker Compose v2

---

## ⚙️ Requisitos

* Docker Desktop instalado
* Visual Studio Code u otro editor de código

---

## 🧱 Estructura del proyecto

```
web_arquitecturamonolitica/
  backend/
    cmd/api/main.go
    internal/
      config/config.go
      database/db.go
      database/migrate.go
      database/migrations/0001_init.sql
      http/handlers.go
      http/router.go
      http/errors.go
      models/cuidado.go
      models/mascota.go
    go.mod
    Dockerfile
  frontend/
    app/layout.tsx
    app/page.tsx
    app/error.tsx
    components/PetForm.tsx
    components/PetList.tsx
    components/CareList.tsx
    components/Skeleton.tsx
    components/Toast.tsx
    lib/api/client.ts
    lib/hooks.ts
    public/
    styles/globals.css
    next.config.mjs
    package.json
    tsconfig.json
    postcss.config.js
    tailwind.config.ts
    Dockerfile
  docker-compose.yml
```

---

## 🌐 Puertos

| Servicio      | Puerto host | Puerto contenedor | Descripción            |
| ------------- | ----------- | ----------------- | ---------------------- |
| Interfaz      | 3000        | 3000              | Next.js (interfaz web) |
| Backend       | 8080        | 8080              | API Go                 |
| Base de datos | 5436        | 5432              | PostgreSQL             |

---

## 🐳 Levantar con Docker Compose

Desde la raíz del proyecto:

```bash
docker compose up -d --build
```

### 🔎 Verificación rápida

* **Backend:**

```bash
docker compose logs --follow backend
# → “El servidor backend está escuchando en el puerto :8080”
```

* **Base de datos:**

```bash
docker compose logs --follow db
# → comprobación de salud OK
```

* **Interfaz:**

```bash
docker compose logs --follow frontend
# → Listo en puerto 3000
```

---

## 🧪 Pruebas rápidas

* **Web:** [http://localhost:3000](http://localhost:3000)
* **API Health:** [http://localhost:8080/health](http://localhost:8080/health)

### Comandos útiles de Docker

* Apagar servicios:

```bash
docker compose down
```

* Limpiar volúmenes y reconstruir todo:

```bash
docker compose down -v
docker compose up -d --build
```

---

## 🔐 Variables de entorno

### Backend

| Variable        | Descripción                   | Valor por defecto                              |
| --------------- | ----------------------------- | ---------------------------------------------- |
| PORT            | Puerto del servidor           | 8080                                           |
| DB_DSN          | Cadena de conexión a Postgres | Al servicio `db`                               |
| ALLOWED_ORIGINS | CORS permitido                | [http://localhost:3000](http://localhost:3000) |

### Frontend

| Variable            | Descripción        | Valor por defecto                              |
| ------------------- | ------------------ | ---------------------------------------------- |
| NEXT_PUBLIC_API_URL | URL base de la API | [http://localhost:8080](http://localhost:8080) |

---

## 🔗 Puntos finales principales

### Chequeo de salud

| Método | Ruta    | Respuesta          |
| ------ | ------- | ------------------ |
| GET    | /health | { "status": "ok" } |
| GET    | /ready  | 204                |

### Mascotas

| Método         | Ruta           | Descripción                    |
| -------------- | -------------- | ------------------------------ |
| GET            | /mascotas      | Listar                         |
| POST           | /mascotas      | Crear mascota                  |
| GET/PUT/DELETE | /mascotas/{id} | Operaciones CRUD sobre mascota |

### Cuidados

| Método         | Ruta                    | Descripción                    |
| -------------- | ----------------------- | ------------------------------ |
| GET            | /mascotas/{id}/cuidados | Listar cuidados de una mascota |
| POST           | /mascotas/{id}/cuidados | Agregar cuidado                |
| GET/PUT/DELETE | /cuidados/{id}          | CRUD sobre cuidado             |

---

## ✨ Autor

**Lilly Signey Puentes Rincón**
📅 Proyecto Fullstack con Docker Compose

