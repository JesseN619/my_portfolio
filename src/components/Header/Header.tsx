import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

// import { makeStyles, createStyles } from '@material-ui/core';

// const useStyles = makeStyles(() => 
//     createStyles({
//         icons: {
//             verticalAlign: '5px'
//         }
//     })
// );

export const Header = () => {
    // const classes = useStyles();

    return (
        <div>
            <Navbar id="nav" bg="primary" variant="dark" expand="md">
                <LinkContainer to='/' href="">
                    <Navbar.Brand className="ms-5" id="nav">Jesse Nauman</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-5" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-5">
                        <LinkContainer to='/' href="">
                            <Nav.Link className="ms-3">Home</Nav.Link>
                        </LinkContainer>
                        {/* <LinkContainer to='/resume' href="">
                            <Nav.Link className="ms-3">Resume</Nav.Link>
                        </LinkContainer> */}
                        <LinkContainer to='/portfolio' href="">
                            <Nav.Link className="ms-3">Portfolio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact' href="">
                            <Nav.Link className="ms-3">Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
{/* <div className="icon-container">
<Nav.Link className="ms-3">

</Nav.Link>
</div> */}