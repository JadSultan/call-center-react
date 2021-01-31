import React from 'react';


import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const NavigationBar = () => {

	return (
		<Navbar bg="dark" variant="dark">
			<Link to={""} className="navbar-brand">Home</Link>
			<Nav className="mr-auto">
			    {/*<Link to={"/add"} className="nav-link">Add Client</Link>*/}
			    <Link to={"/clients"} className="nav-link">View Clients</Link>
		    </Nav>
		</Navbar>
		);
} 

export default NavigationBar;