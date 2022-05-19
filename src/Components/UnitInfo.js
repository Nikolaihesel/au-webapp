import ProgressBar from './ProgressBar';
import '../assets/unitInfo.scss'

export default function UnitInfo(){



   const liquidnum =  "83"
    const batterynum = "78"
     const filternum = "89"



    
    return (
        <div className="unit-info-container">

            <p className="status">Status på enhed</p>




            <ProgressBar unit={"Væskestand"}length={liquidnum} />
            <ProgressBar unit={"Batteri"}  length={batterynum} />
            <ProgressBar unit={"Filter"} length={filternum} />

        </div>
    )
}