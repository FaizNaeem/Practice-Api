import React, { useEffect, useState } from 'react'

export default   function Api() {
    const [user,Setuser]=useState([])
    let auth=async()=>{
        let data = await fetch('https://dummyjson.com/products/1')
        let new1= await data.json()
//         new1.map((e)=>{
// console.log(e);
//         })
        // Setuser(new1)
        console.log(new1);
//         user.map((e,i,a)=>{
// console.log(e,i,a);
        // })
    }
   useEffect(()=>{
auth()
   },[])
// .then(res => res.json())
// .then(json => console.log(json))
return(
<>
{/* <h1>{user}</h1> */}
</>
)
}