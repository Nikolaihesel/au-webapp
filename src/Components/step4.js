import React from 'react'
import CountDown from './CountDownProcess';
import '../assets/styletimersteps.scss';

function Step4({licenseData}) {
  return (
    <div>  <CountDown license={licenseData} />  </div>
  )
}

export default Step4