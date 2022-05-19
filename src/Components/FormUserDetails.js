import { render } from '@testing-library/react';
import React, { Component } from 'react'

export class  FormUserDetails extends Component {
    
    continue = e => {
    e.preventDefault();
    this.props.nextStep();

    }

    render() {
        const { values } = this.props;
  return (
    <div>
   <h1> hello from user details </h1>
    </div>
  )

 }
}

export default FormUserDetails;