import React from "react";
import Contactus from "./ContactUs";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>
		Sara Booking
	</h1>
	<Container>
		<Row>
		<Column>
        <Heading>XX</Heading>
			<FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				GitHub
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
        <Column>
			<Heading>Contact Us</Heading>
			<Contactus />
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
