import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
export default class NewVilla extends Component {
    state = {
        filename: "",
        uploadedFile: "",
        uploadedFile: "",
        facilities: [],
        guests: "5 - 10",
        owner: null,
        checked: false,
    }
    componentDidMount() {
        const token = localStorage.usertoken
        if (token) {
            const decoded = jwt_decode(token)
            this.setState({ owner: decoded.user._id })
        }
    }
    onChangHandler = e => {
        this.setState({ [e.target.name]: e.target.value, })
        console.log("in onChange")
        console.log(e.target.id)
        if (e.target.id != "") {
            let temp = this.state.facilities.slice()
            let fIndex = temp.indexOf(e.target.id)
            if (fIndex < 0) {
                temp.push(e.target.id)
            } else {
                temp.splice(fIndex, 1)
            }
            this.setState({ facilities: temp })
        }
    }
    onSubmit = e => {
        e.preventDefault();
        const file = document.getElementById('inputGroupFile01').files
        const formData = new FormData()
        formData.append('img', file[0])
        console.log("file is ")
        let im = ""
        if (file.length != 0) {
            im = file[0].name
            axios.post("http://localhost:4000/uploadimage/", formData)
                .then(r => {
                    console.log("adding image")
                    console.log(r)
                })
                .catch(err => console.log(err))
        }
        let params = {
            name: this.state.name,
            city: this.state.city,
            price: this.state.price,
            description: this.state.description,
            guests: this.state.guests,
            facilities: this.state.facilities,
            area: this.state.area,
            owner: this.state.owner,
            x: this.state.x,
            y: this.state.y,
            image: im
        }
        console.log("params")
        console.log(params)
        axios.post("http://localhost:4000/villa/create", params)
        this.setState({ checked: true })
    }
    render() {
        console.log("facilities")
        console.log(this.state.facilities.length)
        return (
            <div className= "villacontainer">
            <div className="villatop">ADD VILLA</div>
        <div className="villaform">
         <Form>
          
          
             <Form.Group >
             <Form.Label className= "detalilsform">Villa Name:</Form.Label>
                 <Form.Control type="text"  /> 
             </Form.Group>
             <Form.Group >
                 
             <Form.Label  className= "detalilsform">Villa Area:</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
             
            <Form.Group >
    <Form.Label  className= "detalilsform">Select City</Form.Label>
    <Form.Control as="select">
      <option> Ryidh</option>
      <option>Jeddah</option>
      <option>Zilfy</option>
     
    </Form.Control>
  </Form.Group>
  <Form.Group >
             <Form.Label  className= "detalilsform">Villa Price:</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>
            <Form.Group >
            <Form.Label  className= "detalilsform">Select Number of Gusts:</Form.Label>
    <Form.Control as="select">
      <option> 5-10</option>
      <option>10-20</option>
      <option>20-30</option>
      <option>30-50</option>
      <option>50 and above</option>

    </Form.Control>
    </Form.Group>

    <Form.Group >
    <Form.Label className= "detalilsform">Villa Disceiption: </Form.Label>
    <Form.Control as="textarea"/>
  </Form.Group> 
   <Form.Group >
    <Form.Label className= "detalilsform">Location: </Form.Label>
    <Row>
        <Col>
        <Form.Control type="text"  placeholder="latitude"/>

    </Col>
    <Col>
    <Form.Control type="text"  placeholder="longitude"/>
    
    </Col>
    </Row>
    </Form.Group>  
    <Form.Label className= "detalilsform" >Facilities: </Form.Label>
    <br/>
    <br/>
    <Form style={{display:"grid", gridAutoColumns:"1fr 1fr 1fr"}}>
  {['checkbox'].map(type => (
    <div key={`default-${type}`} className="mb-3">
        <Row>
            <Col>
    
      <Form.Check  style={{float:"left"}} label="Terrace" type={type}  id={`default-${type}`} />
      <Form.Check  style={{float:"left"}} label="Sport Court " type={type}  id={`default-${type}`} />
      <Form.Check  style={{float:"left"}} label="WiFi" type={type}  id={`default-${type}`} />

     
      </Col>
      <Col>
     
      <Form.Check   style={{float:"left"}} label="Ketchien" type={type}  id={`default-${type}`} />
      <Form.Check  style={{float:"left"}} label="Garden" type={type}  id={`default-${type}`}/>
      <Form.Check  style={{float:"left"}} label="Grill" type={type}  id={`default-${type}`} />
     
      </Col>
      <Col>
     
      <Form.Check  style={{float:"left"}} label="Playground" type={type}  id={`default-${type}`} />
      <Form.Check  style={{float:"left"}}  label="Kids Pool" type={type}  id={`default-${type}`} />
      <Form.Check  style={{float:"left"}} label=" Swimming Pool" type={type}  id={`default-${type}`} />
     
      </Col>
      </Row>
    </div>
  ))}

</Form>
<div>

<form >
<div id="upload">
<div className="custom-file">
  <input style={{width:"50%"}} type="file" id="customFile"  multiple/>
  <label class="custom-file-label" htmlFor="customFile">Choose file</label>
  </div>
  <div>
  <input type="submit" value="Upload"  />
  </div>

</div>
</form>  

   

</div>       
            
            
            <button className="btnn" type="submit">
               ADD
            </button>
         
           
         </Form>
                        
        </div>
        </div>
        )
    }
}