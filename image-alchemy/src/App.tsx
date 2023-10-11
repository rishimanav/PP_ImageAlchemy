import './App.css'
import './components/Toolbar';
import Toolbar from './components/Toolbar';
import Workspace from './components/Workspace'

function App() {
  return (
    <div className="App d-flex gap-2 ">
      <Toolbar/>
      <Workspace/>    
    </div>
  );
}

export default App;
