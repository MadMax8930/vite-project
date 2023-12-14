import { BrowserRouter } from 'react-router-dom';
import { Navbar, CitiesTab, TextContent } from './components'

function App() {
  return (
    <BrowserRouter>
      <div className='relative'>
        <Navbar />
        <CitiesTab />
        <TextContent />
      </div>
    </BrowserRouter>
  )
}

export default App
