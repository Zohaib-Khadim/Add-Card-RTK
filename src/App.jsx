import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
// import SingleProducts from './pages/SingleProducts';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  

  return (
    <>
      <div className='App'>
        <Provider store={store}>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          {/* <Route path='/SingleProduct/:id' element={<SingleProducts/>}></Route> */}
        </Routes>
        </BrowserRouter>
        </Provider>
      </div>
    </>
  )
}

export default App
