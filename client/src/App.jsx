import React, { useState } from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import TopHeader from './components/TopHeader/TopHeader'
import Home from './pages/Homes/Home'
import Propos from "./pages/Propos/Propos"
import Blog from "./pages/Blog/Blog"
import Professionnels from "./pages/professionnels/Professionnels"
import Particuliers from "./pages/particuliers/Particuliers"

function App() {
  const [contact,setContact]=useState(false);
  const toggleContact = ()=>{
      setContact(!contact)
      console.log("msg")
      console.log(contact)
  }

  return (
    <BrowserRouter>
      <TopHeader contact={contact} toggle={toggleContact}/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home contact={contact} toggle={toggleContact}/>}/>
        <Route path="/propos" element={<Propos/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/professionnels" element={<Professionnels/>}/>
        <Route path="/particuliers" element={<Particuliers/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App



