import { useState,useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
let Head = () => {
    
    const [btn,setBtn] = useState("LogIn")
    const onlineStatus=useOnlineState();
    const {loggedIn}=useContext(UserContext)
    const handleBtn=()=>{
      btn==="LogIn"?setBtn("LogOut"):setBtn("LogIn")
    }
    // Subscribing to the store using Selector
    const  cartItems=useSelector((store)=>
    store.cart.items)
    console.log(cartItems)
    return (
      <div className="flex justify-between shadow-lg">
        <div>
          <img className="w-24 " src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">  
          <ul className="flex p-4 m-4">
            <li className="px-3">Online Status:{onlineStatus?"✅":"🔴"}</li>
            <li className="px-3"><Link to='/'>Home</Link></li>
            {/* <li className="px-3"><Link to='/about'>About Us</Link></li> */}
            <li className="px-3"><Link to='/contact'>Contact</Link></li>
            <li className="px-3"><Link to='/cart'>Cart({cartItems.length} items)</Link></li>
            <button className="Button"  onClick={()=>
            //  btn==="LogIn"?setBtn("LogOut"):setBtn("LogIn")
            handleBtn()
            }>{btn}</button>
            <li className="px-3 font-bold">{loggedIn}</li>
          </ul>
        </div>
      </div>
    );
  };
export default Head  