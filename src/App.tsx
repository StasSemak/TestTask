import HomePage from "./components/home/HomePage"
import Header from "./components/layout/Header"

function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <HomePage/>
      </main>
    </div>
  )
}

export default App
