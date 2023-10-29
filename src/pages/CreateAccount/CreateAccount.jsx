import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import "./create_acoount.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateAccount() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        prifix: "",
        firstname: "",
        middlename: "",
        lastname: "",
        postfix: "",
        email: "",
        phone: "",
        password: "",
        ssn: "",
        address: "",
        postal_code: "",
        city: "",
        state: "",
        country: ""
    });
    const changehandller = (e) => {
        const name = e.target.name;
        setData({ ...data, [name]: e.target.value })

    }
    const submithandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/auth/signup', data)
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
            <div className="container p-0 bg-white my-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">


                        <div className="loginMain py-lg-5" >
                            <div className='loginForm'>
                                <h3 className="userType">Create Account</h3>
                                <form onSubmit={submithandler}>
                                    <div className="row">


                                        <div className="col-lg-12">
                                            <label htmlFor="firstName" className="label">Username <span>*</span></label>
                                            <input id='name'
                                                type="text"

                                                className='form-control mb-3 '
                                                name='firstname'
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

                                            <label htmlFor="cpassword" className="label">Confirm Password <span>*</span></label>
                                            <input id='cpassword'
                                                type="password"
                                                className='form-control mb-3'
                                                name='cpassword'
                                                onChange={changehandller}
                                            />
                                            <label htmlFor="ssn" className="label">SSN Number <span>*</span></label>
                                            <input id='ssn'
                                                type="text"
                                                className='form-control mb-3'
                                                name='ssn'
                                                onChange={changehandller}
                                            />
                                            <label htmlFor="ein-number" className="label">EIN Number <span>*</span></label>
                                            <input id='ein-number'
                                                type="text"
                                                className='form-control mb-3'
                                                name='ein-number'
                                                onChange={changehandller}
                                            />
                                            <label htmlFor="bradstreet-number" className="label">Duns & Bradstreet No <span>*</span></label>
                                            <input id='bradstreet-number'
                                                type="text"

                                                className='form-control mb-3 '
                                                name='bradstreet-number'
                                                onChange={changehandller}
                                            />
                                           
                                        </div>

                                      
                                        <div className="loginButton">
                                            <button type="submit">Register</button>
                                        </div>
                                        <div className="links-login">
                                            <p>Already have an account? <Link to="/employee-login">Sign In</Link></p>
                                            {/* <Link to="/forget-password">Forget password</Link> */}

                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CreateAccount