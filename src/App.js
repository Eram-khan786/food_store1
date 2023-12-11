import React, { useEffect, useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Head from "./components/Head";
import Body from './components/Body';
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import AboutUs from "./pages/AboutUs";/
import Contact from "./pages/Contact";
import Error from "./pages/Error";
// import Cart from "./pages/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider   } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./pages/Cart";


const MainContainer = () => {

  const [userName,setUserName]=useState();
  // Authentication Logic
  useEffect(()=>{
    //  Make an API call and send username and password

    const data={
      name:"Eram"
    }
    setUserName(data.name)
  },[])
  return(
    <Provider store={appStore}>     
      <UserContext.Provider value={{loggedIn:userName,setUserName}}>
        <div>
         <Head />
         <Outlet/>
        </div>
       </UserContext.Provider>
    </Provider>
 
  )
};

const routerConfig=createBrowserRouter([
  {
    path:'/',
    element:<MainContainer/>,
    children:[
      {
         path:'/',
         element:<Body/>
      },
      
      {
        path:"/contact",
        element:<Contact/>
      },
      {
         path:"/cart",
        element:<Cart/>
      }
      ,{
        path:"/restaurant/:resID",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  }

])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider  router={routerConfig}/>)
