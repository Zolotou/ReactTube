import React, { Component } from 'react';
import "./CurrentVideo.css";
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';

class CurrentVideo extends Component {
    constructor(props){
        super(props);
        this.state = {
            like : parseInt(props.movie.likeNumber),
            comment : localStorage.getItem(this.props.movie.name)? localStorage.getItem(this.props.movie.name).split(",") : []
        }
        this.inputPost = React.createRef();
        this.handlePost = this.handlePost.bind(this);
        this.handleLikes = this.handleLikes.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.movie !== prevProps.movie) {
            this.setState({
                ...this.state,
                like: parseInt(this.props.movie.likeNumber),
                comment : localStorage.getItem(this.props.movie.name)? localStorage.getItem(this.props.movie.name).split(",") : []
            })
        }
      }

    handleLikes(type){
        this.setState({
            ...this.state,
            like: type? this.state.like + 1 : this.state.like - 1
        })
    }
    
    handlePost(){
        const newComment = this.state.comment;
        newComment.unshift(this.inputPost.current.value);
        this.inputPost.current.value = "";
        this.setState({
            ...this.state,
            comment : newComment
        })
        localStorage.setItem(this.props.movie.name, this.state.comment);
    }

    render(){
        const {movie} = this.props;
        const handleLikes = this.handleLikes;
        const handlePost = this.handlePost;
        const comment = this.state.comment;
        return (
            <div className="CurrentVideo">
                <ReactPlayer url= {movie.videoURL} />
                <div className="Current-image" style={{backgroundImage : `url(${movie.image})`}}></div>
                <div className="Current-description">
                    <h2>{movie.name}</h2>
                    <h5>{movie.descripton}</h5>
                    <div className="LikeDislike">
                        <Button variant="contained" color="primary" id="like" onClick={() => handleLikes(true)}>Like</Button>
                        <p>{this.state.like}</p>
                        <Button variant="contained" color="primary" type="button" id="dislike" onClick={() => handleLikes(false)}>Dislike</Button>
                    </div>

                    <div >
                        <input ref={this.inputPost} type="text" name="" id=""/>
                        <Button variant="contained" color="primary"  onClick={() => handlePost()}>Post</Button>
                        <div>{comment.map((post) => <p className="Comment">{post}</p>)}</div>
                    </div>                                       
                </div>
            </div>
        )
    }

}

export default CurrentVideo;