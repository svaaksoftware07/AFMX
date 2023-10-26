import { useState } from "react"
import "./login.css"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/featurs/authSlice";

function Login({ loginType }) {
    const [formData,setFormData]=useState({email:"",password:""});
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const changehandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setFormData({...formData,[name]:value});
    }
    const submithandler= async(e)=>{
        e.preventDefault();
        console.log(formData,"ksandknk");
        dispatch(login({formData,navigate,toast}))
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
                </div>

            </div>
        </>
    )
}

export default Login