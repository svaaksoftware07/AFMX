import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import "./create_acoount.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateAccount() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const changehandller = (e) => {
        const name = e.target.name;
        setData({ ...data, [name]: e.target.value })

    }
    const submithandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/user/signup', data)
                .then((response) => {
                    toast.success(response.data.message);
                    navigate("/")
                })


            console.log(response)
        } catch (err) {
            return toast.error(err.response?.data?.message);
        }
    }
    return (

        <>
            <div className="loginMain py-lg-5" >
                <div className='loginForm'>
                    <h3 className="userType">Create Account</h3>
                    <form onSubmit={submithandler}>
                        <div className="row">


                            <div className="col-lg-6">
                                <label htmlFor="firstName" className="label">First Name <span>*</span></label>
                                <input id='name'
                                    type="text"

                                    className='form-control mb-3 '
                                    name='name'
                                    onChange={changehandller}
                                />

                                <label htmlFor="emailId" className="label">Email Id <span>*</span></label>
                                <input id='emailId'
                                    type="email"
                                    className='form-control mb-3'
                                    name='email'
                                    onChange={changehandller}
                                />
                                <label htmlFor="password" className="label">Password <span>*</span></label>
                                <input id='password'
                                    type="password"
                                    className='form-control mb-3'
                                    name='password'
                                    onChange={changehandller}
                                />
                                <label htmlFor="password" className="label">SSN/EIN Number <span>*</span></label>
                                <input id='password'
                                    type="password"
                                    className='form-control mb-3'
                                    name='password'
                                    onChange={changehandller}
                                />
                                 <label htmlFor="password" className="label">State <span>*</span></label>
                                <input id='password'
                                    type="password"
                                    className='form-control mb-3'
                                    name='password'
                                    onChange={changehandller}
                                />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="firstName" className="label">Last Name <span>*</span></label>
                                <input id='name'
                                    type="text"

                                    className='form-control mb-3 '
                                    name='name'
                                    onChange={changehandller}
                                />

                                <label htmlFor="emailId" className="label">Mobile No.<span>*</span></label>
                                <input id='emailId'
                                    type="email"
                                    className='form-control mb-3'
                                    name='email'
                                    onChange={changehandller}
                                />

                                <label htmlFor="password" className="label">Confirm Password <span>*</span></label>
                                <input id='password'
                                    type="password"
                                    className='form-control mb-3'
                                    name='password'
                                    onChange={changehandller}
                                />
                                
                                <label htmlFor="password" className="label">Country <span>*</span></label>
                                <input id='password'
                                    type="password"
                                    className='form-control mb-3'
                                    name='password'
                                    onChange={changehandller}
                                />
                                <label htmlFor="password" className="label">City <span>*</span></label>
                                <input id='password'
                                    type="password"
                                    className='form-control mb-3'
                                    name='password'
                                    onChange={changehandller}
                                />
                               
                            </div>
                            <label htmlFor="password" className="label">Address <span>*</span></label>
                            <textarea name="" id="" cols="30" rows="5" className="form-control mb-3 p-2"></textarea>

                            <div className="loginButton">
                                <button type="submit">Create Account</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>


        </>
    )
}

export default CreateAccount