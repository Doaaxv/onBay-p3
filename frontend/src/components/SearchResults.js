import React, { Component } from 'react'
import { Card, Image, Row, Col, Button } from 'react-bootstrap'
import vImage from "../assets/villaImg.jpg"
import Ratings from 'react-ratings-declarative'

export default class SearchResults extends Component {
    state = {
        ratings: null,
        reviewText: null,
        reviews: null,
        viewport: {
            width: 800,
            height: 400,
        }
    }
    render() {
  
        let ratingAv = 3

        // console.log(this.props.location.state.results)
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
            <div>
                <button style={{width:"10%", margin:"5px"}} type="button" class="btn btn-warning">Detailes</button>
              
           
            
             </div>
        </div>
        </div>
        )
        }}