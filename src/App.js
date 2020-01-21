import React, { Component } from "react";
import axios from "axios";
import Slides from "./Slides";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100vh",
    background: "#444"
  }
});

class App extends Component {
  state = {
    searchText: "",
    amount: 25,
    apiUrl: "https://pixabay.com/api",
    apiKey: "14987027-7b2498190bc01cf052df9ed8b",
    images: []
  };

  componentDidMount = () => {
    document.onkeydown = e => {
      if (e.key === "ArrowLeft") {
        console.log("left");
      }
      if (e.key === "ArrowRight") {
        console.log("right");
      }
      if (e.key === "e") {
        this.keyChange("Elephant");
      }
      if (e.key === "g") {
        this.keyChange("Giraffe");
      }
      if (e.key === "w") {
        this.keyChange("Whale");
      }
      if (e.key === "k") {
        this.keyChange("Kangaroos jumping");
      }
      if (e.key === "ArrowDown") {
        console.log("down");
      }
    };
  };

  keyChange = val => {
    var tempImp = [];
    axios
      .get(
        `${this.state.apiUrl}/?key=${
          this.state.apiKey
        }&q=${val}&image_type=photo&per_page=${
          this.state.amount
        }&safesearch=true`
      )
      .then(res => this.setState({ images: res.data.hits }))
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Slides images={this.state.images} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
