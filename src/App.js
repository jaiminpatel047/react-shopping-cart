import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css';
import Cart from './pages/Cart'
import { useState, useEffect } from 'react';
import DarkMode from './components/DarkMode';


function App() {

  const [cart, setCart] = useState([])

  const handleClick = (item) => {
    setCart([...cart, item])
  };

  const [darrk, setDarrk] = useState(false)

  useEffect(() => {
    darrk ? (document.body.classList.add('dark')) : (document.body.classList.remove('dark'))
  }, [darrk])
 
   const toggleDark = () => { setDarrk(!darrk) }
  return (
    <>
       <BrowserRouter>
                <Header size={cart.length} />  
                  <Routes>
                          <Route path='/' element={<Home handleClick={handleClick} />} exact/>
                          <Route path='/About' element={<About/>} />
                          <Route path='/Contact' element={<Contact/>} />
                          <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} />}/>
                  </Routes> 
           </BrowserRouter>
           <DarkMode toggleDark={toggleDark}/>
       <Footer />
    </>
  );
}

export default App;
