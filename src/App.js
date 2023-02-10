import './App.css';
import './css/style.css';
import Navbar from './Components/Navbar';
import Head from './Components/Head';
import Phead from './Components/Phead';
import Service from './Components/service'
import Freelancer from './Components/Freelancer'
import Client from './Components/Client'
import Work from './Components/Work'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Pfoot from './Components/Pfoot';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/"  element = {<Head />} />
        <Route exact path="/about"  element = {<Phead/>} />
        <Route exact path="/service"  element = {<Service/>} />
        {/* <Route exact path="/freelancer"  element = {<Freelancer/>} /> */}
        <Route exact path="/client"  element = {<Client/>} />
        <Route exact path="/work"  element = {<Work/>} />
        <Route exact path="/blog"  element = {<Blog/>} />
        <Route exact path="/contact"  element = {<Contact/>} />
        {/* <Route exact path="/footer"  element = {Pfoot} /> */}
        </Routes>
        {/* <Head />
        <Phead />
        <Service />*/}
        <Freelancer />
        <Client />
        {/* <Work />
        <Blog />
        <Contact /> */}
        <Pfoot /> 
    </>
  );
}

export default App;
