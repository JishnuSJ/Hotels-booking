import React from "react";
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
//import Result from "../../components/results/Result"
 const List = ()=>{
    return(
        <div>
            <Navbar/>
            <Header type='list'/>
            {/* <Result/> */}
        </div>
    )
 }
 export default List