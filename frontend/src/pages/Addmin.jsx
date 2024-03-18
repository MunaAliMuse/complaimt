import Header from "../componants/Header"
import  Axios from "axios"
import { useEffect, useState } from "react"
function Addmin(){

    const [name, setname] = useState("")
    const [email, setemail] = useState(" ")
    const [Complaint, setComplaint] =useState("")

const handleRejistorAdmin=(e)=>{
    e.preventDefault()
Axios.post("http://localhost:1000/create",{
    "name": name,
    " email ":email,
    "Complaint":Complaint,
}).then((Response)=>{
    alert("cabashadada si sax lo gudbiya mahadsanid")

const handlerigeste=(e)=>{
    
    

}
useEffect(()=>{
},)})


}

    return <div>

     <Header/>
     
     <h1 className="text-white text-2xl">this is form complaints</h1>

     <div  class="shadow-xl shadow-gray bg-yellow-500 w-[350px] h-[450px] absolute left-[450px] top-[110px] rounded-xl">
            <div class="p-10">
            <form>
                <input value={name} onChange={(Event)=> setname(Event.target.value)} className="h-10 w-72" type="text" placeholder="Enter name" />
                 <br />
                 <br />
                 <input value={ email} onChange={(Event)=> setemail(Event.target.value)} className="h-10 w-72" type="text" rows="3" cols="37" placeholder="Enter email " />
                 <br />

                 <br />
                 <textarea value={Complaint} onChange={(Event)=> setComplaint(Event.target.value)} className="h-52 w-82" type="text" rows="3" cols="37" placeholder="Enter enter complaint " />

                </form> 
                <div class="flex justify-between mt-8">
                    <button onClick={handleRejistorAdmin}  className="bg-green-200 rounded-full text-white px-3">RegisterAdmin</button>
                </div>
            </div>
            </div>
            </div>
     

        
}


export default Addmin