import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import "./create_acoount.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateAccount() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        prifix:"",
        firstname:"",
        middlename:"",
        lastname:"",
        postfix:"",
        email:"",
        phone:"",
        password:"",
        ssn:"",
        address:"",
        postal_code:"",
        city:"",
        state:"",
        country:""
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
                                <label htmlFor="ssn" className="label">SSN Number <span>*</span></label>
                                <input id='ssn'
                                    type="text"
                                    className='form-control mb-3'
                                    name='ssn'
                                    onChange={changehandller}
                                />
                                 <label htmlFor="state" className="label">State <span>*</span></label>
                                <input id='state'
                                    type="text"
                                    className='form-control mb-3'
                                    name='state'
                                    onChange={changehandller}
                                />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="lastname" className="label">Last Name <span>*</span></label>
                                <input id='lastname'
                                    type="text"

                                    className='form-control mb-3 '
                                    name='lastname'
                                    onChange={changehandller}
                                />

                                <label htmlFor="phone" className="label">Mobile No.<span>*</span></label>
                                <input id='phone'
                                    type="text"
                                    className='form-control mb-3'
                                    name='phone'
                                    onChange={changehandller}
                                />

                                <label htmlFor="cpassword" className="label">Confirm Password <span>*</span></label>
                                <input id='cpassword'
                                    type="password"
                                    className='form-control mb-3'
                                    name='cpassword'
                                    onChange={changehandller}
                                />
                                
                                <label htmlFor="country" className="label">Country <span>*</span></label>
                                <input id='country'
                                    type="text"
                                    className='form-control mb-3'
                                    name='country'
                                    onChange={changehandller}
                                />
                                <label htmlFor="country" className="label">City <span>*</span></label>
                                <input id='city'
                                    type="text"
                                    className='form-control mb-3'
                                    name='city'
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