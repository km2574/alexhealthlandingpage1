import { Navbar, Container } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
const nav = () => {
    return (
        <div className="bg">
            <Navbar>
                <Container>
                <Navbar.Brand className="fs-4" href="#home">
                        <Link href="/" passHref={true}>
                            <Image

                            src="/icon.jpeg"
                            width="185%"
                            height="185%"
                            layout="intrinsic"
                            alt="Alex Health"
                        />
                        </Link>
                    </Navbar.Brand>
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