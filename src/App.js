import './App.css';
import data from './data';
import React, { Component } from 'react';
import CurrentVideo from './Components/CurrentVideo';
import ListOfVideos from './Components/ListOfVideos';
import SearchBar from "material-ui-search-bar"


class App extends Component {
  constructor(){
    super();
    this.state = {
      pickedMovie: data[0],
      movieNameForSearch : "",
      filter: false,
    };

    this.inputRef = React.createRef();
    this.handleSetMovie2 = this.handleSetMovie.bind(this);
    this.handleSort = this.handleSort.bind(this);
    
  }

  handleSetMovie(movieTitle) {
    const findMovieByTitle = data.find((mov) => mov.likeNumber == movieTitle);
    this.setState({
      ...this.state,
      pickedMovie : findMovieByTitle,
    });
  }

  handleSort(movieName) {
    let fill = false;
    if(!data.every((dat) =>{return dat.name.includes(movieName)})){
      fill = true; 
    }
    this.setState({
      ...this.state,
      movieNameForSearch : movieName,
      filter : fill
    });

  }

  showAllVideos(){
    this.setState({
      ...this.state,
      movieNameForSearch: "",
      filter: false
    })
    this.inputRef.current.value = "";
  }


  render(){
    const handleSetMovie = this.handleSetMovie2;
    const { pickedMovie, movieNameForSearch, filter } = this.state;
    return (
      <div className="App">
        <nav>React Tube</nav>
        <div className="filter">
        <SearchBar className="input" width="600px" ref={this.inputRef} onChange={(e)=>{this.handleSort(e)}}/>
          { filter ? <button onClick={()=> {this.showAllVideos()}} className="Show-All-Button">Show All</button> : null}
        </div>
        <div className="wrapper">
        <CurrentVideo movie={pickedMovie} />
        <ListOfVideos handleSetMovie={handleSetMovie}  data={data.filter((oneMovie) =>{return oneMovie.name.includes(movieNameForSearch)})}/>
        </div>
      </div>
    );
  }

}

export default App;
