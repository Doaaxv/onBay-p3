import React, { Component } from 'react'
import '../App.css';
import vImage from "../assets/villaImg.jpg"


export default class SearchResults extends Component {
    render() {

        return (
            <div className= "detalilsform" style={{backgroundColor:"#eff3f6"}}>
            <div>
             
            <img className="villimage"
            src={vImage}
            alt="First slide"
        />
        </div>
        <div style={{marginTop:"10%"}}>
         <h3>Villa Name</h3>
      
            
            <br/>
            <div>
                <button style={{width:"10%", margin:"5px"}} type="button" class="btn btn-warning">Edit</button>
                <button style={{width:"10%", margin:"5px"}}  type="button" class="btn btn-warning">Delet</button>
           
            
             </div>
        </div>
        </div>
        )
            

   
            }
        }
        
