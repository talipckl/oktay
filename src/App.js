import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import Movielist from "./components/Movielist";
import axios from "axios";
import Addmovie from "./components/Addmovie";
import resim from "./components/film.jpg";
import About from "./components/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "./components/Edit";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  componentDidMount() {
    this.getMovies();
  }
  //---------------
  async getMovies() {
    const response = await axios.get("http://localhost:3002/movies");

    this.setState({ movies: response.data });
  }

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
    this.getMovies();
  };

  // filtreleme
  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  //ekleme
  Addmovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);

    this.setState((state) => ({
      movies: state.movies.concat([movie]),
    }));
    this.getMovies();
  };

  //güncelleme
  editMovie = async (id, updateMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, updateMovie);
    this.getMovies();
  };
  render() {
    //filtreleme fonskiyonu
    let filteredMovies = this.state.movies
      .filter((movie) => {
        return (
          movie.name
            .toLowerCase()
            .indexOf(this.state.searchQuery.toLowerCase()) !== -1
        );
      })
      .sort((a, b) => {
        return a.id < b.id ? 1 : -1; // id seçimin tersine döndürür
      });

    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route
              path="/add"
              exact
              render={({ history }) => (
                <Addmovie
                  onAddMovie={(movie) => {
                    this.Addmovie(movie);
                    history.push("/");
                  }}
                />
              )}
            />

            <Route
              path="/edit/:id"
              render={(props) => (
                <Edit
                  {...props}
                  onEditMovie={(id, movie) => {
                    this.editMovie(id, movie);
                  }}
                />
              )}
            />

            <Route
              path="/"
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div
                      className="container-fluid"
                      style={{
                        backgroundImage: `url(${resim})`,
                        width: "100%",
                        height: "35rem",
                        "background-repeat": "no-repeat",
                        "margin-bottom": "2rem",
                        opacity: "0.7",
                      }}
                    >
                      <div
                        className="col-12 "
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingTop: "210px",
                        }}
                      >
                        <Searchbar searchMovieProp={this.searchMovie} />
                      </div>
                    </div>
                  </div>

                  <Movielist
                    movies={filteredMovies}
                    deleteITem={this.deleteMovie}
                  />
                </React.Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
