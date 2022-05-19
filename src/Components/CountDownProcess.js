import '../assets/infobeam.scss'
import CountDowntimer from './CountDowntimer'
import '../assets/styletimersteps.scss';

export default function CountDownProcess({license}) {
  return (
    <div className="countdown">

    <p className="info-timer">Resterende ventetid</p>
    <p className="info-timer">{license}</p>


    <CountDowntimer />
    </div>
  )
}
