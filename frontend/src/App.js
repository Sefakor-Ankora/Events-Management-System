
import React from 'react'
import './App.css';
// import Particles from 'react-particles-js'; //imported this component for the background
import  Stepforms  from './components/Stepforms';
// import Logo from './components/Login/Logo';
// import Landing from './components/Login/Landing';
// import Details from './components/Login/Details';
// import Event from './components/Event';
// import EventLayout from './components/EventLayout';



const App = () => {

// const particlesOptions = {          //created a function for the background
//   particles: {
//     number: {
//       value: 100,
//       density: true,
//       enable: 800
//     }
//   }
// }


  return (
    <div className='App'>
        {/* <Particles className='particles'
           params={ particlesOptions } 
        /> */}
        {/* <Details/> */}
        {/* <Landing/> */}
        {/* <Logo/> */}
       <Stepforms />
       {/* <Event/> */}
       {/* <EventLayout/> */}

       
    </div>
  )
}

export default App
