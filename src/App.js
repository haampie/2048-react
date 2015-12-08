import React, { Component } from "react";
import GridContainer from "./components/GridContainer";
import TileContainer from "./components/TileContainer";
import GameManager from "./GameManager";

require("../assets/main.scss");

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manager: new GameManager(4)
    };
  }

  onLeft() {
    var manager = this.state.manager;
    manager.move(3);
    this.setState({
      manager: manager
    });
  }

  onRight() {
    var manager = this.state.manager;
    manager.move(1);
    this.setState({
      manager: manager
    });
  }

  onTop() {
    var manager = this.state.manager;
    manager.move(0);
    this.setState({
      manager: manager
    });
  }

  onBottom() {
    var manager = this.state.manager;
    manager.move(2);
    this.setState({
      manager: manager
    });
  }

  render() {
    return (
      <div className="game-container">
        <GridContainer />
        <TileContainer board={this.state.manager.grid} />
        <div style={{position: 'absolute', left: '50%', transform: "translateX(-50%)", bottom: -30}}>
          <button onClick={this.onLeft.bind(this)}>
            LEFT
          </button> 

          <button onClick={this.onRight.bind(this)}>
            RIGHT
          </button> 

          <button onClick={this.onTop.bind(this)}>
            TOP
          </button> 

          <button onClick={this.onBottom.bind(this)}>
            BOTTOM
          </button>
        </div>
      </div>
    );
  }
}
