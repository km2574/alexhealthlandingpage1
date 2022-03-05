import { Navbar, Container } from "react-bootstrap"
const nav = () => {
    return (
        <div className="bg">
            <Navbar>
                <Container>
                    <Navbar.Brand className="fs-4" href="#home">Alex Health</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="fs-4">
                            Signed in as: <a href="#login">Admin</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default nav