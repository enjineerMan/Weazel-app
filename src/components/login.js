import {useState} from 'react';
import { Button, TextField } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
function Login(){
    const [signupForm, setSignupForm] = useState("");
    const [signinForm, setSigninForm] = useState("");
    const [signupRes, setSignupRes] = useState(false);
    const [signinRes, setSigninRes] = useState(false);

    const navigate = useNavigate();
    function handleSignupSubmit(e){
        if(signupForm.length > 13){
            if(signupForm.substring(signupForm.length-13) === "@uwaterloo.ca"){
                axios.post("http://localhost:5000/logins", {signupForm}).then(response => {
                    setSignupForm("");
                    console.log(response.data);
                    if(response.data == "success!"){
                        setSignupRes(true);
                    }
                });
            }
        }
       e.preventDefault();
    }
    function handleSigninSubmit(e){
        axios.get('/emails', {params: {msg: signinForm}}).then(function (response) {
            if(response.data == 200){
                navigate("http://localhost:5000/main-room", {replace: true});
            }else{
                setSigninRes(true);
            }
        });
        e.preventDefault();
    }
    function handleSignupChange(event){
        setSignupForm(event.target.value);
    }
    function handleSigninChange(event){
        setSigninForm(event.target.value);
    }
    function test(){
        axios.get("http://localhost:5000/test").then(response => {
            console.log(response.data);
        });
    }
    let signupMsg;
    if(signupRes){
        signupMsg = <p> Success! </p>;
    }else{
        signupMsg = null;
    }
    let signinMsg;
    if(signinRes){
        signinMsg = <p> There is no account with that email.</p>
    }else{
        signinMsg = null;
    }
    return (
        <div>
            <h1> Weazel </h1>
            <h4> Sign up </h4>
            <form onSubmit={handleSignupSubmit} className="form">
                <TextField 
                    type={"text"}
                    value={signupForm}
                    onChange={handleSignupChange}
                    sx={{
                        width: 300,
                    }}
                />
            </form>
            {signupMsg}
            <h4> Already have an account? Sign in </h4>
            <form onSubmit={handleSigninSubmit} className="form">
                <TextField 
                    type={"text"}
                    value={signinForm}
                    onChange={handleSigninChange}
                    sx={{
                        width: 300,
                    }}
                />
            </form>
        </div>
    );
}

export default Login;