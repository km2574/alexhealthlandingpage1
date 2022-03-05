import { Container, Row, Col } from "react-bootstrap"
const Feature = () => {
    return (
        <div className="text-center feature mt-5 mb-5">
            <Container>
                <Row className="pt-5 pb-2 mb-4">
                    <h1>
                        How Does Alex Health Work?
                    </h1>
                </Row>
                <Row>
                    <Col sm>
                        <span className="fa fa-twitter" style={{ fontSize: 100 }}> </span>
                        <h2>Compare Hospitals’ Quality</h2>
                        <p className="fs-5">Just like you wouldn’t buy a mobile phone without looking at its features. Get info on emergency services for complications, doctor’s expertise and experience, hospital’s size & speciality
                        </p>
                    </Col>
                    <Col sm>
                        <span className="fa fa-twitter" style={{ fontSize: 100 }}> </span>
                        <h2>Compare Hospital Rates </h2>
                        <p className="fs-5">Get an estimated price you need to pay including expenses for medical complications and other additional charges apart from baby-delivery
                        </p>
                    </Col>
                    <Col sm>
                        <span className="fa fa-twitter" style={{ fontSize: 100 }}> </span>
                        <h2>Understand Insurance Coverage</h2>
                        <p className="fs-5">Are you covered? Find out the final amount you need to pay after applying your insurance.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Feature