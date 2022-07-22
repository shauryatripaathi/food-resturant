import { useState } from 'react'
import './style.css'

export default function Login(){
    const[loginDisplay, setLoginDisplay] = useState('block')
    const handleOnClick = ()=>{
        if(loginDisplay==='block'){
            setLoginDisplay('none')
        }
    }

    return(
        <div style={{display: loginDisplay}}>
            <div className = 'loginBox'>
                <div>Login</div>
                <div className="loginDetails"> 
                <input type='text' placeholder="Email Address or Phone number" width='30px' height ='40px'/>
                <input type='text' placeholder="Password"/>
                </div>
                <button onClick={handleOnClick} >Submit</button>
            </div>
        </div>
    )
}