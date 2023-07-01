import React, { useContext } from "react";
import { GlobalData } from "./App";
function SupperChild (){
    const {appcolur,getday}=useContext(GlobalData)
    console.log(`====>> `,appcolur)
    const day="sunday"
    let data =useContext(GlobalData);
    // console.log(`====>> `,data)
return (
    <div className="">
        <h1 style={{color:appcolur  }}>SuperChild Component</h1>
        <button onClick={()=> getday(day)}>click me</button>
      {/* <button onClick={()=> data.ans(5,5)}> sum</button> */}<br/>

      


      
        
    </div>
)
}
export default SupperChild;  