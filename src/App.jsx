import { useState } from 'react'
import Home from './pages/Home'
import Location from './pages/Location'
import Travel from './pages/Travel'
import Accommodation from './pages/Accommodation'
import RSVP from './pages/RSVP'
import ErrorPage from './pages/ErrorPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Modal from './components/Modal'

function App() {
  const [open, setOpen] = useState(true)

  if(open) {
    return (
        <Modal className='full-screen' open={open} onClose={() => setOpen(false)}>
        </Modal>
    )
  } else {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/location' element={<Location />} />
            <Route path='/travel' element={<Travel />} />
            <Route path='/accommodation' element={<Accommodation />} />
            <Route path='/rsvp' element={<RSVP />} />
            <Route path='*' element={<ErrorPage />}/>
          </Routes>
        </Router>
      </>
    )
  }
  return (
    <>
    
      {/* <button className='flex gap-2 items-center justify-center py-2 px-4 font-semibold shadow-md rounded-lg text-white bg-red-600' onClick={() => setOpen(false)}>
        
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className=''>X</div>
      </Modal> */}
      
    </>
  )
}

export default App
