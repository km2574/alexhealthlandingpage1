import { Container, Row, Col, Button, CardGroup, Card } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
import CustomModal from "./CustomModal";
const Packages = () => {
    return (
        <Container >
            <Row>
                <h1 className="text-center my-5">
                    Baby Delivery Packages
                </h1>
            </Row>
            <Row>
                <Col>
                    <Card className="mx-3 border-1 shadow-lg my-4" xs={1} md={2}>
                        <Card.Img variant="top" src="3.png" />
                        <Card.Body>
                            <Card.Title><h3>C-Section</h3></Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>3 Day Package</li>
                                    <li>Single Room Bed</li>
                                    <li>Doctor fees</li>
                                    <li>Surgery Fees</li>
                                    <li>Labour Room</li>
                                    <li>Paeditrics Consultant</li>
                                    <li>Cashless Facility Available</li>
                                </ul>
                                <h5>Price : Rs 80,000**</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mx-3 border-1 shadow-lg my-4" xs={1} md={2}>
                        <Card.Img variant="top" src="12.png" />
                        <Card.Body>
                            <Card.Title><h3>C-Section</h3></Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>3 Day Package</li>
                                    <li>Single Room Bed</li>
                                    <li>Doctor fees</li>
                                    <li>Surgery Fees</li>
                                    <li>Labour Room</li>
                                    <li>Paeditrics Consultant</li>
                                    <li>Cashless Facility Available</li>
                                </ul>
                                <h5>Price : Rs 1,15,000**</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mx-3 border-1 shadow-lg my-4" xs={1} md={2}>
                        <Card.Img variant="top" src="13.png" />
                        <Card.Body>
                            <Card.Title><h3>C-Section</h3></Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>3 Day Package</li>
                                    <li>Single Room Bed</li>
                                    <li>Doctor fees</li>
                                    <li>Surgery Fees</li>
                                    <li>Labour Room</li>
                                    <li>Paeditrics Consultant</li>
                                    <li>Cashless Facility Available</li>
                                </ul>
                                <h5>Price : Rs 1,15,000**</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="mx-3 border-1 shadow-lg my-4" xs={1} md={2}>
                        <Card.Img variant="top" src="3.png" />
                        <Card.Body>
                            <Card.Title><h3>Normal Delivery</h3></Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>2 Day Package</li>
                                    <li>Single Room Bed</li>
                                    <li>Doctor fees</li>

                                    <li>Labour Room</li>
                                    <li>Paeditrics Consultant</li>
                                    <li>Cashless Facility Available</li>
                                    <li>Neonatal Resuscitation</li>
                                </ul>
                                <h5>Price : Rs 70,000**</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mx-3 border-1 shadow-lg my-4" xs={1} md={2}>
                        <Card.Img variant="top" src="12.png" />
                        <Card.Body>
                            <Card.Title><h3>Normal Delivery</h3></Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>2 Day Package</li>
                                    <li>Single Room Bed</li>
                                    <li>Doctor fees</li>

                                    <li>Labour Room</li>
                                    <li>Paeditrics Consultant</li>
                                    <li>Cashless Facility Available</li>
                                    <li>Neonatal Resuscitation</li>
                                </ul>
                                <h5>Price : Rs 1,05,000**</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mx-3 border-1 shadow-lg my-4" xs={1} md={2}>
                        <Card.Img variant="top" src="13.png" />
                        <Card.Body>
                            <Card.Title><h3>Normal Delivery</h3></Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>2 Day Package</li>
                                    <li>Single Room Bed</li>
                                    <li>Doctor fees</li>

                                    <li>Paeditrics Consultant</li>
                                    <li>Cashless Facility Available</li>
                                    <li>Medical care Fee</li>
                                    <li>OT Fee</li>
                                </ul>
                                <h5>Price : Rs 1,05,000**</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Packages