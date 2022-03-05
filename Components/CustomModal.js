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
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                        Please fill in the details below
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method="post" action="https://api.testself.com/contact">
                        <div className="form-group ">
                            <label for="fullname">Patient Full Name</label>
                            <input type="text" className="form-control" id="fullname" />
                        </div>
                        <div className="form-group mt-3">
                            <PhoneInput
                                placeholder="Enter"
                                name="phoneNumber"
                                type="text"
                                country={"in"}
                                value={phone}
                                onChange={setPhone}
                                // Set your inline styles here
                                required

                            />
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    {/* <Button onClick={props.onHide}>Close</Button> */}
                    <div className="form-group mx-auto" >
                        <Button variant="primary" type="submit" >Book a Demo</Button>
                    </div>
                </Modal.Footer>

            </Modal></>

    );
}
export default CustomModal;