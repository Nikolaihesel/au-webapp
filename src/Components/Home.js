import InfoBeam from './InfoBeam';
import StartUnit from './StartUnit';
import FindCar from './FindCar';
import UnitInfo from './UnitInfo';
import '../assets/home.css';

export default function home() {
    return (
     <div> 
        <div className="home-container">  
        <div className="left-side-components">  
                <div className="top-row">
                <div className="name-container">
                 <h1>Velkommen Karsten </h1>
                 <StartUnit className="start-unit"  />
                 </div>
                <UnitInfo className="unit-info" />
                </div>

                 <FindCar className="find-car" />

                </div>
                <InfoBeam className="info-beam" /> 
           
            </div>
       


        
    </div>
  )
}