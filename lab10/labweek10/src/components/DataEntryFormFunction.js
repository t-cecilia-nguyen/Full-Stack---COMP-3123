import React, { useState } from 'react'

export default function DataEntryFormFunction() {
    var [formData, setFormData]= useState({
        province: 'choose',
        email: '',
        fullName: '',
        address: '',
        address2: '',
        city: '',
        postalCode: '',
        agree: false,
    });

    const [submittedData, setSubmittedData] = useState(null);

    const province = [
        'Alberta', 
        'British Columbia', 
        'Manitoba', 
        'New Brunswick', 
        'Newfoundland and Labrador',
        'Nova Scotia',
        'Ontario',
        'Prince Edward Island', 
        'Quebec', 
        'Saskatchewan', 
        'Northwest Territories', 
        'Nunavut', 
        'Yukon']

    const onValueChanged = (event) => {
        const { name, value, type, checked } = event.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        setSubmittedData(formData)
    }

    return (
    <div>
        <form onSubmit={onSubmitForm} > 
        <div className="form-row">
            <div className="form-field">
                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={onValueChanged}
                    placeholder="Enter email"
                    required
                />
            </div>
            <div className="form-field">
                <label>Full Name</label>
                <input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={onValueChanged}
                    placeholder="Full Name"
                    required
                />
            </div>
        </div>
        <div class="form-row">
            <div class="form-field">
                <label>Address</label>
                <input 
                    name='address'
                    type="text"
                    value={formData.address}
                    onChange={onValueChanged} 
                    placeholder="1234 Main St" />
            </div>
        </div>

        <div class="form-row">
            <div class="form-field">
                <label>Address 2</label>
                <input 
                    name='address2'
                    type="text"
                    value={formData.address2}
                    onChange={onValueChanged}
                    placeholder="Apartment, studio, or floor" />
            </div>
        </div>
            
        <div className="form-row">
            <div className="form-field">
                <label>City</label>
                <input 
                    name='city'
                    type="text"
                    value={formData.city}
                    onChange={onValueChanged}/>
            </div>

            <div className="form-field">
                <label>Province</label>            
                <select name='province' value={formData.province} onChange={onValueChanged}>
                <option value="choose" disabled>Choose...</option>
                    {
                        province.map((province) => (
                            <option key={province} value={province}>{province}</option>
                        ))
                    }
                </select>
            </div>

            <div className="form-field">
                <label>Postal Code</label>
                <input 
                    name='postalCode'
                    type="text"
                    value={formData.postalCode}
                    onChange={onValueChanged}/>
            </div>
        </div>

        <div class="form-checkbox"> 
            <input
                type='checkbox'
                name='agree'
                checked={formData.agree}
                onChange={onValueChanged}/>
            <label>Agree Terms & Condition?</label>
        </div>

            <input 
            class="submit-btn"
            type="submit"
            value="Submit" />
            </form>

            {submittedData && (
                <div className="output-container">
                    <p><span>Email:</span> {submittedData.email}</p>
                    <p><span>Full Name:</span> {submittedData.fullName}</p>
                    <p><span >Address:</span> {submittedData.address}</p>
                    <p><span>City:</span> {submittedData.city}</p>
                    <p><span>Province:</span> {submittedData.province}</p>
                    <p><span>Postal Code:</span> {submittedData.postalCode}</p>
                </div>
                )}
        </div>
    )
}
