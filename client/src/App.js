import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    let isFound = false;

    if (savedList.length === 0) {
        savedList.push(movie);
        this.setState({ savedList });
    }
    else {
      for (let i=0; i < savedList.length; i++) {
        
        if (savedList[i].id === movie.id) {
          isFound = true;
        }
        else {
          isFound = false;
        }
      }

      if (isFound === false) {
          savedList.push(movie);
          this.setState({ savedList });
      }
    }
    
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} addToSavedList={this.addToSavedList}/>
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' render={props => 
          <Movie { ...props} component={Movie} addToSavedList={this.addToSavedList} />}  
        />
      </div>
    );
  }
}
