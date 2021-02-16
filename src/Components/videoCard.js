import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./videoCard.css";

class VideoCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { handleSetMovie} = this.props;
        const {image, descripton,name, likeNumber} = this.props.movie;
        return(
            <div className="VideoCard" onClick={() => handleSetMovie(likeNumber)}>
            <img className="videoImage" src={image} alt="image"/>
            <h2>{descripton}</h2>
            <p>{name}</p>
            <p>{likeNumber}</p>
            </div>
        )
    }

}
export default VideoCard;

