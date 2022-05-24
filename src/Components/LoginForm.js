import React, {useState} from 'react'
import "../assets/login.scss"
import {useLogin} from '../hooks/useLogin';

export default function Login() {

const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const { login, isPending, error } = useLogin()
 
  const handleSubmit = (e) => {
     e.preventDefault()
  login(email, password)}

  if (useLogin === true) {
      console.log('wtf')
  }

  return (
        <div className="flex-container-login">
        <div className="infobox-login">
            <h1>DesinficeringsRobot</h1>
             <br />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eos doloremque corporis sequi ducimus impedit, vel numquam amet, dolorum nulla modi. Ea quod placeat quos ullam unde perferendis voluptate ab repellendus corporis, autem sapiente explicabo voluptatem minima fugiat ipsum necessitatibus!
            </p>
        </div>
       <div className="login-box">
   <form onSubmit={handleSubmit}>

           <input className="input-login" 
           type="email" placeholder="Email" 
           onChange={(e) => setEmail(e.target.value)} 
           value={email} />
           <input className="input-login"
            type="password" placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
             />
            <div className="row">
            <div className="bind-attr">
            <input type="radio" name="remember" className="radio" />
            <label className="small-text" htmlFor="remember"> Husk mig</label>
            </div>
            <a href="" className="small-text">Glemt login?</a>
            </div>
            

             { !isPending && <button className="larg-btn">Login</button> }
            { isPending && <button className="large-btn" disabled>loading</button> }
            { error && <p>{error}</p> }
   </form>
         </div>
         </div>
         
  )
}
