import '../assets/infobeam.scss'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useCountdown } from 'react-countdown-circle-timer'

export default function CountDowntimer() {

   const renderTime = ({ remainingTime }) => {
         const minutes = Math.floor(remainingTime / 60)
  const seconds = remainingTime % 60
  return `${minutes}:${seconds}`
}


  return (
    <div className="counter">
   <CountdownCircleTimer
          isPlaying
          duration={900}
          colors={["#2374d2", "#37ff96"]}
          colorsTime={[10, 20, 30]}
           size={100}
          isSmoothColorTransition
          onComplete={() => ({ shouldRepeat: false })}
         
        >
          {renderTime}
    
        </CountdownCircleTimer>


    </div>
  )
}
