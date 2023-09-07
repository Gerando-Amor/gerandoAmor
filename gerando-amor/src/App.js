import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";



function App() {
  return (

      <Router>
        <Navbar>
          <Container>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </Container>
        </Navbar>
      </Router>
      
  )
}

export default App;
