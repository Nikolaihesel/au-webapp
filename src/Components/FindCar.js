import '../assets/findCar.css';
import InputField from './InputField';


export default function FindCar(){
    return(
        <div className="find-car">

            <div className="img-container">

            </div>

            <div className="search-car">
                <InputField className="input-field" type={"text"} placeholder={"Indtast nummerplade"} />
            </div>

        </div>
    )
}