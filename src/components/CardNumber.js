import React from 'react'
import { FormControl, FormGroup } from 'react-bootstrap';

const CardNumber = ({handleChange}) => {
    // bootstrap form-control component, type=number
    return ( <>
            <FormGroup className="mb-3">
            <FormControl
                name="cardNumber"
                placeholder="Card Number"
                onChange={handleChange}
                type="number"
                autoComplete="one-time-code"
            />
        </FormGroup>
        </>
        )
}

export default CardNumber