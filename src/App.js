import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";


function App() {
  return (

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Projetos" element={<Projects/>}/>
          <Route path="Contato" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      
  )
}

export default App;
