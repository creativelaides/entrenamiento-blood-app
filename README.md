# 🩸 Blood Donation App

Aplicación web para la gestión básica de donaciones de sangre, desarrollada con **Angular (Signals + arquitectura por features)** en el frontend y **NestJS** en el backend.

---

## 🎯 Objetivo del Proyecto

Este proyecto tiene como finalidad:

* Practicar Angular moderno (Signals)
* Implementar arquitectura **Feature-Based**
* Integrar componentes UI con PrimeNG
* Consumir APIs REST (NestJS)
* Aplicar buenas prácticas de desarrollo frontend

---

## 🧱 Tecnologías

### Frontend

* Angular 18/19 (Standalone + Signals)
* PrimeNG (componentes UI)
* SCSS

### Backend

* NestJS
* API REST

---

## 🧠 Conceptos clave aplicados

* Signals (`signal`, `computed`, `effect`)
* Arquitectura por features
* Separación de responsabilidades:

  * Component → UI
  * Store → Estado
  * Service → HTTP
* FIFO (First In, First Out)

---

## 📦 Funcionalidades

### 🧑 Donadores

* Crear donadores
* Listar donadores
* Estado: disponible / no disponible

### 🏥 Receptores

* Crear receptores
* Listar receptores
* Estado: pendiente / atendido

### 🔄 Donaciones

* Asignación automática (FIFO)
* Historial de donaciones

---

## ⚙️ Reglas de negocio

* El primer donador disponible atiende al primer receptor pendiente
* Validación básica por tipo de sangre (fase inicial: igual tipo)

---

## 🗂️ Estructura del Proyecto (Frontend)

```
src/app/
│
├── core/
│   └── services/        # API base, servicios globales
│
├── shared/
│   └── components/      # Componentes reutilizables
│
├── features/
│   ├── donors/
│   ├── receivers/
│   └── donations/
│
├── layout/
│   ├── navbar/
│   └── sidebar/
│
└── app.routes.ts
```

---

## 🚀 Creación del Proyecto Angular

### 1. Crear proyecto con versión específica

```bash
npx -p @angular/cli@18 ng new blood-donation-app \
  --standalone \
  --routing \
  --style=scss
```

---

### 2. Entrar al proyecto

```bash
cd blood-donation-app
```

---

### 3. Ejecutar proyecto

```bash
ng serve
```

---

## 🎨 Instalación de PrimeNG

```bash
npm install primeng primeicons
```

### Agregar estilos en `angular.json`

```json
"styles": [
  "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css"
]
```

---

## 🧩 Arquitectura por Feature

Cada feature contiene:

```
donors/
├── pages/
├── components/
├── services/
├── models/
└── donors.store.ts
```

---

## 🧠 Manejo de Estado con Signals

Ejemplo:

```ts
import { signal, computed } from '@angular/core';

donors = signal([]);

availableDonors = computed(() =>
  this.donors().filter(d => d.disponible)
);
```

---

## 🔌 Comunicación con Backend

Centralizada en un servicio base:

```ts
get(url: string) {
  return this.http.get(`${this.baseUrl}/${url}`);
}
```

---

## 🔄 Flujo de la Aplicación

1. Crear donadores
2. Crear receptores
3. Ir a módulo de donaciones
4. Click en "Asignar donación"
5. El sistema:

   * Selecciona primer donador disponible
   * Selecciona primer receptor pendiente
   * Genera la donación

---

## 🧪 Roadmap de Desarrollo

### FASE 1

* Configuración Angular
* PrimeNG
* Layout base

### FASE 2

* Feature Donors

### FASE 3

* Feature Receivers

### FASE 4

* Feature Donations (FIFO)

### FASE 5

* Mejoras UX (toasts, loading, validaciones)

---

## ⚡ Mejoras Futuras

* Compatibilidad real de tipos de sangre
* Base de datos (PostgreSQL)
* Autenticación
* Dashboard
* Dark Mode
* Tests

---

## 👨‍💻 Autor

Proyecto creado como práctica avanzada de Angular moderno.

---

## 📌 Notas

* Se recomienda usar Angular 19 para aprovechar al máximo Signals
* No se utiliza RxJS para manejo de estado
* Arquitectura pensada para escalabilidad
