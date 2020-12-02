import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sitio en construcción
        </p>
        <h5>
          Mientras tanto, visitanos en <span class="underline">
            <a
            className="App-link"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
                >Instagram!
            </a>
            </span>
        </h5>
      </header>
    </div>
  );
}

export default App;
