import React, { FC } from "react";
import { Row, Col } from "reactstrap";
import Navbar from "../Navbar";
import Alert from "../Alert";

const header: FC = () => {
  return (
    <>
      <Row>
        {/* <Col xs={8}>
          <h1>Movie Mania</h1>
        </Col> */}

        {/* <Col> */}
        <Navbar />
        {/* </Col> */}
      </Row>

      <hr />

      <Alert />
    </>
  );
};

export default header;
