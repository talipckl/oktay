import React, { Component } from "react";
import { Link } from "react-router-dom";

class Searchbar extends Component {
  formSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <p
          className="p1"
          style={{
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            textShadow: "black 3px 4px",
            fontFamily: "sans-serif",
            justifyContent: "center",
          }}
        >
          {" "}
          İzlemek İstediğin Filmi veya Diziyi Arat
        </p>

        <div className="row col-12">
          <div className="col-10" style={{ paddingLeft: "80px" }}>
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search movie"
            />
          </div>
        </div>
      </form>
    );
  }
}
export default Searchbar;
