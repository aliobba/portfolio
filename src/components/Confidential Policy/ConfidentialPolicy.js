import React from "react";
import { Container, Col } from "react-bootstrap";

function ConfidentialPolicy() {

    return (
        <section>
            <Container fluid className="resume-section" id="resume">
                <Container className="resume-content">
                    <Col className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            Politique de confidentialité

                        </h1>
                        <p className="home-about-body">
                            <i>
                                <b className="purple">1. Aucune collecte de données</b>
                            </i>{" "}

                            <br />
                            <br />
                            Nous tenons à vous informer que nous ne collectons aucune donnée personnelle des utilisateurs de notre application. Vous pouvez utiliser notre application en toute confiance, sachant que votre vie privée est préservée.
                            <br />
                            <br />
                            <i>
                                <b className="purple">2. Utilisation de l'application</b>
                            </i>{" "}

                            <br />
                            <br />
                            Bien que nous ne collections aucune donnée personnelle, veuillez noter que certaines fonctionnalités de l'application peuvent nécessiter l'accès à certaines informations de votre appareil, telles que l'accès à la caméra pour prendre des photos ou à la localisation pour des fonctionnalités basées sur la géolocalisation. Ces informations restent sur votre appareil et ne sont pas transmises à notre application ou à des tiers.
                            <br />
                            <br />
                            <i>
                                <b className="purple">3. Sécurité des données</b>
                            </i>{" "}

                            <br />
                            <br />
                            Même si aucune donnée personnelle n'est collectée, nous prenons tout de même des mesures pour garantir la sécurité de votre utilisation de l'application. Nous utilisons des méthodes de sécurité standard pour protéger l'intégrité de l'application et assurer une expérience utilisateur sécurisée.
                            <br />
                            <br />
                            <i>
                                <b className="purple">4. Modifications de cette politique</b>
                            </i>{" "}

                            <br />
                            <br />
                            Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Nous vous recommandons de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications. Les modifications apportées à cette politique de confidentialité entrent en vigueur dès leur publication sur cette page.
                            <br />
                            <br />
                            <i>
                                <b className="purple">5. Nous contacter</b>
                            </i>{" "}

                            <br />
                            <br />
                            Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à ultras_007@hotmail.com .
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