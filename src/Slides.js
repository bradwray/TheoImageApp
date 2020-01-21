import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SwipeableViews from "react-swipeable-views";

const styles = {
  tabs: {
    background: "#fff",
    height: "120px",
    position: "fixed",
    bottom: 0,
    zIndex: 1000
  },
  slide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    height: "80vh",
    color: "#fff"
  },
  bg: {
    background: "#444"
  }
};

class Slides extends React.Component {
  state = {
    index: 0
  };

  handleChange = (event, value) => {
    this.setState({
      index: value
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;
    console.log(this.props.images);
    return (
      <div style={styles.bg}>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          {this.props.images.map(pic => (
            <div style={styles.slide}>
              <img height={screen.height * 0.8} src={pic.largeImageURL} />
            </div>
          ))}
        </SwipeableViews>
        <Tabs
          centered
          value={index}
          onChange={this.handleChange}
          style={styles.tabs}
        >
          {this.props.images.map(pic => (
            <Tab icon={<img width="100px" src={pic.webformatURL} />} />
          ))}
        </Tabs>
      </div>
    );
  }
}

export default Slides;
