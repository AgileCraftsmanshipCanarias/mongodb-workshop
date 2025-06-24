# MongoDB Workshop

Este repositorio contiene ejercicios prácticos para aprender MongoDB utilizando Node.js, TypeScript y el driver oficial de MongoDB. El workshop está estructurado en 25 ejercicios progresivos que cubren desde consultas básicas hasta agregaciones avanzadas.

## 🚀 Configuración del Entorno

### Prerrequisitos
- Node.js (versión recomendada: 24)
- Docker y Docker Compose
- TypeScript

### Instalación
1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la base de datos MongoDB con Docker:
   ```bash
   docker-compose up -d
   ```
4. Ejecuta los tests:
   ```bash
   npm test
   ```

## 📊 Base de Datos

El workshop utiliza una base de datos `store` con dos colecciones:

### `manufacturers` (Fabricantes)
- `_id`: ID único del fabricante
- `name`: Nombre del fabricante

### `products` (Productos)
- `_id`: ID único del producto
- `name`: Nombre del producto
- `price`: Precio del producto
- `manufacturer_id`: Referencia al fabricante

## 🎯 Temas Cubiertos

### **Consultas Básicas (Ejercicios 1-6)**
- **Ejercicio 1**: Listar todos los documentos con `find()`
- **Ejercicio 2**: Proyecciones con `projection`
- **Ejercicio 3**: Filtros por igualdad exacta
- **Ejercicio 4**: Búsquedas con expresiones regulares (`regex`)
- **Ejercicio 5**: Operadores de comparación (`$gt` - mayor que)
- **Ejercicio 6**: Rangos de valores (`$gt` y `$lt`)

### **Ordenamiento y Paginación (Ejercicios 7-8)**
- **Ejercicio 7**: Ordenamiento con `sort`
- **Ejercicio 8**: Limitación de resultados con `limit`

### **Operadores de Array (Ejercicios 9-10)**
- **Ejercicio 9**: Búsqueda en arrays con `$in`
- **Ejercicio 10**: Exclusión de valores con `$nin`

### **Funciones de Conteo y Búsqueda (Ejercicios 11-13)**
- **Ejercicio 11**: Contar documentos con `countDocuments()`
- **Ejercicio 12**: Encontrar un documento con `findOne()` y ordenamiento
- **Ejercicio 13**: Patrones avanzados con regex (`^` para inicio de cadena)

### **Introducción a Agregaciones (Ejercicios 14-15)**
- **Ejercicio 14**: Agrupación básica con `$group` y `$sum`
- **Ejercicio 15**: Cálculo de promedios con `$avg`

### **Agregaciones con Joins (Ejercicios 16-19)**
- **Ejercicio 16**: Lookup básico (`$lookup` y `$unwind`)
- **Ejercicio 17**: Combinación de `$group`, `$lookup` y `$project`
- **Ejercicio 18**: Encontrar máximos con `$max` en agregaciones
- **Ejercicio 19**: Estadísticas completas (`$avg`, `$min`, `$max`) con `$round`

### **Operaciones Avanzadas de Agregación (Ejercicios 20-22)**
- **Ejercicio 20**: Agrupación por rangos con `$bucket`
- **Ejercicio 21**: Añadir campos calculados con `$addFields`
- **Ejercicio 22**: Lógica condicional con `$cond` y `$regexMatch`

### **Agregaciones Complejas (Ejercicios 23-25)**
- **Ejercicio 23**: Filtrado en arrays con `$filter` y verificación de existencia
- **Ejercicio 24**: Informes paralelos con `$facet`
- **Ejercicio 25**: Paginación avanzada con `$facet`, `$skip` y conteo total

## 🛠️ Características Técnicas

### Herramientas Utilizadas
- **MongoDB Driver**: `mongodb` v6.17.0
- **Testing**: Node.js Test Runner nativo
- **TypeScript**: Para tipado estático
- **Docker**: Para la base de datos MongoDB
- **Snapshots**: Para validación de resultados de tests

### Patrones Implementados
- **withMongo Helper**: Función utilitaria para gestión de conexiones en tests
- **Snapshot Testing**: Validación automática de resultados
- **Tipado TypeScript**: Interfaces para colecciones MongoDB

## 📚 Conceptos MongoDB Cubiertos

### Operadores de Consulta
- `$gt`, `$lt`: Comparación numérica
- `$in`, `$nin`: Inclusión/exclusión en arrays
- `$regex`: Expresiones regulares
- `$exists`: Verificación de existencia de campos

### Operadores de Agregación
- **Pipeline stages**: `$group`, `$match`, `$project`, `$sort`, `$limit`, `$skip`
- **Lookup operations**: `$lookup`, `$unwind`
- **Mathematical operations**: `$sum`, `$avg`, `$min`, `$max`, `$round`, `$multiply`
- **Conditional logic**: `$cond`, `$regexMatch`
- **Field operations**: `$addFields`, `$set`
- **Array operations**: `$filter`, `$push`
- **Advanced grouping**: `$bucket`, `$facet`

### Técnicas Avanzadas
- Joins entre colecciones
- Cálculos matemáticos
- Lógica condicional
- Paginación
- Informes con múltiples datasets
- Filtrado dinámico de arrays

## 🚦 Cómo Usar el Workshop

1. **Ejecuta todos los tests** para ver el estado inicial:
   ```bash
   npm test
   ```

2. **Estudia cada ejercicio** en orden secuencial desde `01_ex.test.ts` hasta `25_ex.test.ts`

3. **Analiza los snapshots** (archivos `.snapshot`) para entender los resultados esperados

4. **Experimenta** modificando las consultas en `playground.ts`

5. **Practica** creando tus propias variaciones de los ejercicios

6. **Consulta las soluciones** en el tag `solved` del repositorio para ver las implementaciones completas de todos los ejercicios

## 📖 Progresión Recomendada

| Nivel | Ejercicios | Enfoque |
|-------|------------|---------|
| **Principiante** | 1-8 | Consultas básicas, filtros, ordenamiento |
| **Intermedio** | 9-15 | Operadores avanzados, agregaciones básicas |
| **Avanzado** | 16-22 | Joins, cálculos, campos dinámicos |
| **Experto** | 23-25 | Agregaciones complejas, informes avanzados |

## 🎓 Objetivos de Aprendizaje

Al completar este workshop, serás capaz de:

- ✅ Realizar consultas básicas y avanzadas en MongoDB
- ✅ Implementar agregaciones complejas con múltiples stages
- ✅ Crear joins entre colecciones
- ✅ Implementar paginación y ordenamiento
- ✅ Realizar cálculos matemáticos y estadísticos
- ✅ Crear informes dinámicos con múltiples datasets
- ✅ Aplicar lógica condicional en consultas
- ✅ Optimizar consultas para casos de uso reales

---

¡Buen aprendizaje con MongoDB! 🚀
