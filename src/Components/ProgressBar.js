import '../assets/progress.css';

export default function Progressbar({unit}){
    return(
    <div className="progress-container" >

         <p className="thin-info">{unit}</p>
            <div className="full-bar">
                <div className="used-bar"></div>
            </div>

    </div>
    )
}