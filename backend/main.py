"""
Tropical Plant Disease Analyzer - Backend API
"""
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import torch
from typing import Dict, List

app = FastAPI(
    title="Tropical Plant Disease Analyzer",
    description="API para análisis de plantas tropicales y detección de enfermedades",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configurar con los origenes permitidos en producción
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos placeholder (implementar carga de modelos reales)
plant_classifier = None
disease_detector = None

@app.get("/")
async def root():
    return {
        "message": "Tropical Plant Disease Analyzer API",
        "version": "1.0.0",
        "endpoints": ["/analyze", "/plants", "/diseases"]
    }

@app.post("/analyze")
async def analyze_plant(image: UploadFile = File(...)) -> Dict:
    """
    Analiza una imagen de planta tropical para identificar especie y enfermedades
    """
    try:
        # Leer imagen
        image_data = await image.read()
        img = Image.open(io.BytesIO(image_data))
        
        # TODO: Implementar inferencia con modelos de ML
        # results = plant_classifier(img)
        # diseases = disease_detector(img)
        
        # Respuesta placeholder
        return {
            "success": True,
            "plant_species": "Monstera deliciosa",
            "confidence": 0.92,
            "diseases_detected": [
                {
                    "name": "Mancha foliar",
                    "severity": "leve",
                    "confidence": 0.78
                }
            ],
            "recommendations": [
                "Aumentar la circulación de aire",
                "Reducir la humedad en las hojas",
                "Aplicar fungicida si persiste"
            ]
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/plants")
async def list_plants() -> List[Dict]:
    """
    Lista de plantas tropicales soportadas
    """
    return [
        {"id": 1, "name": "Monstera deliciosa", "common_name": "Costilla de Adán"},
        {"id": 2, "name": "Ficus lyrata", "common_name": "Árbol de violín"},
        {"id": 3, "name": "Calathea ornata", "common_name": "Calatea"},
        {"id": 4, "name": "Philodendron scandens", "common_name": "Filodendro"}
    ]

@app.get("/diseases")
async def list_diseases() -> List[Dict]:
    """
    Lista de enfermedades detectables
    """
    return [
        {"id": 1, "name": "Mancha foliar", "type": "fúngica"},
        {"id": 2, "name": "Moho gris", "type": "fúngica"},
        {"id": 3, "name": "Pudrición de raíz", "type": "fúngica"},
        {"id": 4, "name": "Ácaros", "type": "plaga"},
        {"id": 5, "name": "Cochinillas", "type": "plaga"}
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
