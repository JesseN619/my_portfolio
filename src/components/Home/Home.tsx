import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import self from '../../assets/images/self.jpg';
import { makeStyles, createStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
                    <Col lg={6} className="mx-auto mt-5">
                        <Image src={self} className={classes.selfClass} roundedCircle />
                        <h1 className="text-center mt-4">Jesse Nauman</h1>
                        <h2 className="text-center">Software Engineer</h2>
                        <div className="icon-container text-center mt-3">
                            <div>
                                <a href="https://github.com/JesseN619" target="_blank">
                                    <GitHubIcon fontSize="large" className="icons text-center" />
                                </a>
                            </div>
                            <div className="ms-4">
                                <a href="https://www.linkedin.com/in/jesse-nauman-70a39b18b/" target="_blank">
                                    <LinkedInIcon fontSize="large" className="icons text-center" />
                                </a>
                            </div>
                        </div>
                        <div className="ms-3" id="about-me">
                            <table className="mb-5">
                                <tr>
                                    <th className="skills-head">Languages</th>
                                    <td className="skills">Python, JavaScript/TypeScript, JSON, HTML, CSS</td>
                                </tr>
                                <tr>
                                    <th className="skills-head">Frameworks/Libraries</th>
                                    <td className="skills">Flask, React, Redux, Tailwind CSS, Bootstrap, Material UI</td>
                                </tr>
                                <tr>
                                    <th className="skills-head">Data</th>
                                    <td className="skills">PostgreSQL, Pandas, NumPy, Pandas, Matplotlib, PySpark, Scikit-learn</td>
                                </tr>
                                <tr>
                                    <th className="skills-head">Tools</th>
                                    <td className="skills">Git, GitHub, Insomnia, Google Firebase, Heroku, Slack, VSCode, Google Workspace, Microsoft Office</td>
                                </tr>
                            </table>
                            {/* <ul className="skills-list">
                                <li><span className="skills-titles">Languages</span> Python, JavaScript/TypeScript, JSON, HTML, CSS</li>
                                <li><span className="skills-titles">Frameworks</span>/Libraries Flask, React, Redux, Tailwind CSS, Bootstrap, Material UI</li>
                                <li><span className="skills-titles">Data</span> PostgreSQL, Pandas, NumPy, Pandas, Matplotlib, PySpark, Scikit-learn</li>
                                <li><span className="skills-titles">Tools</span> Git, GitHub, Insomnia, Google Firebase, Heroku, Slack, VSCode, Google Workspace, Microsoft Office</li>
                            </ul> */}
                            <p>
                                I’m a perpetual learner and a problem solver. I enjoy technology and have a passion for the medical field.
                                The dynamics of biology and medicine have always interested me but being an engineer provides me a sense of
                                entertainment in the constant change. I started off building in JavaScript and have a drive for creativity
                                in design layout and user experience. I’ve also had a lot of fun tackling the back end in Python and Flask.
                            </p>
                            <p>
                                Outside of my studies and professional growth, my hobbies include gaming, fitness, and walking my dog.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}