import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    

    const handelClick=()=>{
   setShowIndex()
   
    }
   
  return (
    <div>
        <div className='w-6/12 rounded-lg mx-auto bg-gray-200 my-4  p-4 '>

            <div className='cursor-pointer font-bold text-lg flex justify-between' onClick={()=>handelClick()}>
            <span>{data.title}({data.itemCards.length})</span>
            <span className='w-10'>⬇️</span>
            </div>
            
           
            {showItems && <ItemList items={data.itemCards}/>}
            
        </div>
      
    </div>
  )
}

export default RestaurantCategory
