import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInputvalue } from '../utils/inputslice';
import LocationCard from "./locationCard"
import Shimmer from './Shimmer';

const body = () => {
    const [search,setSearch]=useState("");
    const [details,setDetails]=useState([]);
    
    let value=useSelector((store)=>store?.inputdata?.inputvalue)

    // let value=110088;
 

    const dispatch=useDispatch();
    
    const putdata=()=>{
        dispatch(setInputvalue(search));
        
    }
    
   

  const HandleApi=async()=>{
   
      const data=await fetch(`https://api.zippopotam.us/in/${value}`);
      const res=await data.json();
      
     
      setDetails(res?.places)
     
      
    }

    useEffect(()=>{
      HandleApi();
  },[value])


  return (
    <div className='w-full'>
        <div className='bg-gray-500 mt-10'>
            <div className='p-7 flex justify-center'> 
            <input type="text" className='border-2 border-black w-96' placeholder='input any pincode to find places nearby...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={putdata} className='bg-black text-white rounded-lg p-1 hover:bg-white hover:text-black'>search</button>
            </div>
            
        </div>

        <div className='flex justify-center flex-wrap gap-10' >
          
          {
             details.map((item)=>{
              return <LocationCard {...item} place={item["place name"]} />
            })
          }
        </div>
        
    </div>
  )
}

export default body