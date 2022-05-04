import { Container, Row, Col, Button } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
import CustomModal from "./CustomModal";
const tieups = () => {
    return (
        <div>
            <Row>
                <h1 className="text-center mt-5">Tie-ups With Top Indian Hospitals</h1>
            </Row>
            <Row >
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/13.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/2.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/3.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/4.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/5.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/6.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/7.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/8.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/9.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/10.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/11.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
                <Col className="d-flex justify-content-center" sm>
                    <Image
                        src="/12.png"
                        width={300}
                        height={300}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto my-auto"
                    />
                </Col>
            </Row>
        </div>
    )
}

export default tieups