import React, { useContext } from "react";
import { GlobalData } from "./App";
import SupperChild from "./supperchild";
import OtherChild from "./OtherChild";
function Child (){
    const {appcolur}=useContext(GlobalData)
    // console.log(`====>> `,appcolur)
return (
    <div className="">
        <h1 style={{color:appcolur  }}>Child Component</h1>
        {/* <SupperChild/>    */}
   
    </div>
)
}
export default Child;
