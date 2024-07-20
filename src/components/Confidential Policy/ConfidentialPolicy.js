
import React from "react";
import { Container, Col } from "react-bootstrap";

function ConfidentialPolicy() {

    return (
        <section>
            <Container fluid className="resume-section" id="resume">
                <Container className="resume-content">
                    <Col className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            Privacy Policy
                        </h1>
                        <p className="home-about-body">
                            <i>
                                <b className="purple">1. No Data Collection</b>
                            </i>{" "}

                            <br />
                            <br />
                            We would like to inform you that we do not collect any personal data from users of our application. You can use our application with confidence, knowing that your privacy is preserved.
                            <br />
                            <br />
                            <i>
                                <b className="purple">2. Application Usage</b>
                            </i>{" "}

                            <br />
                            <br />
                            While we do not collect any personal data, please note that some features of the application may require access to certain information on your device, such as camera access for taking photos or location access for location-based features. This information remains on your device and is not transmitted to our application or to third parties.
                            <br />
                            <br />
                            <i>
                                <b className="purple">3. Data Security</b>
                            </i>{" "}

                            <br />
                            <br />
                            Even though no personal data is collected, we still take measures to ensure the security of your use of the application. We use standard security methods to protect the integrity of the application and ensure a secure user experience.
                            <br />
                            <br />
                            <i>
                                <b className="purple">4. Changes to This Policy</b>
                            </i>{" "}

                            <br />
                            <br />
                            We reserve the right to update this privacy policy at any time. We recommend that you regularly review this page to stay informed of any changes. Changes to this privacy policy are effective immediately upon being posted on this page.
                            <br />
                            <br />
                            <i>
                                <b className="purple">5. Contact Us</b>
                            </i>{" "}

                            <br />
                            <br />
                            If you have any questions or concerns about this privacy policy, please contact us at ultras_007@hotmail.com.
                            <br />
                            <br />
                        </p>
                    </Col>
                </Container>
            </Container>
        </section>
    );
}

export default ConfidentialPolicy;
