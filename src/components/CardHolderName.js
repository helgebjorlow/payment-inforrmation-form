import React from 'react'
import { FormControl, FormGroup } from 'react-bootstrap';

const CardHolderName = ({handleChange}) => {
    // bootstrap FormControl component
    return ( <>
            <FormGroup className="mb-3">
            <FormControl
                name="cardHolderName"
                placeholder="Name of card holder"
                onChange={handleChange}
                type="text"
                autoComplete="one-time-code"  // In order to break google autocomplete logic
            />
        </FormGroup>
        </>
        )
}

export default CardHolderName
