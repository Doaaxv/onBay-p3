import React, { Component } from 'react'
import vImage from "../assets/villaImg.jpg"
import ReactMapGL, { Marker } from 'react-map-gl'
import markerImg from "../assets/marker20.png"
import Ratings from 'react-ratings-declarative'
import { Form} from 'react-bootstrap'
import icon1 from "../assets/icons/wifi.png"
import icon2 from "../assets/icons/barbq.png"
import icon3 from "../assets/icons/terrace.png"
import icon4 from "../assets/icons/tree.png"
import icon5 from "../assets/icons/toboggan.png"
import icon6 from "../assets/icons/kitchen.png"
import icon7 from "../assets/icons/basketball.png"
import icon8 from "../assets/icons/swimming.png"
import icon9 from "../assets/icons/child.png"

export default class DetailPage extends Component {

    state = {
        ratings: null,
        reviewText: null,
        reviews: null,
        viewport: {
            width: 800,
            height: 400,
            // latitude: 37.78,
            // longitude: -122.41,
            latitude: 21.6394345,
            longitude: 39.1322110,
            zoom: 12
        }
    }

    inputChange(e) {
        this.setState({ reviewText: e.target.value })
    }

    postreview = () => {
        console.log("inside postreview")

        // let vId = "5ddad46c22a3fa4bf8e8ebbd"

        // let params = {
        //     customer: "5dda3c8bbe53b816fc107993",
        //     reviewtext: this.state.reviewText
        // }
        // let flag = 0


        // Axios.put("http://localhost:4000/villa/review/" + vId, params)

        //    console.log(this.state.review)
    }

    render() {


        let ratingAv = 3
        return (
           <div>
                <div className= "detalilsform">
                    <div>
                     
                    <img className="villimage"
                    src={vImage}
                    alt="First slide"
                />
                </div>
                <div style={{marginTop:"2%"}}>
                 <h1>Villa Name</h1>
                 {ratingAv > 0 &&
                    <Ratings
                        rating={this.state.rating}
                        widgetRatedColors="rgb(255, 209, 26)"
                    >
                        <Ratings.Widget widgetEmptyColor={ratingAv >= 1 ? "rgb(255, 209, 26)" : "rgb(203,211,227)"} />
                        <Ratings.Widget widgetEmptyColor={ratingAv >= 2 ? "rgb(255, 209, 26)" : "rgb(203,211,227)"} />
                        <Ratings.Widget widgetEmptyColor={ratingAv >= 3 ? "rgb(255, 209, 26)" : "rgb(203,211,227)"} />
                        <Ratings.Widget widgetEmptyColor={ratingAv >= 4 ? "rgb(255, 209, 26)" : "rgb(203,211,227)"} />
                        <Ratings.Widget widgetEmptyColor={ratingAv >= 5 ? "rgb(255, 209, 26)" : "rgb(203,211,227)"} />
                    </Ratings>}
                    <h3> Price</h3>
                    <br/>
                    <button type="button" class="btn btn-warning">Book Now</button>
                    </div>
                    
                </div>
                <br/>
                <br/>
              
                

  
        <div  style={{clear:"both"}}>
            <div className="label1">
                <h5 style={{float:"left", marginLeft:"10px"}}>Facilities</h5> 
            </div>
         <div className="facilities">

              <div>  <img className="icon" src={icon1}/></div>
                <div> <img className="icon" src={icon2}/></div>
             <div><img className="icon" src={icon3}/></div>
                <img className="icon" src={icon4}/>
                <img className="icon" src={icon5}/>
                <img className="icon" src={icon6}/>
                <img className="icon" src={icon7}/>
                <img className="icon" src={icon8}/>
                <img className="icon" src={icon9}/> 
                
                </div>
                </div>
                <div  style={{clear:"both"}}>
                    <div className="label1">
                    <h5 style={{float:"left", marginLeft:"10px"}}> Description</h5>
                    </div>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia arcu sit amet eros congue elementum.
                    Donec urna elit, dapibus non lacus vitae, tempor egestas tellus. Praesent eu urna vel tellus blandit blandit. Vivamus
                  quis eros vel libero faucibus tincidunt eu sed enim. Fusce tellus dolor, bibendum id felis nec, rhoncus tempor diam.
               Pellentesque mollis eu nunc vitae fermentum. Proin eget semper dolor. Nullam id felis non sem dictum elementum eu quis
                   sapien. Donec nec venenatis mauris, fringilla imperdiet lorem.
                    Phasellus id mauris augue. Curabitur ut ligula elit. Mauris vel mi eu neque luctus varius vel sed eros.</p>



                </div>
                <div  style={{clear:"both"}}>
                    <div className="label1">
                    <h5 style={{float:"left", marginLeft:"10px"}}> Location</h5>
                    </div>
                    <ReactMapGL className="mapMargins" {...this.state.viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                    onViewportChange={(viewport) => this.setState({ viewport })}>
                    <Marker latitude={21.6394345} longitude={39.1322110} offsetLeft={0} offsetTop={0} >
                       
                        <img src={markerImg} />
                    </Marker>
                   
                </ReactMapGL>
                </div>
                <div  style={{clear:"both"}}>
                    <div className="label1">
                    <h5 style={{float:"left", marginLeft:"10px"}}> Reviews</h5>
                    </div>
                    <br/>
                <div class="card">
                        <div class="card-body">
                            This is some text within a card body.
                        </div>
                </div>
                <div class="card">
                        <div class="card-body">
                            This is some text within a card body.
                        </div>
                </div>
                <div class="card">
                        <div class="card-body">
                            This is some text within a card body.
                        </div>
                </div>
               
                </div>
                <div  style={{clear:"both"}}>
                    <div className="label1">
                    <h5 style={{float:"left", marginLeft:"10px"}}>Add Reviews</h5>
                    </div>
                  <div style={{ width:"60%", marginLeft:"5px"}}>
                    <Form.Control  style={{ height:"150px"}} as="textarea" rows="2" size='sm' onChange={this.inputChange.bind(this)} />
               <input onClick={this.postreview.bind(this)} type="button" value="submit" />
               </div>
                </div>
                
                


            </div> 

   
    //             <br />
    //             <h2>Facilities icons</h2>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia arcu sit amet eros congue elementum.
    //                 Donec urna elit, dapibus non lacus vitae, tempor egestas tellus. Praesent eu urna vel tellus blandit blandit. Vivamus
    //                 quis eros vel libero faucibus tincidunt eu sed enim. Fusce tellus dolor, bibendum id felis nec, rhoncus tempor diam.
    //                 Pellentesque mollis eu nunc vitae fermentum. Proin eget semper dolor. Nullam id felis non sem dictum elementum eu quis
    //                 sapien. Donec nec venenatis mauris, fringilla imperdiet lorem.
    //                  Phasellus id mauris augue. Curabitur ut ligula elit. Mauris vel mi eu neque luctus varius vel sed eros.</p>
    //            
    //             <br />
    //             {ratingAv > 0 &&
    //                 <Ratings
    //                     rating={this.state.rating}
    //                     widgetRatedColors="rgb(255, 209, 26)"
    //                 >
    //                     <Ratings.Widget widgetEmptyColor={ratingAv >= 1 ? "rgb(255, 209, 26)" : "rgb(203,211,227)"} />
    //                     <Ratings.Widget widgetEmptyColor={ratingAv >= 2 ? "rgb(255, 209, 26)" : "rgb(203,211,227)"} />
    //                     <Ratings.Widget widgetEmptyColor={ratingAv >= 3 ? "rgb(255, 209, 26)" : "rgb(203,211,227)"} />
    //                     <Ratings.Widget widgetEmptyColor={ratingAv >= 4 ? "rgb(255, 209, 26)" : "rgb(203,211,227)"} />
    //                     <Ratings.Widget widgetEmptyColor={ratingAv >= 5 ? "rgb(255, 209, 26)" : "rgb(203,211,227)"} />
    //                 </Ratings>}
    //             <br />



    //             <h2>Add review</h2>
    //             <Form.Control as="textarea" rows="3" onChange={this.inputChange.bind(this)} />
    //             <input onClick={this.postreview.bind(this)} type="button" value="submit" />
                

    //             <h2>book it button</h2>


        )   
        }
}
