import Navbar from "../../components/navbar/Navbar"
import ProductPage from "../Product/Product"
import { Route, Routes } from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
  <>
    <div className="Navbar-Wrapper"> <Navbar/> </div>
    <div className="Product_Wrapper"> <ProductPage/> </div>
  </>
  )
}

export default Home