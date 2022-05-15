import '../assets/infobeam.scss'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function CountDowntimer() {

   const renderTime = ({ remainingTime }) => {
         const minutes = Math.floor(remainingTime / 60)
  const seconds = remainingTime % 60
  return `${minutes}:${seconds}`





return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );


}






  return (
    <div className="counter">
   <CountdownCircleTimer
          isPlaying
          duration={915}
          colors={["#37ff96 ", "#2374d2"]}
          colorsTime={[10, 5]}
          onComplete={() => ({ shouldRepeat: false })}
          size={100}
        >
          {renderTime}
    
        </CountdownCircleTimer>


    </div>
  )
}
