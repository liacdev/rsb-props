import logo from "./logo.svg";
import "./App.css";
import PropsComponent from "./Components/props-component";
import Garage from "./Components/car";
import Car from "./Components/car";
import Doodly from "./Components/props-component";

function Welcome(props) {
  return <h3>Hello, {props.name}</h3>;
}

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
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Welcome name="I finally got props to work on this page!" />
        <Welcome name="The next step is to import a component that is using props" />
        <Car />
        <Garage />
        <Doodly />
        <PropsComponent />
      </header>
    </div>
  );
}

export default App;
