import { Col, Container, Row } from "react-bootstrap";
import Sider from "./Sider";
import { Route, Routes } from "react-router-dom";
import PostJob from "./PostJob";
export default function Admin() {
    return (
        <Container fluid>
            <Row>
                <Sider />
                <Routes>
                    <Route path="/postJob" element={<PostJob />} />
                </Routes>

            </Row>
        </Container>
    )
}