import Navbar from './components/common/Navbar'
// import { useContext } from 'react';
// import { Context } from "./context/Provider";
import { Route, Routes } from 'react-router-dom';
import Web from './pages/Web. Page/Web';
import Dev from './pages/Dev. Page/Dev'
import Home from './pages/HomePage/Home';

function App() {

  // const { html, setHtml, css, setCss, js, setJs } = useContext(Context);

  return (
    <div className="WholeContainer">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/webdevelopment' element={<Web />} />
        <Route path='/development' element={<Dev />} />
      </Routes>
    </div>
  );
}

export default App;