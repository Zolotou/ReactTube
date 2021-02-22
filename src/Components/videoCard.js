import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./videoCard.css";
import ReactPlayer from 'react-player';

class VideoCard extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const videoStyle={
                width: '200px'
        }
        const { handleSetMovie} = this.props;
        const {videoURL, descripton,name, likeNumber} = this.props.movie;
        return(
            <div className="VideoCard" onClick={() => handleSetMovie(likeNumber)}>
                <div className="VideoPreview">
                    <ReactPlayer id={videoStyle} width='200px' height='200px' url={videoURL} light playIcon />
                </div>
                <div className="descriptionName">
                    <p>{name}</p>
                    <p className="description">{descripton}</p>
                    <p>{likeNumber}</p>
                </div>
            </div>
        )
    }

}
export default VideoCard;

