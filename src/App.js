import logo from "./logo.svg";
import "./App.css";
import PropsComponent from "./Components/props-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Props</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-props"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <PropsComponent />
      </header>
    </div>
  );
}

export default App;
