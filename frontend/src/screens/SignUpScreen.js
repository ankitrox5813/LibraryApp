import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import { signUpUser } from "../utils/AuthUtil";


 const SignUpScreen = () => {

    const [userData, setUserData]=useState({ 
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        type:"STUDENT",
    });
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);

        if(validateData()){
            const user = await signUpUser(userData);
            navigate("/");
        }
    };

    const validateData =() => {
        return (
        userData.firstName?.length &&
        userData.lastName?.length &&
        userData.email?.length && 
        userData.password?.length
        );
    };

    const handleInputChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    };

    return(
        <section className="app-section">
            <h1>SignUp</h1>

        <form className="ui form" onSubmit={handleLoginSubmit}>

        <span>Already have an account? Click <Link to={"/login"}>here</Link> to Login</span>

        <div className="field">
        <label>First Name</label>
        <input type="text" 
        name="firstName" 
        placeholder="First Name"
        value={userData.firstName}
        onChange={handleInputChange}
        required={true}
        />
        </div>

        <div className="field">
        <label>Last Name</label>
        <input type="text" 
        name="lastName" 
        placeholder="Last Name"
        value={userData.lastName}
        onChange={handleInputChange}
        required={true}
        />
        </div>

        <div className="field"> 
        <label>Email</label>
        <input type="email" 
         name="email" 
         placeholder="Email" 
         value={userData.email}
         onChange={handleInputChange}
         required={true}
         />
        </div>

        <div className="field">
        <label>Password</label>
        <input type="password"
         name="password"
         placeholder="Password" 
         value={userData.password}
         onChange={handleInputChange}
         required={true}
         minLength={8}
         />
        </div>

        <div className="ui segment">
            <div className="field">
                <div className="ui toggle checkbox"
                onClick={() =>{
                        setUserData({
                            ...userData, 
                            type: userData.type === "LIBRARIAN" ? "STUDENT" : "LIBRARIAN",
                        });
                }}
                >
                    <input type="checkbox" 
                    name="gift" 
                    tabindex="0" 
                    class="hidden" 
                    checked={userData.type === "LIBRARIAN"}
                    />
                    <label>Are you a Librarian?</label>
                </div>
            </div>
        </div>

        <button className="ui button" type="submit">Submit</button>

        </form>
        </section>
    );
 };

 export default SignUpScreen;