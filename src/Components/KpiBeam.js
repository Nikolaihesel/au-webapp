import '../assets/infobeam.scss'

export default function KpiBeam({ThisData, DataAbout,IconInfo}) {
  return (
    <div className="kpi">

        <p>{ThisData}</p>
        <p>{DataAbout}</p>
        <img src={IconInfo} alt="" />

    </div>
  )
}
