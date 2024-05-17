
import './App.css'

function App() {
  

  return (
    <div className="App">
      <div className="navbar">
        <h2>FITGURU</h2>
        <a href="">HOME</a>
        <a href="">EXERCISES</a>
      </div>
      <div className="container">
        <h2>FASTER, STRONGER FIGHT TO THE END</h2>
        <button>Get All Exercise</button>
      </div>
      <div className="lower">
        <h4>Awesome Exercises You Should Know</h4>
        <input type="text" placeholder='Search Exercises'/>
        <button id="btn">SUBMIT</button>
      </div>
      <div className="footer">
        <h2>FITGURU</h2>
      </div>
    </div>
  )
}

export default App
