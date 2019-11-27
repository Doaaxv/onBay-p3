import 'bootstrap/dist/css/bootstrap.min.css';
import {  Form, Button,
} from 'react-bootstrap'
import React, { Component } from 'react'


export default class AdminLogin extends Component {
    render() {
        return (
           <div className= "formcontainer">
                <div className="top">LOG IN</div>
            <div className="form">
             <Form>
              
              
                 <Form.Group controlId="formBasicEmail">
                     <Form.Control type="email" placeholder="Enter Email" />
                 </Form.Group>
                 
                 <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <button className="btnn"  type="submit">
                LOG IN
                </button>
             </Form>
                            
            </div>
            </div>
          
        )
    }
}
