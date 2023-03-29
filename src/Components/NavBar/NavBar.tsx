import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Paths } from "../../Apis/Types";
import Logo from "../../Assets/Images/Logo.jpeg";
import "./NavBarS.scss";

export const NavBar = () => {
    let activeTab = Paths.HOME;
    return (
        <>
            <Navbar bg="light" variant="primary" className="NavBar" fixed="top">
                <Container>
                    <Navbar.Brand href={Paths.HOME}>
                        <Image fluid src={Logo} className="Logo" />
                    </Navbar.Brand>
                    <Nav
                        className="me-auto"
                        defaultActiveKey={activeTab}
                        variant="tabs"
                    >
                        <Nav.Item>
                            <Nav.Link href={Paths.HOME}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={Paths.EVENTCALENDER}>
                                Event Calender
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3" href="#contact">
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
