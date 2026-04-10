import { Outlet } from "react-router-dom"
import Nav from "./nav/nav"
import Footer from "./footer/Footer"


const Root = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default Root