import React,{useState} from 'react'

export default function HookCounter() {


    const [count,setCount]=useState(0) //aceept intial value property and current value and method cabale of updatin state property

    const increment=()=>{
        setCount(prevCount=>prevCount+1)
    }
    
    return (
        <div>
           <button onClick={increment}>Count {count}</button> 
        </div>
    )
}
