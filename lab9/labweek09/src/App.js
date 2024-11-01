import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <Welcome 
      studentId="100749684" 
      studentName="Trang Nguyen" 
      school="George Brown College, Toronto"/>
    </div>
  );
}

export default App;
