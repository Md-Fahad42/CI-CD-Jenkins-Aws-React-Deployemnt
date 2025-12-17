import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>🚀 DevOps Dashboard</h2>
        <span>Vite + React</span>
      </nav>

      <main className="content">
        <h1>Hello Fahad 👋</h1>
        <p>
          This app is built using <b>React + Vite</b> and deployed via CI/CD.
        </p>

        <div className="card">
          <h3>Counter Demo</h3>
          <p>Current count: <b>{count}</b></p>
          <div className="btn-group">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 | Deployed on AWS EC2 🚀</p>
      </footer>
    </div>
  );
}

export default App;
