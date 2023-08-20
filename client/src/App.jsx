import './App.css'
import Blog from './components/Blog'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import Shop from './components/Shop'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Services />
      <Shop />
      <Blog />
    </div>
  )
}

export default App
