import React, { Component } from 'react';
import VideoCard from './videoCard';


class ListOfVideos extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { data, handleSetMovie } = this.props;
        return ( 
        
            <div> {
            data.length !== 0 ? data.map((element) =>
            <VideoCard handleSetMovie = { handleSetMovie } key={element.likeNumber} movie= {element}/>
        ) : <h2>No movies with such criteria</h2>
            
        }
        </div>
    )
    }

}

export default ListOfVideos;