import React, { Component } from 'react'
import { Navbar, Nav, Button} from 'react-bootstrap'
import '../App.css';


export default class CustomNavbar extends Component {
  constructor(props){
    super()
    this.state = {
      hideNavItem: false
    }
  }
    componentDidMount(){
      if(window.location.pathname === '/CustomerLogin' ){
        this.setState({hideNavItem: true})
      }
    }
  

  //---------logout func----------//
    state = { activeItem: 'home' }
    handleItemClick = ((e, { name }) => {
      this.setState({ activeItem: name })
      // extra
      if (name === "home"){
        this.props.history.push(`/`)
      }else{
        this.props.history.push(`/${name}`)
      }
      })

      logout =()=>{
  console.log("anas")
  localStorage.removeItem('usertoken')
  this.props.history.push('/')
      }
  //---------End logout func-----//

  render() {
    return (
      <Navbar collapseOnSelect expand="lg"  variant="dark" style={{ backgroundColor: "#F6D55C"}}>
        <Navbar.Brand href="/">OnBay</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
       
          <ul className="nav justify-content-end nav-fill" >
          <li className="nav-item">
            <a className="nav-link" className="text-light"  href="/CustomerSignUp">Sign Up</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" className="text-light" href="/CustomerLogin" tabindex="-1" aria-disabled="true">Login In</a>
      </li>
     
            <li className="nav-item">
              <a className="nav-link active" className="text-light" href="/AddVilla">+ Add Villa</a>
           </li>
      
        <li className="nav-item">
          <a className="nav-link " className="text-light"  href="/CustomerEdit" tabindex="-1" aria-disabled="true"> Customer Edit </a>
        </li>
        <li className="nav-item">
          <a className="nav-link "className="text-light" href="/OwnerEdit" tabindex="-1" aria-disabled="true">Owner Edit </a>
        </li>
        <li className="nav-item">
          <a className="nav-link "className="text-light"  href="/VillasLists" tabindex="-1" aria-disabled="true">Villas Lists</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "className="text-light" href="/" tabindex="-1" aria-disabled="true">Log Out</a>
        </li>
      
</ul>
         
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
