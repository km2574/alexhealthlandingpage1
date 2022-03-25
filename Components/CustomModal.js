import { Button, Dropdown } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2'
import Head from 'next/head'
import React, { Component, useState, useEffect } from 'react';

const CustomModal = (props) => {
    const [phone, setPhone] = useState()
    const phoneNumber = {
        display: "flex",
        padding: "10px",
        fontFamily: "Arial"
    };
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/react-phone-number-input/style.css" />
            </Head>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="border-0" closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                        Please fill in the details below
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form method="post" action="https://api.testself.com/contact" name ="detail">
                        <div className="form-group ">
                            <label>Patient's Full Name</label>
                            <input type="text" className="form-control" id="fullname" name ="fullName"/>
                        </div>
                        <div className="form-group mt-3">
                        {/* <label>Patient's Full Name</label> */}
                            <PhoneInput
                                placeholder="Enter Phone Number"
                                name="phoneNumber"
                                type="text"
                                country={"in"}
                                required

                            />
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer className="border-0">
                    {/* <Button onClick={props.onHide}>Close</Button> */}
                    <div className="form-group mx-auto" >
                        <Button className="freecall border-0" variant="primary" type="submit" >Book a free call</Button>
                    </div>
                </Modal.Footer>

            </Modal>

            <script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
            <script>
                const scriptURL = 'https://script.google.com/macros/s/AKfycbzypUy60IZw2iDYX81aQOjio3UpP8mHC5rBDuNoEG1y_ThZRWKTP8TkPmcNuVH0ap0Q/exec'
                const form = document.forms['detail']
                form.addEventListener('submit', e => {
                    e.preventDefault()
                    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                    .then(response => console.log('Success!', response))
                    .catch(error => console.error('Error!', error.message))
                })
            </script>
            
            
            </>

    );
}
export default CustomModal;