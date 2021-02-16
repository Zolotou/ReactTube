import { render } from '@testing-library/react';
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
            data.map((element) =>
                <VideoCard handleSetMovie = { handleSetMovie } key={element.likeNumber} movie= {element}/>
            )
        }
        </div>
    )
    }

}

export default ListOfVideos;