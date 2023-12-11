 import { IMG_URL } from "../utils/constants";
const Cards = (props) => {
    const { resData } = props;
    const {cloudinaryImageId,name,locality,costForTwo,cuisines,avgRating}=resData?.info
    return (
       <div className="m-5  p-4 w-[250px]  rounded-xl bg-gray-300 hover:bg-gray-200" > 
        <img
          className="w-[15rem] h-[14rem] rounded-full mb-5"
          src={IMG_URL+cloudinaryImageId}
          alt="Restaurant"
        />
        <h3 className="font-bold text-lg mb-2">{name}</h3> 
        <h4 className="font-bold text-sm mb-2">{locality}</h4>
        <h4 className="font-bold mb-2">{costForTwo}</h4>
        <h4 className="mb-3">{cuisines.join(", ")}</h4> 
        <h4>{avgRating}</h4>
  
      </div>
    );
  };
export default Cards;  