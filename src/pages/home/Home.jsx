import Featured from "../../components/featured/Featured"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Propertylist from "../../components/propertylist/Propertylist"
import "./home.css"
 const Home = ()=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                
                <Propertylist/>
            </div>
        </div>
    )
 }
 export default Home 