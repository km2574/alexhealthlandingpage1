import Image from "next/image"
import {Container, Row, Col, Button } from "react-bootstrap"
const Herosection = () => {
    return (
        <div className="mt-5 mb-5 flex flex-column justify ">
            <Container>
                <Row className="mb-5 " >
                    <Col className="mx-auto">
                        <h1>Compare price & hospital for baby-delivery</h1>
                        <p className="fs-3">
                            With Ditto you can Compare prices & quality of hospitals, Get an estimated bill for all complications, Know what’s covered in your insurance, Get final amount you pay
                        </p>
                        <Button size="lg"> Book a free call</Button>
                    </Col>
                    <Col >
                    <Image
                        src="/heroSection.jpg"
                        width={600}
                        height={400}
                        layout="intrinsic"
                        alt="herosection"
                        className=" mx-auto border-4"
                    />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Herosection