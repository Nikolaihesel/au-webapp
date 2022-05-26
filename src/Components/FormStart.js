import React, { useState } from 'react'
import Register from './Register'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './step4'
import Close from '../assets/Icon-metro-cross-red.png'
import '../assets/startform.scss'



function FormStart ({hideModal, next, licenseData}) {
    const [page, setPage]  = useState(0);
    const [formData, setFormData] = useState({
        license: '',
        name: '',
    });
    
    const FormTitles = ["Registrer bil", "Indsæt robotten", "Luk alle døre", "Begynd desinficering", 'Bilen desinficeres nu']

   const licenseDataInput = formData.license
       
    const PageDisplay = () => {
        if (page === 0) {
            return <Register formData={ formData } setFormData={setFormData} />;
        } else if (page === 1){
            return <Step1 />
        } else if (page === 2){
            return <Step2 />
        } else if (page === 3){
            return   <Step3 />

        } else if (page === 4){
            return   <Step4  licenseData = { licenseDataInput }/>
      

        }
        
    }

        


  return (
    <div className="start-form back-drop">

    
            <div className="start-form-container">
                    <div className="progess-start">
            <div style={{width: page === 0 ? "20%" : page === 1 ? "40%" : page === 2 ? "60%" : page === 3 ? "80%" : "100%" }}>
                 </div>
            </div> 
      
    <button className="close-btn-form" onClick={hideModal}> Stop Processen <img src={Close} alt="" /> </button>
                <div className="header-start">
                    <h1>{FormTitles[page]}</h1>
                </div>


                <div className="body-start">
                    {PageDisplay()}
                </div>


                <div className="footer-start">


                    <button 
                     disabled =  {page === 0 || page === FormTitles.length - 1}
                     
                     
                     
                    onClick={() => {setPage((currPage) => currPage - 1)}}>Tilbage</button>
                    <button
                    disabled ={page === FormTitles.length -1 }
                     onClick={() => {
                         if ( page === FormTitles.length - 1 ) {
                            return 
                        }

                         setPage((currPage) => currPage + 1)
                        }}

                         
                         >Næste</button>
                </div>
            </div>
       


    </div>
  )
}

export default FormStart