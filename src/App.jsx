// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Typography } from "@material-tailwind/react";
// import { Rating } from "@material-tailwind/react";
import Crouse from './components/Crouse';
// import Car from './components/Car';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center h-screen '> 
    <div> 
    <Typography className='font-extrabold text-brown-400 fs-6 '>Axiom Intern Details</Typography>
    <Crouse/>
    </div>
    </div>

    </>
  )
}

export default App
