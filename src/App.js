import logo from './logo.svg';
import './App.css';
import profile from './profile.jpeg';
import React, { useState } from 'react';
import entrepreneur from './image.png';

function App(){
  

  return (
    <div className='Background'>
      
      <section className='Header'>
        <img src={logo} className="appLogo" alt="ReactLogo"></img>
        <ul className='options'>
          <listItem className='optionItem' style={{ cursor: 'pointer' }}>Home</listItem>
          <listItem className='optionItem' style={{ cursor: 'pointer' }}>Gallery</listItem>
          <listItem className='optionItem' style={{ cursor: 'pointer' }}>Products</listItem>
          <listItem className='optionItem' style={{ cursor: 'pointer' }}>Job openings</listItem>
        </ul>
        <img src={profile} className="profile" alt="profile"  style={{ cursor: 'pointer' }}></img>
      </section>

      <img src={entrepreneur} className='Entrepreneur-pic' alt="entreprenuer-image"></img>
    </div>
  );
}

export default App;
