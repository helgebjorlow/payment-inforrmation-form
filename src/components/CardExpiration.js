import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CardExpiration = ({handleChange, values}) => {

    // imported simple datepicker component for this input,
    // takes in date object initialised in state as first value.
    return (
        <DatePicker
            name="cardExpiration"
            selected={values.cardExpiration}
            dateFormat="MM/yyyy"
            showMonthYearPicker={true}
            onChange={handleChange}

        />
      );
}

export default CardExpiration
