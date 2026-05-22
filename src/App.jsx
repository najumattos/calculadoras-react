import './App.css'
import CalculadoraOrcamento from './screens/CalculadoraOrcamento'
import CalculadoraIMC from './screens/CalculadoraIMC'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', padding: '20px' }}>
      
     <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <CalculadoraOrcamento />
        <CalculadoraIMC />
      </div>

     <a 
        href="https://github.com/najumattos/aula-react" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#24292e', // Cor clássica do GitHub
          color: '#ffffff',
          padding: '12px 24px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
          transition: 'background-color 0.2s ease',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
        // Efeito simples de hover puro via JavaScript inline (opcional)
        onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#24292e'}
      >
         Ver no GitHub
      </a>

    </div>
  )
}

export default App;