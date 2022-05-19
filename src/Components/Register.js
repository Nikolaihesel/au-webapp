import React from 'react'

function Register({formData, setFormData}) {
  return (
    <div>
      <label htmlFor="car">Indtast registreringsnummer på køretøj</label>
      <input type="text" name="car" placeholder="Nummerplade..."
    required value={formData.license} onChange={(event) => setFormData({...formData, license: event.target.value})} />
    <label htmlFor="user">Indtast navn på medarbejder</label>
      <input type="text" name="user" placeholder="Navn..."
    required value={formData.name} onChange={(event) => setFormData({...formData, name: event.target.value})} />
    </div>
  )
}

export default Register