// Base de datos de plantas tropicales
const plantsDatabase = [
    {
        id: 1,
        name: "Monstera deliciosa",
        commonName: "Costilla de Adán",
        colors: ["#2d5016", "#3a6b1f", "#4a8f2e"],
        care: {
            light: "Luz indirecta brillante",
            water: "Regar cuando el suelo esté seco (1-2 veces/semana)",
            humidity: "Alta (60-80%)",
            temperature: "18-27°C"
        },
        commonDiseases: [
            {
                name: "Mancha foliar",
                symptoms: "Manchas marrones o amarillas en las hojas",
                treatment: "Mejorar circulación de aire, reducir humedad, aplicar fungicida"
            },
            {
                name: "Pudrición de raíz",
                symptoms: "Hojas amarillas, suelo muy húmedo",
                treatment: "Reducir riego, mejorar drenaje, trasplantar"
            }
        ]
    },
    {
        id: 2,
        name: "Ficus lyrata",
        commonName: "Árbol de violín",
        colors: ["#1e3f0f", "#2d5016", "#3a5f22"],
        care: {
            light: "Luz brillante indirecta",
            water: "Regar cuando 2-3 cm de suelo estén secos",
            humidity: "Media (40-60%)",
            temperature: "15-24°C"
        },
        commonDiseases: [
            {
                name: "Caída de hojas",
                symptoms: "Hojas que se caen repentinamente",
                treatment: "Evitar corrientes de aire, mantener temperatura estable"
            },
            {
                name: "Moho gris",
                symptoms: "Polvo gris en hojas",
                treatment: "Mejorar ventilación, aplicar fungicida"
            }
        ]
    },
    {
        id: 3,
        name: "Calathea ornata",
        commonName: "Calatea",
        colors: ["#2d5016", "#4a7c2e", "#6b9c4a"],
        care: {
            light: "Luz media indirecta",
            water: "Mantener suelo húmedo (no encharcado)",
            humidity: "Alta (60-80%)",
            temperature: "18-24°C"
        },
        commonDiseases: [
            {
                name: "Bordes marrones",
                symptoms: "Bordes de hojas secos y marrones",
                treatment: "Aumentar humedad, usar agua destilada"
            },
            {
                name: "Ácaros",
                symptoms: "Puntos amarillos, telarañas finas",
                treatment: "Aumentar humedad, aplicar acaricida"
            }
        ]
    },
    {
        id: 4,
        name: "Philodendron scandens",
        commonName: "Filodendro trepador",
        colors: ["#2d5016", "#3a6b1f", "#4a7c2e"],
        care: {
            light: "Luz media a brillante indirecta",
            water: "Regar cuando suelo esté seco",
            humidity: "Media-Alta (50-70%)",
            temperature: "16-26°C"
        },
        commonDiseases: [
            {
                name: "Hojas amarillas",
                symptoms: "Hojas inferiores amarillas",
                treatment: "Reducir riego, verificar drenaje"
            },
            {
                name: "Cochinillas",
                symptoms: "Masas blancas algodonosas",
                treatment: "Limpiar con alcohol, aplicar insecticida"
            }
        ]
    },
    {
        id: 5,
        name: "Pothos (Epipremnum aureum)",
        commonName: "Potos",
        colors: ["#2d5016", "#3a6b1f", "#5c8a3d"],
        care: {
            light: "Luz baja a brillante indirecta",
            water: "Regar cuando suelo esté seco",
            humidity: "Media (40-60%)",
            temperature: "15-29°C"
        },
        commonDiseases: [
            {
                name: "Pudrición de raíz",
                symptoms: "Hojas amarillas, tallos blandos",
                treatment: "Reducir riego, mejorar drenaje"
            },
            {
                name: "Manchas foliares",
                symptoms: "Manchas marrones con bordes amarillos",
                treatment: "Mejorar circulación, aplicar fungicida"
            }
        ]
    },
    {
        id: 6,
        name: "Sansevieria trifasciata",
        commonName: "Lengua de suegra",
        colors: ["#1e3f0f", "#2d5016", "#3a5f22"],
        care: {
            light: "Luz baja a brillante",
            water: "Regar poco (cada 2-3 semanas)",
            humidity: "Baja (30-50%)",
            temperature: "15-29°C"
        },
        commonDiseases: [
            {
                name: "Pudrición por exceso de agua",
                symptoms: "Hojas blandas, base marrón",
                treatment: "Reducir riego drásticamente, trasplantar"
            }
        ]
    }
];

// Enfermedades comunes
const commonDiseases = [
    {
        name: "Mancha foliar",
        type: "fúngica",
        symptoms: "Manchas marrones, amarillas o negras en hojas",
        causes: "Exceso de humedad, mala circulación",
        treatment: "Mejorar ventilación, reducir humedad, aplicar fungicida"
    },
    {
        name: "Pudrición de raíz",
        type: "fúngica",
        symptoms: "Hojas amarillas, suelo muy húmedo, olor desagradable",
        causes: "Exceso de riego, mal drenaje",
        treatment: "Reducir riego, mejorar drenaje, trasplantar"
    },
    {
        name: "Moho gris",
        type: "fúngica",
        symptoms: "Polvo gris en hojas y tallos",
        causes: "Alta humedad, poca ventilación",
        treatment: "Mejorar circulación, aplicar fungicida"
    },
    {
        name: "Ácaros",
        type: "plaga",
        symptoms: "Puntos amarillos, telarañas finas, hojas secas",
        causes: "Ambiente seco, calor",
        treatment: "Aumentar humedad, aplicar acaricida"
    },
    {
        name: "Cochinillas",
        type: "plaga",
        symptoms: "Masas blancas algodonosas, hojas amarillas",
        causes: "Planta debilitada",
        treatment: "Limpiar con alcohol, aplicar insecticida"
    },
    {
        name: "Pulgones",
        type: "plaga",
        symptoms: "Pequeños insectos verdes/negros, hojas enrolladas",
        causes: "Temperaturas cálidas",
        treatment: "Lavar con agua, aplicar insecticida"
    }
];
