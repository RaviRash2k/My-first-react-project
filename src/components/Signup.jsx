import React, { useState } from 'react'
import "./Signup.css";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

export default function Signup() {

  const[action, setAction] = useState("Sign up");

  return (
    <div>
        <div className="conteiner">
            <div className="header">
                <div className="text">{action}</div>
            </div>

            <div className="inputs">

                {action === "login" ? <div></div> : <div className="input">
                    <div className="icon"><PersonIcon/></div>
                    <input type="text" placeholder='User Name' className="x" />
                </div>}

                <div className="input">
                    <div className="icon"><EmailIcon/></div>
                    <input type="text" placeholder='Email' className="x" />
                </div>

                <div className="input">
                    <div className="icon"><LockIcon/></div>
                    <input type="Password" placeholder='Password' className="x" />
                </div>
            </div>

            {action === "Sign up" ? <div></div> : <div className="forget">forget password? <span>Click here</span></div>}
            

            <div className="submits">
                <div className={action === "login" ? "submitGray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign Up</div>
                <div className={action === "Sign up" ? "submitGray":"submit"} onClick={()=>{setAction("login")}}>Login</div>
            </div>
        </div>
    </div>
  )
}
