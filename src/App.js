import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title:"Borislav Petric",
      headerLinks:[
        {title:"Home",path:"/"},
        {title:"About",path:"/about"},
        {title:"Contact",path:"/contact"}
      ],
      home:{
        title:"Be retletness",
        subTitle:"This is subtitle",
        text:"this is text of this home"
      },
      about:{
        title:"About me"
      },
      contact:{
        title:"Let's talk"
      },
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
            <Navbar className='border-bottom' bg='transparent' expand='lg'>
               <Navbar.Brand>Borislav Petric</Navbar.Brand>
               <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'></Navbar.Toggle>
               <Navbar.Collapse id='navbar-toggle'>
                  <Nav className='ml-auto'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
            <Route path='/' exact render={()=> <HomePage title={this.state.home.title}  subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
            <Route path='/about' render={()=> <AboutPage title={this.state.about.title}  subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
            <Route path='/contact' render={()=> <ContactPage title={this.state.contact.title}  subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
            <Footer>

            </Footer>
        </Container>
      </Router>
    );
  }
}

export default App;
