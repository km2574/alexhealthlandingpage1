import { Container, Row, Col, Button } from "react-bootstrap"
import Link from "next/link"
import { useState } from 'react';
import CustomModal from "./CustomModal";
const Cta = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Container className="d-flex justify-content-around mt-5 mb-5">
                <Button onClick={() => setModalShow(true)} className="px-5" sm={6} size="lg"> Book a call</Button>
                <CustomModal show={modalShow}
                    onHide={() => setModalShow(false)} />
                <Button className="px-5 text-decoration-none" sm={6} size="lg"><Link href="http://wa.me/919657225542"><a className="text-white text-decoration-none">WhatsApp us</a></Link> </Button>
            </Container>
        </div>
    )
}

export default Cta