import { createSignal } from 'solid-js'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + Solid!</p>
        <p>
          <button type="button" onClick={() => setCount(count() + 1)}>
            count is: {count()}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://solidjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
