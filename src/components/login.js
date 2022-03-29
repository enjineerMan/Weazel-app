import {useState} from 'react';
import { Button, TextField } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import "../styles.css";
const b_url = "http://localhost:5000";
const f_url = "http://localhost:3000";
function Login(){
    const [signupForm, setSignupForm] = useState("");
    const [signinForm, setSigninForm] = useState("");
    const [signupRes, setSignupRes] = useState(0);
    const [signinRes, setSigninRes] = useState(false);

    const navigate = useNavigate();

    async function delayedNavigate(){
        await setTimeout(function(){
            navigate("/enter-password");
        }, 1000);
    }

    function handleSignupSubmit(e){
        if(signupForm.length > 13){
            if(signupForm.substring(signupForm.length-13) === "@uwaterloo.ca"){
                axios.post(b_url + "/logins", {signupForm}).then(response => {
                    setSignupForm("");
                    setSignupRes(response.data == 200 ? 1 : 2);
                    if(response.data == 200) delayedNavigate();
                });
            }else{
                setSignupRes(3);
            }
        }else{
            setSignupRes(3);
        }
       e.preventDefault();
    }
    function handleSigninSubmit(e){
        axios.get('/emails', {params: {msg: signinForm}}).then(function (response) {
            if(response.data == 200){
                navigate(f_url + "/main-room", {replace: true});
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
        axios.get(b_url + "/test").then(response => {
            console.log(response.data);
        });
    }
    let signupMsg = 
        signupRes == 1 ? <p> Success! </p> :
        signupRes == 2 ? <p> There is already an account with that email. </p> : 
        signupRes == 3 ? <p> Please enter a valid email address. </p> :
        null;
    let signinMsg = signinRes ? <p> There is no account with that email.</p> : null;
    return (
        <div className="login">
            <h1> Weazel </h1>
            <div className="signup-signin">
                <h4> Sign up </h4>
                <form onSubmit={handleSignupSubmit} >
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
                <form onSubmit={handleSigninSubmit} >
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
        </div>
    );
}

export default Login;