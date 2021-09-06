import React from 'react';
import './App.css';
import $ from 'jquery';
import Navigation from './Components/Navigation/navigation';
import Animation from './Components/Animation/animation';
import Header from './Components/Header/header';
// import Main from './Components/MainInfo/mainInfo';
import Skills from './Components/Skills/skills';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <React.Fragment>
      <div class="radial-gradient" id="gradient">
      <Animation/>  
      <Navigation/> 
         
        <Header/>
        <Skills/>
        {/* <Main/> */}
        <Footer/>
        </div>
    </React.Fragment>
  );
}

export default App;
