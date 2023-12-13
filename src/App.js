import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Doe from "./components/pages/Doe";
import Voluntarios from "./components/pages/Voluntarios";
import Associado from "./components/pages/Associado";


function App() {
  return (

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Projetos" element={<Projects/>}/>
          <Route path="Contato" element={<Contact/>}/>
          <Route path="Doe" element={<Doe />} />
          <Route path="Voluntario" element={<Voluntarios />} />
          <Route path="Associado" element={<Associado />} />
        </Routes>
        <Footer/>
      </Router>
      
  )
}

export default App;
