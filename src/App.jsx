import { useState } from "react";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="landing">
        <div className="hero">
          <h1 className="title">
            Welcome to <span>DevOps World</span> 🚀
          </h1>

          <p className="subtitle">
            Build • Deploy • Monitor • Scale
          </p>

          <div className="actions">
            <button className="primary" onClick={() => setStarted(true)}>
              Get Started
            </button>
            <button className="secondary">
              View GitHub
            </button>
          </div>

          <div className="stats">
            <div>
              <h3>⚙️ CI/CD</h3>
              <p>Automated Pipelines</p>
            </div>
            <div>
              <h3>☁️ Cloud</h3>
              <p>AWS Deployment</p>
            </div>
            <div>
              <h3>📊 Monitoring</h3>
              <p>Grafana + Prometheus</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Dashboard Loaded ✅</h1>
      <p>This page is rendered after interaction.</p>
      <button onClick={() => setStarted(false)}>⬅ Back</button>
    </div>
  );
}

export default App;
