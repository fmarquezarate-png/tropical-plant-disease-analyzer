@echo off
REM Script de inicio para el backend (Windows)

echo Iniciando servidor FastAPI...

REM Crear entorno virtual si no existe
if not exist "venv" (
    echo Creando entorno virtual...
    python -m venv venv
)

REM Activar entorno virtual
call venv\Scripts\activate

REM Instalar/actualizar dependencias
pip install -r requirements.txt

REM Iniciar servidor
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
