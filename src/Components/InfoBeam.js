import '../assets/infobeam.scss'
import DealerLogo from './dealerLogo'
import RedCross from '../assets/Icon-metro-cross-red.png'
import CountDownProcess from './CountDownProcess'
import KpiBeam from './KpiBeam'

const kpiInfo = [ true, "Antal biler desinficeret", "10.433", "Mest desinficerede model", "A4", "enhed er ikke tilsluttet", RedCross]



export default function InfoBeam(){
    return(

        <div className="black-container">
        <div className="info-beam-container">

            <DealerLogo />

            <div className="kpi-beam-container">
            <div className="column-container">
            <KpiBeam  ThisData={[kpiInfo[5]]} IconInfo={[kpiInfo[6]]}/>
            <KpiBeam  ThisData={[kpiInfo[1]]} DataAbout={[kpiInfo[2]]}/>
            <KpiBeam  ThisData={[kpiInfo[3]]} DataAbout={[kpiInfo[4]]}/>

            </div>
                       <p className="info-text">Igangværende processer</p>

            <div className="timer-container">

     


                <div className="countdown-container">

                    <CountDownProcess />

                </div> 


            </div>

       

            </div>
    
        </div>
        </div>
    )
}