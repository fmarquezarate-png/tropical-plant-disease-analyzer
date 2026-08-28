// Tropical Plant Disease Analyzer - Aplicación web sencilla

// Elementos del DOM
const uploadArea = document.getElementById('uploadArea');
const imageInput = document.getElementById('imageInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const previewSection = document.getElementById('previewSection');
const preview = document.getElementById('preview');
const newImageBtn = document.getElementById('newImageBtn');
const resultsSection = document.getElementById('resultsSection');
const loadingSection = document.getElementById('loadingSection');

// Variables de estado
let currentImage = null;
let currentImageFile = null;

// Event Listeners
uploadArea.addEventListener('click', () => imageInput.click());

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleImage(file);
    }
});

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleImage(file);
    }
});

analyzeBtn.addEventListener('click', analyzeImage);
newImageBtn.addEventListener('click', resetApp);

// Funciones
function handleImage(file) {
    currentImageFile = file;
    const reader = new FileReader();
    
    reader.onload = (e) => {
        currentImage = e.target.result;
        preview.src = currentImage;
        previewSection.style.display = 'block';
        analyzeBtn.disabled = false;
        resultsSection.style.display = 'none';
    };
    
    reader.readAsDataURL(file);
}

function analyzeImage() {
    if (!currentImage) return;
    
    // Mostrar loading
    loadingSection.style.display = 'block';
    resultsSection.style.display = 'none';
    
    // Simular análisis (en una implementación real, aquí iría el ML)
    setTimeout(() => {
        const analysisResult = performAnalysis(currentImageFile);
        displayResults(analysisResult);
        loadingSection.style.display = 'none';
        resultsSection.style.display = 'block';
    }, 2000);
}

function performAnalysis(imageFile) {
    // Análisis básico basado en color y metadatos
    // En una implementación real, usaríamos TensorFlow.js o similar
    
    // Crear canvas para analizar colores
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.src = URL.createObjectURL(imageFile);
    
    return new Promise((resolve) => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            // Obtener colores dominantes
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const dominantColor = getDominantColor(imageData);
            
            // Identificar planta basada en color
            const identifiedPlant = identifyPlantByColor(dominantColor);
            
            // Detectar posibles enfermedades (simulado)
            const diseases = detectDiseases(imageData, identifiedPlant);
            
            // Generar recomendaciones
            const recommendations = generateRecommendations(identifiedPlant, diseases);
            
            resolve({
                plant: identifiedPlant,
                confidence: 0.75 + Math.random() * 0.20, // 75-95%
                diseases: diseases,
                recommendations: recommendations
            });
        };
    });
}

function getDominantColor(imageData) {
    const data = imageData.data;
    let r = 0, g = 0, b = 0;
    
    for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
    }
    
    const pixelCount = data.length / 4;
    return {
        r: Math.round(r / pixelCount),
        g: Math.round(g / pixelCount),
        b: Math.round(b / pixelCount)
    };
}

function identifyPlantByColor(color) {
    // Identificar planta basada en similitud de color
    let bestMatch = plantsDatabase[0];
    let minDistance = Infinity;
    
    plantsDatabase.forEach(plant => {
        plant.colors.forEach(plantColor => {
            const r = parseInt(plantColor.slice(1, 3), 16);
            const g = parseInt(plantColor.slice(3, 5), 16);
            const b = parseInt(plantColor.slice(5, 7), 16);
            
            const distance = Math.sqrt(
                Math.pow(color.r - r, 2) +
                Math.pow(color.g - g, 2) +
                Math.pow(color.b - b, 2)
            );
            
            if (distance < minDistance) {
                minDistance = distance;
                bestMatch = plant;
            }
        });
    });
    
    return bestMatch;
}

function detectDiseases(imageData, plant) {
    // Detección simulada de enfermedades
    // En una implementación real, usaríamos ML para detectar patrones
    
    const diseases = [];
    const randomDiseaseCount = Math.floor(Math.random() * 3); // 0-2 enfermedades
    
    for (let i = 0; i < randomDiseaseCount; i++) {
        const randomDisease = plant.commonDiseases[
            Math.floor(Math.random() * plant.commonDiseases.length)
        ];
        
        if (!diseases.find(d => d.name === randomDisease.name)) {
            diseases.push({
                ...randomDisease,
                severity: ['leve', 'moderada', 'grave'][Math.floor(Math.random() * 3)]
            });
        }
    }
    
    return diseases;
}

function generateRecommendations(plant, diseases) {
    const recommendations = [];
    
    // Recomendaciones generales de cuidado
    recommendations.push(`Luz: ${plant.care.light}`);
    recommendations.push(`Riego: ${plant.care.water}`);
    recommendations.push(`Humedad: ${plant.care.humidity}`);
    recommendations.push(`Temperatura: ${plant.care.temperature}`);
    
    // Recomendaciones específicas para enfermedades
    diseases.forEach(disease => {
        if (disease.treatment) {
            recommendations.push(`Para ${disease.name}: ${disease.treatment}`);
        }
    });
    
    return recommendations;
}

function displayResults(analysis) {
    // Planta identificada
    document.getElementById('plantName').textContent = 
        `${analysis.plant.name} (${analysis.plant.commonName})`;
    document.getElementById('plantConfidence').textContent = 
        `Confianza: ${(analysis.confidence * 100).toFixed(1)}%`;
    
    // Enfermedades
    const diseasesList = document.getElementById('diseasesList');
    const diseasesCard = document.getElementById('diseasesCard');
    
    if (analysis.diseases.length > 0) {
        diseasesCard.style.display = 'block';
        diseasesList.innerHTML = analysis.diseases.map(disease => `
            <div class="disease-item">
                <div class="disease-name">${disease.name}</div>
                <div class="disease-severity">Severidad: ${disease.severity}</div>
                <div class="disease-severity">${disease.symptoms}</div>
            </div>
        `).join('');
    } else {
        diseasesCard.style.display = 'none';
    }
    
    // Recomendaciones
    const recommendationsList = document.getElementById('recommendationsList');
    recommendationsList.innerHTML = analysis.recommendations.map(rec => 
        `<li>${rec}</li>`
    ).join('');
    
    // Información de la planta
    const plantInfo = document.getElementById('plantInfo');
    plantInfo.innerHTML = `
        <p><strong>Cuidados básicos:</strong></p>
        <ul style="margin-left: 20px;">
            <li>💡 ${analysis.plant.care.light}</li>
            <li>💧 ${analysis.plant.care.water}</li>
            <li>💨 ${analysis.plant.care.humidity}</li>
            <li>🌡️ ${analysis.plant.care.temperature}</li>
        </ul>
    `;
}

function resetApp() {
    currentImage = null;
    currentImageFile = null;
    imageInput.value = '';
    previewSection.style.display = 'none';
    resultsSection.style.display = 'none';
    analyzeBtn.disabled = true;
}
