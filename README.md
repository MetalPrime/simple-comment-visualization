# Simple Comment Visualization

A modern web application built with Next.js and Supabase for visualizing and managing comments in a clean, user-friendly interface.

## Tabla de Contenidos

- [Instrucciones de Instalación y Ejecución](#instrucciones-de-instalación-y-ejecución)
- [Decisiones Técnicas](#decisiones-técnicas)
- [Mejoras Futuras](#mejoras-futuras)

## Instrucciones de Instalación y Ejecución

### Requisitos Previos

- Node.js 18+ y npm (o yarn, pnpm, bun)
- Una cuenta y proyecto de Supabase
- Variables de entorno configuradas correctamente

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <repository-url>
   cd simple-comment-visualization
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configurar variables de entorno:**
   Crear un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
   ```

4. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

5. **Crear la tabla de comentarios en Supabase:**
   En el dashboard de Supabase, ejecutar el siguiente SQL para crear la tabla:
   ```sql
   CREATE TABLE comments (
     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     autor VARCHAR NOT NULL,
     email VARCHAR,
     comment TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE NOT NULL,
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );
   ```

6. **Ejecutar el seed para poblar datos de ejemplo (opcional):**
   
   Primero, instala `tsx` globalmente o localmente:
   ```bash
   npm install -D tsx
   ```
   
   Luego ejecuta el script de seed:
   ```bash
   npx tsx scripts/seed.ts
   ```
   
   Esto insertará 6 comentarios de ejemplo en la base de datos para visualización y prueba.

7. **Abrir la aplicación:**
   Navegar a [http://localhost:3000](http://localhost:3000) en el navegador.

### Build para Producción

Para construir y ejecutar la aplicación en producción:

```bash
npm run build
npm run start
```

## Decisiones Técnicas

### 1. **Supabase como Backend de base**
   - **Decisión:** Elegir Supabase como solución de base de datos y autenticación.
   - **Por qué:** Basado en PostgreSQL con capacidades en tiempo real, es sumamente agradable de integrar, tengo experiencia previa con este tecnología, su manejo de *Policies* y *Auth*, me parecen súper útiles. Casi lo olvido tiene un gran soporte de integraciones con distintos frameworks y tecnologías.

### 2. **Tailwind CSS para Estilos**
   - **Decisión:** Usar Tailwind CSS v4 para todos los estilos.
   - **Por qué:** El único punto que ignore del desafio debido a su enfoque utility-first reduce el cambio de contexto y desarrollo rápido, asi cómo mi familiaridad con el mismo dado su integración accesible dentro de proyectos de Next.js.

### 3. **Arquitectura Basada en Componentes**
   - **Decisión:** Organizar el código en directorios `components/`, `container/`, `database/`, `actions/`, y `schemas/`.
   - **Por qué:** Enfoque en la separación clara de responsabilidades buscando mejorar el mantenimiento, reutilización, y facilitar la navegación del código. Mayor legibilidad para una aplicación Frontend que sólo se enfoca en recibir información desde un API en mi experiencia.

### 4. **Server Components y Server Actions**
   - **Decisión:** Utilizar Next.js Server Components para obtención de datos y Server Actions para mutaciones.
   - **Por qué:** Reduce el JavaScript enviado al cliente, de alli que dentro del directorio `database/`, encuentres dos archivos uno para peticiones desde el cliente y otras para el uso del servidor. Las Server Actions eliminan la necesidad de rutas API tradicionales para operaciones simples.

### 5. **useOptimistic**
   - **Decisión:** Utilizar useOptimistic() hook de React.js library para el UI Optimistic.
   - **Por qué:** Probar sus capacidades dentro del sistema, implementacion y manejo. Al ser un hook dentro de React, probar sus posibilidades dentro del manejo del lado del cliente

## Mejoras Futuras

### Características
- **Autenticación de Usuarios:** No me dio el tiempo pero queria usar la autenticación completa de usuarios con registro, inicio de sesión, y perfiles de usuario para eliminar el uso de ciertos inputs si estuviera conectado.
- **Moderación de Comentarios:** Añadir herramientas admin para moderación, eliminación, y flagging de contenido inapropiado.
- **Reacciones/Votación:** Permitir que los usuarios voten comentarios o reaccionen con emojis, es un chat esto es esencial.
- **Manejo de base de datos local:** Permitir un modo alterno a la conexión con Supabase para manejar la base de datos, me hubiera encantado darle un manejo al mismo.

### Calidad del Código
- **Testing:** Añadir pruebas unitarias.
- **Manejo de Errores:** Mejorar error boundaries y mensajes de error amigables en toda la aplicación, asi cómo la implementación de estado dentro del componente Formulario.
- **Logging:** Implementar logging estructurado para debugging y monitoreo en producción.

### Experiencia de Usuario
- **Hilo de Comentarios:** Añadir respuestas anidadas a comentarios para conversaciones en hilo.
- **Accesibilidad:** Mejorar etiquetas ARIA y navegación por teclado para mejor cumplimiento de accesibilidad.

### Infraestructura
- **Índices de Base de Datos:** Optimizar índices de base de datos para consultas más rápidas en grandes conjuntos de datos.

### Desarrollo en otra rama
- **Continuar:** El desafio me propuso muchos aspectos que considero vitales, deseo continuar el desarrollo en una rama aparte *other-aspects*, que debido a situaciones externas no pude lograr terminar.