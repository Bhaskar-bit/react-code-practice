import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

/**
* @author
* @function Github
**/

export const Github = (props) => {
  const data =  useLoaderData()
// const [data,setData] = useState([])
//     useEffect(()=>{
//         fetch('https://github.com/Bhaskar-bit').then((data) => {console.log(data);
//          setData(data)})
// },[])
  return(
    <div>Github followers :{data.followers} 
    <img src={data.avatar_url} width={300}/>
    </div>

   )
  }

  export const gitHubInfoLoader = async ()=>{
   const rep = await fetch('https://github.com/Bhaskar-bit')
   return rep;
  }
