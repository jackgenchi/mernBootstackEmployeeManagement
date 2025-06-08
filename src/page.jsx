import React from "react";
//import { NavLink } from 'react-router-dom'
// we're gonna lose the ability for the (active) page that we're on to be selected by switching to react-bootstrap
import { Navbar, Nav } from "react-bootstrap";
import Contents from "./Contents.jsx";

function NavBar(){
    return ( 
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" className="ml-3">Employee Management Application</Navbar.Brand>
            <Nav>
                <Nav.Link href="/employees">All Employees</Nav.Link>
                <Nav.Link href="/report">Reports</Nav.Link>
            </Nav>         
        </Navbar>
    )
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <Contents />
        </div>
    )
}