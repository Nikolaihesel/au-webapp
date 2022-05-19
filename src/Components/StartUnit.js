import  '../assets/styleBtn.scss'
import {useState} from 'react'
import FormStart from './FormStart.js'


export default function StartUnit(){

    const [showForm, setShowForm] = useState(false)
    
      const showModal = () => setShowForm(true)
      const hideModal = () => setShowForm(false)


    return(

        <div className="start-unit">
            <h2>
                Desinficerings process
            </h2>

           <button className="start-btn" onClick={showModal}>Start</button>
                     { showForm ?     <FormStart hideModal={hideModal} /> : null }



        

        </div>

    )
}