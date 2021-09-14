import React from 'react'
import { FormControl, FormGroup } from 'react-bootstrap';


const CcvCode = ({handleChange}) => {
    // bootstrap FormControl component, type=number
    
    return (<>
        <FormGroup className="mb-3">
        <FormControl
            name="ccvCode"
            placeholder="CCV-code"
            onChange={handleChange}
            type="number"
            
        />
    </FormGroup>
    </>)
}

export default CcvCode
