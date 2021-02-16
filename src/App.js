import './App.css';
import data from './data';
import { Component } from 'react';
import CurrentVideo from './Components/CurrentVideo';
import ListOfVideos from './Components/ListOfVideos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pickedMovie: data[0],
      movieNameForSearch : ""
    };

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
    this.setState({
      ...this.state,
      movieNameForSearch : movieName
    })
  }

  render(){
    const handleSetMovie = this.handleSetMovie2;
    const { pickedMovie, movieNameForSearch } = this.state;
    console.log(movieNameForSearch);
    return (
      <div className="App">
        <nav>Navbar name</nav>
        <div className="wrapper">
        <input className="input" onChange={(e)=>{this.handleSort(e.target.value)}}></input>
        <CurrentVideo movie={pickedMovie}/>
        <ListOfVideos handleSetMovie={handleSetMovie} data={data.filter((oneMovie) =>{return oneMovie.name.includes(movieNameForSearch)})}/>
        </div>
      </div>
    );
  }

}

export default App;
