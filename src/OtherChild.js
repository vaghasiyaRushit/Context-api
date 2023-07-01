import React, { useContext } from "react";
import { GlobalData } from "./App";
function OtherChild (){
    const {appcolur}=useContext(GlobalData)
    
    // console.log(`====>> `,appcolur)
return (
    <div className="">
        <h1 style={{color:appcolur  }}>OtherChild Component</h1>
        
    </div>
)
}
export default OtherChild;