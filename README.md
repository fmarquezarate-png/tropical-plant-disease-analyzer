# 🌴 Tropical Plant Disease Analyzer

Aplicación para el análisis de plantas tropicales y detección de enfermedades.

## Descripción

Esta aplicación permite:
- Identificar plantas tropicales a partir de imágenes
- Detectar posibles enfermedades y plagas
- Proporcionar recomendaciones de tratamiento
- Mantener un historial de análisis

## Tecnologías

- **Frontend**: React + Vite
- **Backend**: Python (FastAPI/Flask)
- **Base de datos**: Supabase (PostgreSQL)
- **ML**: TensorFlow/PyTorch para clasificación de imágenes

## Estructura del proyecto

```
tropical-plant-disease-analyzer/
├── frontend/          # Aplicación React
├── backend/           # API en Python
├── models/            # Modelos de ML entrenados
├── data/              # Dataset de imágenes
└── docs/              # Documentación
```

## Instalación

### Backend
```bash
cd backend
pip install -r requirements.txt
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Uso

1. Subir una imagen de la planta
2. El modelo identifica la especie y detecta enfermedades
3. Recibir recomendaciones de cuidado y tratamiento

## Licencia

MIT
