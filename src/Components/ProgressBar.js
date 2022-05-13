import '../assets/progress.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
export default function Progressbar({unit, length }){



    return(
        
    <div className="progress-container" >

         <p className="thin-info">{unit}</p>
            <Progress percent={length}  className="progress"/>


    </div>
    )
}