import { render } from '@testing-library/react';
import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

export class  UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        numberPlate: '',
        Comments: ''
    }

    // next step 

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //handle field change

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // last step
    preStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }
    render() {
        const { step } = this.state;
        const {firstName, numberPlate, comments } = this.state;
        const values = {firstName, numberPlate, comments}

        switch(step) {
            case 1: 
            return (
                <FormUserDetails 
                nextStep = {this.nextStep}
                handleChange ={this.handleChange}
                value={values}
                
                />
            )

            case 2:
                return (
                    <h1>
                        FormPersonalDetails
                    </h1>
                )
            case 3:
                return (
                    <h1>
                        confirm
                    </h1>
                )
            case 4:
                return (
                    <h1>
                        succes
                    </h1>
                )
        }
   return (
    <div>UserForm</div>
  )
  }
}

export default UserForm
