import { useState } from 'react'


const FormControl = () => {
// custom hook that uses useState to control the form.

    const [values, setValues] = useState({
        cardHolderName: '',
        cardNumber: '',
        ccvCode: '',
        cardExpiration: new Date(),
        cardType: '',
    })

    const [errors, setErrors] = useState({
        status: "awaiting",
        message: "",
        isError: false,
        location: []
    })

    // store values in state
    const handleChange = e => {
        if (e instanceof Date) {
            setValues({...values, "cardExpiration": e})
        } else {
            const { name, value } = e.target
            setValues({
                ...values,
                [name]: value
            })
        }

    }

    // call validate-input, if everything is validated values will be console logged, 
    // and errors.isError == false + errors.status=submitted will be stored in state, 
    // which triggers rendering of table
    const handleSubmit = e => {
        e.preventDefault();
        const errors = validateInput();
        setErrors({...errors, "status": "submitted"});
        if (!errors.isError) {
            console.log(values)
        }
    }


    const validateInput = () => {
        
        let errors = {
            message: "",
            isError: false,
            location: [],
        }
        // all fields required
        const locations = []
        for (const key in values) {
            if (values[key] === "") {
                errors.message = "All fields are required.";
                errors.isError = true;
                locations.push(key)
            }
        }
        errors.location = locations
        if (errors.isError) return errors

        // length of card-holder name
        if (values.cardHolderName.length < 5) {
            errors.message = "Card Holder Name must be at least 5 characters."
            errors.isError = true
            errors.location.push('cardHolderName')
            return errors
        }

        // length of cardnumber
        if (values.cardNumber.length !== 16) {
            errors.message = "Card Number must be 16 digits."
            errors.isError = true
            errors.location.push("cardNumber")
            return errors
        }
        
        //length of ccv code
        if (values.ccvCode.length !== 3) {
            errors.message = "CCV Code must be 3 digits."
            errors.isError = true
            errors.location.push("ccvCode")
            return errors
        }

        // init new date for comparison
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const yearCard = values.cardExpiration.getFullYear();
        const monthCard = values.cardExpiration.getMonth();
        

        // card expired, due to year
        if (yearCard < year) {
            errors.message = "Your card is expired."
            errors.isError = true
            errors.location.push("cardExpiration")
            return errors
        }

        // card expired, year is valid - month is not.
        else if (yearCard === year && monthCard < month) {
            errors.message = "Your card is expired."
            errors.isError = true
            errors.location.push("cardExpiration")
            return errors
        }

        // no errors found, return errors.isError = false
        errors.message = "No Errors"
        errors.isError = false
        return errors
    
    }

    return { handleChange, handleSubmit, values, errors };
}

export default FormControl;