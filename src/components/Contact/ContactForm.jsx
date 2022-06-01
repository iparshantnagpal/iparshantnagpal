/**
 * Name: ContactForm
 * Description: Contact Form componenet 
*/
import React, { useState } from "react";
import { Container, FloatingLabel, Form, Stack , Row , Col} from "react-bootstrap";
import {CustomButton} from "../../components/UIElements"
import "./ContactForm.scss";
import Calandly from "./Calandly";

const Input = ({
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
    error,
    required,
    controlId,
    isInvalid,
    ...props 
}) => {
    return(
    <FloatingLabel label={label} controlId={controlId} className="mb-3">
       <Form.Control 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          isInvalid={isInvalid}
          required={required}
          {...props}
       />
       <Form.Control.Feedback type={"invalid"}>{error}</Form.Control.Feedback>
    </FloatingLabel>)
}




const ContactForm = ()=> {
        const [formState, setFormState] = useState({
            name: "",
            email: "",
            message: ""
        });

        const [errors, setErrors] = useState({});

        const inputChangeHandler = (event) => {
            const { name, value} = event.target;
            console.log("eventeventeventevent" , name, value)
            setFormState((prevProps)=>({
             ...prevProps,
            [name]: value
            }));

            if(!!errors[name]){
                setErrors((prevState)=>({
                ...prevState,
                [name]: null
                }));
            }
        };

   return(
   <>
   <div id="contact-form">
   <Container>
       <div className="contact-form">
           <h1>I'd love to hear from you</h1>
           <Row className="mt-5">
               <Col className="mt-2" sm>
                 <Stack>
                     <h4>Simply Leave a message</h4>
                     <Form>
                         <Input
                          controlId={"floatingInput"}
                          label="Name"
                          type={"text"}
                          name="name"
                          value={formState.name}
                          onChange={inputChangeHandler}
                          placeholder={"Name"}
                          required
                          error={errors.name}
                          isInvalid={!!errors.name}

                         />
                         <Input 
                          controlId={"floatingPassword"}
                          label="Email"
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={inputChangeHandler}
                          placeholder="Email"
                          error={errors.email}
                          required
                          isInvalid={!!errors.email}
                         />
                         <Input
                          controlId={"floatingTextArea2"}
                          label="Message"
                          as='textarea'
                          name="message"
                          value={formState.message}
                          onChange={inputChangeHandler}
                          placeholder="Message"
                          error={errors.message}
                          required
                          isInvalid={!!errors.message}
                          style={{ height: '200px'}}
                         
                         />
                         <CustomButton type="submit">
                            Send Message
                         </CustomButton>

                     </Form>
                 </Stack>
               </Col>
               <Col sm>
                   <h2>Or</h2>
               </Col>
               <Col className="mt-2" sm>
                   <Stack gap={5}>
                       <h4>Schedule a Google Meet with me!</h4>
                       <Calandly/>
                   </Stack>
               </Col>
           </Row>
       </div>
   </Container>
   
   </div>
   </>)
}

export default ContactForm;