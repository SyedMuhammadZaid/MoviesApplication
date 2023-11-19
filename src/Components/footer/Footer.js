import React from "react";
import "./footer.scss";
import { Row, Col } from "antd";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { PiFacebookLogoFill } from 'react-icons/pi'
import { PiInstagramLogoFill,PiTwitterLogoBold } from 'react-icons/pi'

const Footer = () => {
  return (
    <Row justify="center" className="footer">
      <ContentWrapper
        chlildren={
          <>
            <ul className="menu-items">
              <li className="menu-item"> Term of use</li>
              <li className="menu-item">Privacy Policy</li>
              <li className="menu-item"> About</li>
              <li className="menu-item">Blog</li>
              <li className="menu-item"> FAQ</li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <Col span={24} className="social-handles">
              <PiFacebookLogoFill color="white" size="32px" style={{marginRight:'10px'}} className="social-icon" />
              <PiInstagramLogoFill color="white" size="32px"  style={{marginRight:'10px'}} className="social-icon"  />
              <PiTwitterLogoBold color="white" size="32px" style={{marginRight:'5px'}}  className="social-icon"  />
            </Col>
          </>
        }
      ></ContentWrapper>
    </Row>
  );
};

export default Footer;
