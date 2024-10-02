import './App.css';
import Home from './_pages/homepage/Home';
import NavbarComp from './_pages/navigation/NavbarComp';
import "../src/_styles/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './_pages/navigation/Layout';
function App() {
  return (
    <div className="App">
      {/* <NavbarComp />
      <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
