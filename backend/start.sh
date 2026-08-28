#!/bin/bash
# Script de inicio para el backend

echo "Iniciando servidor FastAPI..."

# Instalar dependencias si no existen
if [ ! -d "venv" ]; then
    echo "Creando entorno virtual..."
    python -m venv venv
fi

# Activar entorno virtual
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar/actualizar dependencias
pip install -r requirements.txt

# Iniciar servidor
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
