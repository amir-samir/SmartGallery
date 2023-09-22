import './registration.css';
import { useState } from 'react';
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export const Registration = () => {
    const navigate = useNavigate();
    // const [signUpisDisabled, setIsDisabled] = useState(false);
    const [signInemail, setEmail] = useState("");
    const [signInpassword, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState(""); 

    const signIn = (e:any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, signInemail, signInpassword)
        .then((userCredential) => {
            console.log(userCredential)
            navigate('/home');

        }).catch((error) => {
            console.log(error);
        })
        
    }

    const signUp = (e:any) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        console.log(userCredential.user.uid)
        addUserTODB()
        navigate('/home');
        }).catch((error) => {
        console.log(error);
        })
    }

    // const toggleCSSProperties = () => {
    //     setIsDisabled(!signUpisDisabled);
    // };

    const addUserTODB = () => {
        fetch('http://localhost:5083/registerUser' , {
            method : 'POST',

            body : JSON.stringify({
                user_id :  auth.currentUser?.uid,
                email: auth.currentUser?.email
            }),

            headers : {
                'Content-type' : 'application/json'
            }
        })
    }

    

    return <div className="registerMain">
            <input className='registrtationInputs' type="checkbox" id="chk" aria-hidden="true"/>
                <div className='signup'>
                    <form className='signUnpForm' onSubmit={signUp}>
                    <label className='signUpTitle' htmlFor="chk" aria-hidden="true">
                        Sign up
                    </label>
                        <input className='registrtationInputs' type="text" name="txt" placeholder="User name" value={name} onChange={(e) => setName(e.target.value)}/>
					    <input className='registrtationInputs' type="email" name="email" placeholder="Email" value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
					    <input className='registrtationInputs' type="password" name="pswd" placeholder="Password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)}/>
					    <button type='submit'>Sign up</button>
                    </form>
                </div>

                <div className='login'>
                    <form className='signInForm' onSubmit={signIn}>
                        <label className='signInTitle' htmlFor="chk" aria-hidden="true">Login</label>
					    <input className='registrtationInputs' type="email" name="email" placeholder="Email" value={signInemail} onChange={(e) => setEmail(e.target.value)}/>
					    <input className='registrtationInputs' type="password" name="pswd" placeholder="Password" value={signInpassword} onChange={(e) => setPassword(e.target.value)}/>
					    <button type='submit'>Login</button>
                    </form>

                </div>

    </div>
};
