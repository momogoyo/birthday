import './app.css'
import Header from './components/Header'
import Scene from './components/Scene'
import Footer from './components/Footer'

export function App() {
  return (
    <div className="happy-birthday">
      <Header />
      <Scene />
      <Footer />

      <div className="background"></div>
    </div>
  )
}
