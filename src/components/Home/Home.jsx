import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllMovies } from "../../redux/actions";
import "./home.css";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export const mapDispatchToProps = { getAllMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
