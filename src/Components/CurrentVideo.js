import React, { Component } from 'react';
import "./CurrentVideo.css";


class CurrentVideo extends Component {
    constructor(props){
        super(props);

        this.handleLikes = this.handleLikes.bind(this);
    }

    handleLikes(type){
        this.setState({
            ...this.state,
            like: this.state.like ++
        })
    }
    render(){
        const {movie} = this.props;
        const handleLikes = this.handleLikes;
        return (
            <div className="CurrentVideo">
                <div className="Current-image" style={{backgroundImage : `url(${movie.image})`}}></div>
                <div className="Current-description">
                    <h2>{movie.name}</h2>
                    <h5>{movie.descripton}</h5>
                    <p onClick={() => handleLikes("like")}>{movie.likeNumber}</p>
                </div>
            </div>
        )
    }

}

export default CurrentVideo;