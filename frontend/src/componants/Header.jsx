import { Link } from "react-router-dom"

function Header(){
    return <div className="">
        <div className="bg-yellow-500 p-3 px-5 text-white flex justify-between">
      <Link   to={"/"} input="" className="font-bold text-5xl">complaint person</Link>
      <ul className="flex gap-10 text-2xl">
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>
      </ul>
      <Link  to ={"/Addteacher"} className="bg-white text-black px-2 text-center rounded-xl">Addcoplaints</Link>
        </div>


        <h1 className="text-white text-2xl">this is form complaints</h1>

<div  class="shadow-xl shadow-gray bg-yellow-500 w-[350px] h-[450px] absolute left-[450px] top-[110px] rounded-xl">
       <div class="p-10">
       <form>
           <input value={name} onChange={(Event)=> setname(Event.target.value)} className="h-10 w-72" type="text" placeholder="Enter name" />
            <br />
            
            <br />
            <textare onChange={(Event)=> setComplaint(Event.target.value)} className="h-52 w-82" type="text" rows="3" cols="37" placeholder="Enter enter complaint " />

           </form> 
           <div class="flex justify-between mt-8">
               <button onClick className="bg-green-200 rounded-full text-white px-3">RegisterAdmin</button>
           </div>
       </div>
       </div>
       </div>


   
}


        


export default Header