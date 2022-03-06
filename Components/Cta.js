import { Container, Row, Col, Button } from "react-bootstrap"
import Link from "next/link"
import { useState } from 'react';
import CustomModal from "./CustomModal";
const Cta = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Container className="d-flex justify-content-around mt-5 mb-5">
                <Col className="d-flex justify-content-around" sm>
                    <Button onClick={() => setModalShow(true)} size="lg">
                        <span className="fa fa-phone" style={{ fontSize: 20 }}> </span>
                        &nbsp;&nbsp;&nbsp;Book a free call
                    </Button>
                    <CustomModal show={modalShow}
                        onHide={() => setModalShow(false)} />
                </Col>
                <Col className="d-flex justify-content-around" sm>
                <Button className="flex justify-items-center my-auto" sm={6} size="lg">
                                    <span className="fa fa-whatsapp" style={{ fontSize: 25 }}> </span>
                                    <a className="text-white text-decoration-none my-auto">
                                        &nbsp;&nbsp;WhatsApp&nbsp;us
                                    </a>
                                </Button>
                </Col>
            </Container>
        </div>
    )
}

export default Cta