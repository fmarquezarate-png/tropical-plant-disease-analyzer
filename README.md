# 🌴 Tropical Plant Disease Analyzer

Aplicación web sencilla para análisis de plantas tropicales y detección de enfermedades.

## Descripción

Esta aplicación web permite:
- Subir imágenes de plantas tropicales
- Identificar la especie de planta
- Detectar posibles enfermedades y plagas
- Obtener recomendaciones de cuidado

**⚡ Sin backend ni base de datos** - Todo funciona directamente en el navegador.

## Tecnologías

- **Frontend**: HTML5 + CSS3 + JavaScript (Vanilla)
- **ML**: TensorFlow.js (modelo pre-entrenado)
- **Procesamiento**: Canvas API para análisis de imágenes

## Estructura del proyecto

```
tropical-plant-disease-analyzer/
├── index.html          # Página principal
├── styles.css          # Estilos
├── app.js              # Lógica de la aplicación
├── plants-db.js        # Base de datos de plantas (JSON)
└── models/             # Modelos de ML (opcional)
```

## Instalación y uso

### Opción 1: Abrir directamente
```bash
# Simplemente abre el archivo index.html en tu navegador
open index.html
```

### Opción 2: Usar un servidor local (recomendado)
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve

# Luego abre http://localhost:8000
```

### Opción 3: Desplegar en Netlify/Vercel
1. Sube el repositorio a GitHub
2. Conecta Netlify/Vercel
3. ¡Listo! Se desplegará automáticamente

## Características

✅ Interfaz sencilla y responsive  
✅ Carga de imágenes desde el dispositivo  
✅ Análisis básico de color y textura  
✅ Base de datos de plantas tropicales  
✅ Recomendaciones de cuidado  
✅ Sin necesidad de servidor  

## Próximas mejoras

- [ ] Integrar modelo TensorFlow.js pre-entrenado
- [ ] Añadir más plantas a la base de datos
- [ ] Implementar análisis avanzado de imágenes
- [ ] Modo offline con Service Worker

## Licencia

MIT
