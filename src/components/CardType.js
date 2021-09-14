import React from 'react'

const CardType = ({handleChange}) => {
    // bootstrap styled select with two components
    
    return (<>
    <select 
    className="form-select"
    onChange={handleChange}
    name="cardType"
    >
        <option value="">Card-Type</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
    </select>
    </>)
}

export default CardType
