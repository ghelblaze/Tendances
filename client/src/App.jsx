import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import TopHeader from './components/TopHeader/TopHeader'
import Home from './pages/Homes/Home'
import Propos from "./pages/Propos/Propos"
import Blog from "./pages/Blog/Blog"

function App() {
  

  return (
    <BrowserRouter>
      <TopHeader/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/propos" element={<Propos/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App



