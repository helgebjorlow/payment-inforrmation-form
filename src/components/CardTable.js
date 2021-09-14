import React from 'react'
import { Table } from 'react-bootstrap';


const CardTable = ({values}) => {
    // renders a table with submitted info upon succesfull submit

    // create expirationString to display (avoid Object rendering)
    const expiration = values.cardExpiration;
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const month = monthNames[expiration.getMonth()]
    const year = expiration.getFullYear()
    const expirationString = (month + " " + year)

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>
                    Category
                </th>
                <th>
                    Information
                </th>
                </tr>
            </thead>
                <tbody>
                    {Object.entries(values).map((key, value) => (
                        <tr key={key}>
                            <td>
                               {key[0]}
                            </td>
                            <td>
                                {key[0] === 'cardExpiration' ? expirationString : key[1]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            
        </Table>
    )
}

export default CardTable
