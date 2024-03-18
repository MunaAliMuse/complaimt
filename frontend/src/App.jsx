
import Addmin from './pages/Addmin'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './componants/Menu'
import Contact from "./pages/Contact"
function App() {
    
 return <Routes>

<Route path='/' element={<Home/>} />
<Route path='/Addteacher' element={<Addmin/>} />
<Route path='/Mune' element={<Menu/>} />
<Route path='/Contact' element={<Contact/>} />

 </Routes>
}

export default App
