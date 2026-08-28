import { useState } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:8000'

function App() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleAnalyze = async () => {
    if (!image) return
    
    setLoading(true)
    const formData = new FormData()
    formData.append('image', image)
    
    try {
      const response = await axios.post(`${API_URL}/analyze`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setAnalysis(response.data)
    } catch (error) {
      console.error('Error analyzing image:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
          🌴 Tropical Plant Disease Analyzer
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Subir imagen</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
            
            <button
              onClick={handleAnalyze}
              disabled={!image || loading}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Analizando...' : 'Analizar planta'}
            </button>
          </div>
          
          {/* Results Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Resultados</h2>
            
            {analysis ? (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800">Especie identificada</h3>
                  <p className="text-lg">{analysis.plant_species}</p>
                  <p className="text-sm text-gray-600">
                    Confianza: {(analysis.confidence * 100).toFixed(1)}%
                  </p>
                </div>
                
                {analysis.diseases_detected.length > 0 && (
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-bold text-red-800">Enfermedades detectadas</h3>
                    <ul className="list-disc list-inside">
                      {analysis.diseases_detected.map((disease, idx) => (
                        <li key={idx}>
                          {disease.name} - {disease.severity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800">Recomendaciones</h3>
                  <ul className="list-disc list-inside">
                    {analysis.recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-12">
                Sube una imagen para comenzar el análisis
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
