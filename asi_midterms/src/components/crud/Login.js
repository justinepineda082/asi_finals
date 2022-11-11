import { useState } from "react";
import {auth} from '../firebaseConfig/Firebase';
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(auth=>{navigate('/home')})
        .catch(error=>console.error(error))
    }

    const register = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth=>{navigate('/home')})
        .catch(error=>console.error(error))
    }

    return(
        <div id = 'login'>
            <h1>Sign-in</h1>
            <label>E-mail</label>
            <input onChange={(event)=>setEmail(event.target.value)} autoComplete="off" className="input" type='email' name="email"/>
            <label>Password</label>
            <input onChange={(event)=>setPassword(event.target.value)} autoComplete="off" className="input" type='password' name="password"/><br></br>
            <button onClick={signIn}>Sign-in</button>
            <p>By Creating an account you agree to Conditions of use and Privacy Notice</p>
            <button onClick={register}>Create an Account</button>
        </div>
    )
}
export default Login;