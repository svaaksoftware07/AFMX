import { useState } from "react"
import "./login.css"
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ loginType }) {
    const [formData,setFormData]=useState({email:"",password:""});
    const navigate=useNavigate()

    const changehandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setFormData({...formData,[name]:value});
    }
    const submithandler= async(e)=>{
        e.preventDefault();
        try{
            const response =await axios.post('http://localhost:5000/user/signin',formData)
            .then((response)=>{
               toast.success(response.data.message);
                navigate("/")
            })
            .catch(err=>{
                toast.error("Somthing went wrong");
                console.log(err)
            })
            
            console.log(response)
        }catch(err){
            return  toast.error(err.response?.data?.message);
        }
        console.log(formData)
    }
    return (
        <>
            <div className="loginMain py-lg-5">
                <div className='loginForm'>
                    <h3 className="userType">{loginType}</h3>
                    <form className="form" onSubmit={submithandler}>
                        <label htmlFor="email"  className="label">Email</label>
                        <input id='email'
                            type="email"
                            className='form-control mb-3 '
                            required
                            name='email'
                            onChange={changehandler}
                        />
                        <label htmlFor="password" className="label">Password</label>
                        <input id='password'
                            type="password"
                            className='form-control mb-3'
                            required
                            name='password'
                            onChange={changehandler}
                        />
                        <div className="loginButton">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <div className="forget-link">
                        <Link to="/forget-password">Forget Password</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login