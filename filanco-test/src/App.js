import './App.css';
import Aside from "./componenents/Aside/Aside";
import Section from "./componenents/Section/Section";

function App() {
  return (
    <div className="App">
            <Aside />
        <Section />
        <div className='designations'>
            <h3>УСЛОВНЫЕ ОБОЗНАЧЕНИЯ</h3>
            <img src="/designations.png" alt="designations"/>
        </div>    
        </div>
  );
}

export default App;
