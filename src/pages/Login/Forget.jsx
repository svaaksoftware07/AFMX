import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';



function Forget() {
    const [email,setEmail]=useState("");

    
    const submithandler= async(e)=>{
        e.preventDefault();

        try{
            const response =await axios.post('http://localhost:5000/auth//forget-request',{email})
            .then((response)=>{
               toast.success(response.data.message);
               console.log(response)
               
            })
            .catch(err=>{
                toast.error(err?.response?.data?.message);
                console.log(err)
            })
            
            console.log(response)
        }catch(err){
            return  toast.error(err.response?.data?.message);
        }
        console.log(email)
    }
  return (
    <>
         <div className="loginMain py-lg-5">
                <div className='loginForm'>
                    <h3 className="userType">Forget Password</h3>
                    <form className="form" onSubmit={submithandler}>
                        <label htmlFor="email"  className="label">Email</label>
                        <input id='email'
                            type="email"
                            className='form-control mb-3 '
                            required
                            name='email'
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <div className="loginButton">
                            <button type="submit">Send Request</button>
                        </div>
                    </form>
                </div>
            </div>
    </>
  )
}

export default Forget