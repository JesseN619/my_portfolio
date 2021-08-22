import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import self from '../../assets/images/self.jpg';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() => 
    createStyles({
        selfClass: {
            maxWidth: '35%',
            display: 'block',
            margin: 'auto',
            border: '4px solid #0275d8',
        },
        paragraph: {
            fontSize: '200%'
        }
    })
);
    

export const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Container className="text-white">
                <Row>
                    <Col lg={8} className="mx-auto mt-5">
                        <Image src={self} className={classes.selfClass} roundedCircle />
                        <h1 className="text-center mt-4">Jesse Nauman</h1>
                        <h2 className="text-center mb-5">Full Stack Web Developer</h2>
                        <p className="ms-3" id="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}