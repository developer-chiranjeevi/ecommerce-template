import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Achivements from './components/Achivements';
import Products from './components/Products';
import Footer from './components/Footer';

const App = () =>{

  return(
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Banner />
      </div>
      <div className="">
        <Achivements />
      </div>
      <div className="">
        <Products />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default App;