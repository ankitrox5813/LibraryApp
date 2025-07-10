import { useState } from "react";
import { loginUser } from "../utils/AuthUtil";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';


 const LoginScreen = () => {

    const [credentials, setCredetials]=useState({ email:"", password:"" });
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(credentials);
        if(validateCredentials()){
            const user = await loginUser(credentials);
            navigate("/");
        }
    };

    const validateCredentials =() => {
        return credentials.email?.length && credentials.password?.length;
        
    };

    const handleInputChange = (e) => {
        setCredetials({...credentials, [e.target.name]: e.target.value});
    };

    return(
        <section className="app-section">
            <h1>Login</h1>

        <form className="ui form" onSubmit={handleLoginSubmit}>
        <span>Don't have an account? Click <Link to={"/signup"}>here</Link> to SignUp</span>
        <div className="field"> 
        <label>Email</label>
        <input type="email" 
         name="email" 
         placeholder="Email" 
         value={credentials.email}
         onChange={handleInputChange}
         required={true}
         />
        </div>

        <div className="field">
        <label>Password</label>
        <input type="password"
         name="password"
         placeholder="Password" 
         value={credentials.password}
         onChange={handleInputChange}
         required={true}
         minLength={8}
         />
        </div>

        <button className="ui button" type="submit">Submit</button>

        </form>
        </section>
    );
 };

 export default LoginScreen;