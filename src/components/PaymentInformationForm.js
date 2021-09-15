import React from "react";
import FormControl from "../FormControl";
import CardHolderName from './CardHolderName'
import CardNumber from './CardNumber'
import CardExpiration from './CardExpiration'
import CcvCode from './CcvCode'
import CardType from './CardType'
import CardTable from './CardTable'
import { Button, Form, Alert, Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



const PaymentInformationForm = () => {
    // bootstrap Form Component with inputs imported from other files.

    // take in FormControl
    const { handleChange, handleSubmit, values, errors} = FormControl();
    

    return (<>
        <Container className="form-container">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
             {/* Conditional rendering of alert */}
              {errors.status === "submitted" ? 
              <Alert className="alert-dismissible small fade show p-2" variant={errors.isError ? "danger" : "success"}>
                {errors.isError ? errors.message : "Succesfully submitted card information."}
              </Alert> : <Alert className="alert-dismissible small fade show p-2" variant="info">Input your card information.</Alert>}
            </Col>
          </Row>
                                {/* Conditional rendering of error-icon */}
                                {(errors.location.indexOf("cardHolderName") > -1) ? 
            <span style={{fontSize: "10px"}}>
            <i className="placement fa fa-xs fa-exclamation-triangle"></i>
            </span> : ""}

          <Row>

            <Col>

            <CardHolderName handleChange={handleChange}/>
            </Col>
          </Row>
          {(errors.location.indexOf("cardNumber") > -1) ? 
            <span style={{fontSize: "10px"}}>
            <i className="placement fa fa-xs fa-exclamation-triangle"></i>
            </span> : ""}
          <Row>
            <Col>

            <CardNumber  handleChange={handleChange}/>
            </Col>
          </Row>
          <Row className="h-specified">
            <Col h-5>
            {(errors.location.indexOf("ccvCode") > -1) ? 
            <span style={{fontSize: "10px"}}>
            <i className="fa fa-xs fa-exclamation-triangle"></i>
            </span> : ""}
            <CcvCode handleChange={handleChange}/>
            </Col>
            <Col className={(errors.location.indexOf("cardExpiration") > -1) ? "transform-up" : ""}>
            {(errors.location.indexOf("cardExpiration") > -1) ? 
            <span className={(errors.location.indexOf("cardExpiration") > -1) ? "placement-error" : ""}  style={{fontSize: "10px"}}>
            <i className=" fa fa-xs fa-exclamation-triangle"></i>
            </span> : ""}
            <CardExpiration  handleChange={handleChange} values={values}/>
            </Col>
            <Col>
            {(errors.location.indexOf("cardType") > -1) ? 
            <span style={{fontSize: "10px"}}>
            <i className="fa fa-xs fa-exclamation-triangle"></i>
            </span> : ""}
            <CardType handleChange={handleChange}/>
            </Col>
          </Row>
        <Button
              size={"block"}
              data-testid="validateButton"
              id="validateButton"
              type="submit"
              variant="success"
            >submit</Button>
        </Form>

        {/* Container with table, rendered upon succesful submit */}
        </Container>
        {errors.status === "submitted" && !errors.isError ? 
        <Container className="card-table-container">
        <CardTable className="card-table"values={values}/>
        </Container>
        : ""
        }
      </>
    )
}

export default PaymentInformationForm

