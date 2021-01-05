import logo from './logo.svg';
import './App.css';
import {Card} from './components/Card';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <Card name="Jane"/>
      <Box name="John"/>
    </div>
  );
}

export default App;
