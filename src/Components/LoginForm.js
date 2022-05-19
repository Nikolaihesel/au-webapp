import React, {useState} from 'react'
import "../assets/login.scss"
import InputField from './InputField';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    };
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
   <form onSubmit={submitHandler}>
               
      

       
      
                {(error != "") ? (<div className="error">{error} </div>) : ""}


           <input className="input-login" type="email" placeholder="Email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />

           <input className="input-login" type="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />

            

            <div className="row">

            <div className="bind-attr">

            <input type="radio" name="remember" className="radio" />
            <label className="small-text" htmlFor="remember"> Husk mig</label>

            </div>

            <a href="" className="small-text">Glemt login?</a>

            </div>

       

            <input type="submit" value="Login" className="large-btn" />

     

  
  

   </form>
         </div>
         </div>
         
  )
}

export default LoginForm