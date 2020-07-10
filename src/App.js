import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Wizative',
            headerLinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' },
            ],
            home: {
                title: 'Introducing Wizative',
                subTitle: 'True Empowerment',
                text: 'Welcome to Wizative, the advanced Software Startup paving the way to the future. We are a team of like-minded and determined individuals, all sharing a vision for success. We believe that our sophisticated technology has the potential to become an industry sensation. Would you like to find out more? Explore our website today.'
            },
            about: {
                title: 'About me'
            },
            contact: {
                title: 'Keep in touch'
            }
        }
    }

    render() {
        return (
            <Router>
                <Container className="p-0 bg-dark " fluid={true}>

                    <Navbar className="border-bottom navbar-dark" bg="dark" expand="lg" >

                        <Link className="nav-link" to="/">
                            <Navbar.Brand >
                                Wizative
                            </Navbar.Brand> 


                        </Link>

                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto ">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>


                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                    <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
                    <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

                    <Footer />
                </Container>
            </Router>
        );
    }

}

export default App;
