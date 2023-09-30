import Home from "./componentes/Home/home";
import Navigation from "./componentes/nabvar/Nabvar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./componentes/404/NotFound";


function App() {
  return (
      <BrowserRouter>
        <div id="top">
          <Navigation />
        </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
