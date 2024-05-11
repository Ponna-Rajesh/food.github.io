import { useState } from "react"
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName ,setBtnName] = useState("LogIn")

    return(
        <nav>
            <div className="container">
                <div className="logo">
               <img src= { LOGO_URL}/>
                </div>
                <div className= "nav-items">
                    <ul className="nav-item">    
                      <Link to="/"> 
                        <li>Home</li>
                       </Link>
                      <Link to="/about"> 
                        <li>About</li>
                       </Link>
                      <Link to="/contact"> 
                        <li>Contact</li>
                       </Link>
                        <li>Cart</li>
                        
                        <button className="button-5" role="button" onClick={()=>{
                            btnName === "LogIn" ? setBtnName("LogOut"): setBtnName("LogIn")
                        }}>{btnName}</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header