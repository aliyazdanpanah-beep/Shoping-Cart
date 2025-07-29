import Navbar from "../../components/navbar/Navbar"
import Product from "../../components/product/Product"
import "./Home.css"

const Home = () => {
  return (
  <>
    <div className="Navbar-Wrapper"> <Navbar/> </div>
    <div className="Product_Wrapper"> <Product/> </div>
  </>
  )
}

export default Home