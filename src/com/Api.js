import React, { useEffect, useState } from 'react'

export default   function Api() {
    const [users,Setuser]=useState([])
    let auth=async()=>{
        let data = await fetch('https://dummyjson.com/products/1')
        Setuser(await data.json())
 
    }
   useEffect(()=>{
auth()
   },[])
// .then(res => res.json())
// .then(json => console.log(json))
return(
<>

{
  Object.entries(users).map((ele)=>{
      console.log(ele);
return(
    <>
    <h1>{ele}</h1>
    </>
)
    })
}
</>
)
}