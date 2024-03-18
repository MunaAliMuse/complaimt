
import { useEffect, useState } from "react"
import Header from "../componants/Header"
import axios from "axios"
function Home(){

const [coms,setcoms]= useState ([])
const getCom = ()=>{
    axios.get("http://localhost:1000/create").then((Response)=>{
        setcoms(Response.data)

    }).catch((error)=> console.log(error))
}



   useEffect(()=>{
    getCom()
        document.body.style.backgroundColor =""
    },[])

    return <div>
        <Header/>

        <div className="grid grid-cols-[300px_300px_300px]  ml-40 justify-around gap-10 mt-20 ">
      
{
   coms.map((data)=>{
    return <Note  name ={data.name} email ={data.email}   Complaint={data.Complaint} />
   })   
}
        </div>


    </div>
}


export default Home