import Cards from "./Cards";
// import useOnlineState from "../utils/useOnlineState";
// import restaurants from "../utils/Data";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  // const {loggedIn}=useContext(UserContext)
  // console.log(loggedIn)
  const [list, setList] = useState([]);
  const [input,setInput]=useState("")
  const [store,setStore]=useState(list)
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    let data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6244806999&page_type=DESKTOP%20WEB_LISTING"
    );

    const json = await data.json(); 
    // console.log(json.data)
    setList( 
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setStore(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    )
  };
  if (!list || list.length === 0) {
    return <Shimmer />;
  }

  const {loggedIn,setUserName}=useContext(UserContext)
  // if (useOnlineState===false) return <h1>you are offline ,please check your internet connection</h1>
  return  (
    <div className="">
      <div className="flex justify-between mb-5">
        <div >
          <input
            className="p-2 mb-3 border border-solid border-black ml-4 w-56 mt-3 rounded-lg "
            type="text"
            placeholder="What you Wanna buy"
            value={input}
            onChange={(e)=>{
              setInput(e.target.value)
            }}
          ></input>
          <button className="bg-green-600 ml-2 rounded-lg p-2 m-0 w-24 text-white " onClick={()=>{
             const filteredList=list.filter((res)=>{
              return (res.info.name.toLowerCase().includes(input.toLowerCase()))
             })
          setStore(filteredList)
          }}>Search</button>

        </div>
        <div
            className="p-2 mb-3 border border-solid border-black ml-4 w-84 mt-3 rounded-lg flex"
          >
            <label>UserName:</label>
            <input className="border border-black mx-1 rounded-lg" value={loggedIn} onChange={(e)=>setUserName(e.target.value)}/>

          </div> 
        <button
          className="m-4 p-1 border border-solid rounded-lg bg-gray-300"
          onClick={() => {
            let myFilteredList = list.filter((ele) => {
              return ele.info.avgRating > 4.1;
            });
            setStore(myFilteredList)
          
          }}
        
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap">
        {store.map((ele) => (
          <Link  key={ele.info.id} to={'/restaurant/'+ ele.info.id}><Cards resData={ele} /></Link>
        ))}
      </div>
    </div>
  );
};
 
export default Body;
  