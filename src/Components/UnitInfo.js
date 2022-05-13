import ProgressBar from './ProgressBar';
import '../assets/unitInfo.css'

export default function UnitInfo(){
    return (
        <div className="unit-info-container">

            <p className="status">Status på enhed</p>

            <ProgressBar unit={"Væskestand"} />
            <ProgressBar unit={"Batteri"} />
            <ProgressBar unit={"Filter"} />

           

        </div>
    )
}