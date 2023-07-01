import React,{createContext, useState} from 'react';
// import './App.css';
import { MyContext } from './context';
import Child from './child';
import OtherChild from './OtherChild';
import SupperChild from './supperchild';
 export const GlobalData =createContext();
function App() { 
  const [colur,setColur]=useState("green");
  const [day,Setday]=useState("Monday");

  const [text, setText] = useState("");

//   function sum(num1,num2){
//  console.log(`====>> `,num1+num2)
//   }
// let obj ={
//   name:"anita vaghani",
//   myarr:[],
// //  ans : sum
// }

 const getday =(value)=>{
  console.log(`====>> `,value)
  Setday(value)
 }
  return (
    <GlobalData.Provider value={{appcolur: colur,getday:getday,text, setText  }}>
    <div className="App">
      <h1> App Component {day }</h1>
      <OtherChild/>
      <SupperChild/>
        <Child/>
    </div>
    </GlobalData.Provider>
  );
}

export default App;
