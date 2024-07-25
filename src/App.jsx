
import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent';

function App() {

  const name = 'Johan Cano';

  return (
    <>
      <div>
        <h3>Práctica de Componentes</h3>
        {/* Cargar el primer componente */}
        <MyComponent 
          name={name}
          lastName="Cano"
        />
        <h4>Segundo componente</h4>
        <SecondComponent />
      </div>
    </>
  )
}

export default App
