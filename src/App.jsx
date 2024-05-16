
import { Typography } from "@material-tailwind/react";
import Crouse from './components/Crouse';
// import p from '/img/p.avif';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center h-screen '> 
    <div> 
    <Typography className='font-extrabold text-brown-400 fs-6 text-center'>Axiom Intern Details</Typography>
    <Crouse/>
    </div>
    </div>
     {/* <img src={p} alt="ccc" /> */}
    </>
  )
}

export default App
