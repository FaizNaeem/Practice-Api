import React, { useEffect, useState } from 'react'

export default   function Api() {
    const [users,Setuser]=useState([])
    let auth=async()=>{
        let data = await fetch('https://dummyjson.com/products/1')
        Setuser(await data.json())
        // Setuser(new1)
        // console.log(user);
//         new1.map((e)=>{
// console.log(e);
//         })
// console.log(new1);
// Setuser(new1)
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

{
  Object.entries(users).map((ele)=>{
      console.log(ele[2]);
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