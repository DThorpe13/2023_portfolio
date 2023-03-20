import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/nav/header';
import Banner from './components/banner/banner'
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path='about' element={<About />}/>
                <Route path='skills' element={<Skills />}/>
                <Route path='projects' element={<Projects />}/>
                <Route path='contact' element={<Contact />} />
                <Route path='*' elements={<NoPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
