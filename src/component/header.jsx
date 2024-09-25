import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./theme-switcher";

export const Header = () => {
	return (
		<Navbar expand="lg" className="bg-danger-subtle">
			<Container>
				<Navbar.Brand href="#home">REDUX APP</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link to="/" as={Link}>
							Home
						</Nav.Link>
						<Nav.Link to="/about" as={Link}>
							About
						</Nav.Link>
						<Nav.Link to="/blog" as={Link}>
							Blog
						</Nav.Link>
						<Nav.Link to="/contact" as={Link}>
							Contact
						</Nav.Link>
					</Nav>
                    
					<div>
						<ThemeSwitcher />
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
