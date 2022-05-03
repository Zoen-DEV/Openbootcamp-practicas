import Clock from './components/componentOriginal';
import ComponenteFuncional from './components/componenteFuncional';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <span>componente original</span>
      <Clock />
      <span>componente funcional</span>
      <ComponenteFuncional />
    </div>
  );
}

export default App;
