import './App.css'
import Banner from './components/Banner/Banner'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import Furnituro from './components/Furnituro/Furnituro'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Rooms from './components/Rooms/Rooms'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Products />
      <Rooms />
      <Furnituro />
      <Footer/>
    </>
  )
}

export default App
