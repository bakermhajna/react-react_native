import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header.js"
import Content from "./Components/Content.js"
import Fotter from "./Components/Fotter.js"

function App() {
  return (
    <div className="App">
    <Header/>
    <Content/>
    <Fotter/>
    </div>
  );
}

export default App;
