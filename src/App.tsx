import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Juan Ismael Camacho Cervantes - CICD Course - Github Pages QA</code>
        </p>
        <a
          className="App-link"
          href="https://merry-beijinho-b404c5.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to QA
        </a>
        <a
          className="App-link"
          href="https://ismaelcamacho-hexaware.github.io/isma-deployment/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Production
        </a>
      </header>
    </div>
  );
}

export default App;
