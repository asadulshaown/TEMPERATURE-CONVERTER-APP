

import { useState } from "react"
import Formula from "./Formula"


const UserDataFrom = () => {
    
    //takeing value from user//
    const [temperature,settemperature] = useState("")
    const [userInput,setuserInput] = useState("")
    

    //takeing value from reactdom & and set in variable //
    const valueChange1 = (e)=>{
        const temperature = e.target.value;
         settemperature(temperature)
      }
      //takeing value from reactdom & and set in variable //
    const valueChange2 = (e)=>{
      const userInput = e.target.value;
       setuserInput(userInput.toLowerCase())
    }

    //From handleling & Required//
    const handleSubmit=(e)=>{
        e.preventDefault();
        const celcius = Number(temperature); //convert temperature in number
        if(userInput === "" && temperature === ""){
            alert("Opps! Plese Enter Temperature & Name:__")            
            
        }
        else if(temperature===""){
            alert("please Enter Temperature :__")
        }
        else if(userInput === ""){
            alert("please Enter Temperature name :__")
        }
        else if(userInput === "celcius"){
            // alert(`You Enter ${userInput} '&' ${temperature}`);
            const C = celcius;
            const F = (celcius*9/5) + 32 + "F";
            const K = celcius + 273.15 + "K" 

            alert(`The Temperature in Celcius: ${C}`) 
            alert(`The Temperature in Fahernhite: ${F}`);
            alert(`The Temperature In Kelvin: ${K}`)
        }
        else if(userInput === "farhenhite"){
            const C =(celcius-32)*5/9;
            const F =celcius;
            const K = celcius + 273.15 + "K"

            alert(`The Temperature In Celcius: ${C}`)
            alert(`The Temperature In Farhenhite: ${F}`)
            alert(`The Temperature In Kelvin: ${K}`)
        }
        else if(userInput === "kelvin"){
            const C =(celcius-32)*5/9;
            const F = (celcius-32)*5/9 + "F";
            const K = celcius;

            alert(`The Temperature In Celcius: ${C}`)
            alert(`The Temperature In Fahernhite: ${F}`)
            alert(`The Temperature In Kelvin: ${K}`)
        }
        else{
            alert("please Enter A Valid Temperature Name:__")
        }
       
        
    }

 
       

  return (
    
    <div className="container">
        <h1 className="appName">
            temperature-converter-app
        </h1>
        <form className="userForm">
        <div className="div1">
        <label className="label1 ">
            Input Your Temperture
        </label>
        <input className="userInput1" type="number" placeholder="000.00"  lang="en" onChange={valueChange1} >
         </input>
        </div>
         <div className="div2">
         <label  className="label2 ">
            Select Your Temperture Name
         </label>

         <select  id="tempName">
            <option  id="cel">Celcius</option>
            <option >Farhenhite</option>
            <option >kelvin</option>
         </select>
         <input className="userInput2" type="text" placeholder="Celcius" onChange={valueChange2}>
         </input>
         
         </div>
         
        <div className="btn">
             <button className="submitbtn" type="submit" onClick={handleSubmit} >
            Convert
                <Formula  />
             </button>
        </div>          
        </form>

    
    </div>
  )
}

export default UserDataFrom