// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import { lazy } from 'react'
import LazyLayout from './Components/LazyLayout'
const LazyLogin = lazy(()=> import("./Pages/Login/Login"))

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        {/* <Route path='/' element={<Login/>}></Route> */}
        <Route path="/" element={<LazyLayout component={LazyLogin}/>}/>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
    
    </BrowserRouter>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
