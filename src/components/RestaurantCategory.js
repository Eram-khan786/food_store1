 import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({category, showItems,  setShowIndex}) => {
  // console.log(category)
  // const [show,setShow]=useState(false)

  // const handleClick=()=>{
  //   setShow(!show)
  //   console.log("Clicked")
  // }

  
  const handleClick=()=>{
    setShowIndex();
  }
  return (
    <div>
      <div className='w-6/12 bg-gray-200 shadow-lg p-4 mx-auto my-4 ' >
        <div className='flex justify-between' onClick={handleClick}>        
          <span className='font-bold text-lg cursor-pointer'>{category.title} ({category.itemCards.length})  </span>
          <span>🔽</span>
        </div>
        {/* {show && <ItemList List={category.itemCards}/>} */}
        {showItems && <ItemList List={category.itemCards}/>}

      
      </div>
    </div>
  )
}

export default RestaurantCategory;