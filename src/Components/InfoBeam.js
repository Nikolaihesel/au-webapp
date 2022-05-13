import '../assets/infobeam.scss'
import DealerLogo from './dealerLogo'
import KpiBeam from './KpiBeam'

export default function InfoBeam(){
    return(
        <div className="info-beam-container">

            <DealerLogo />

            <div className="kpi-beam-container">

            <KpiBeam />

       

            </div>
    
        </div>
    )
}