import "../assets/login.css"
import Users from '../Json/DB.json'
import InputField from  './InputField'





export default function Login() {




    return(
        <div className="flex-container-login">

{
  
   }
        
        <div className="infobox-login">
            <h1>DesinficeringsRobot 2000</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eos doloremque corporis sequi ducimus impedit, vel numquam amet, dolorum nulla modi. Ea quod placeat quos ullam unde perferendis voluptate ab repellendus corporis, autem sapiente explicabo voluptatem minima fugiat ipsum necessitatibus!
            </p>
        </div>

        <div className="login-box">

           <InputField type={"text"} placeholder={"Brugernavn"} />

           <InputField type={"password"} placeholder={"Password"} />

            

            <div className="row">

            <div className="bind-attr">

            <input type="radio" name="remember" className="radio" />
            <label className="small-text" htmlFor="remember"> Husk mig</label>

            </div>

            <a href="#" className="small-text">Glemt login?</a>

            </div>

       

            <button className="login large-btn">Log ind</button >

        </div>


        </div>
    )
}