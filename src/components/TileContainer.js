import React, { Component } from 'react';
import Tile from "./Tile";
import GridModel from "../GridModel";
import TileModel from "../TileModel";

export default class TileContainer extends Component {
  render() {
    return (
      <div className="tile-container">
        {this.renderTiles()}
      </div>
    );
  }

  renderTiles() {
    var cells = [];

    // Old mergers
    // this.props.board.cells.forEach(function (column) {
    //   column.forEach(function (cell) {
    //     if (cell && ! cell.previousPosition && cell.mergedFrom) {
    //       cell.mergedFrom.forEach(function(merger) {
    //         cells.push(<Tile model={merger} merged={true} key={merger.key + 100000000} />);
    //       });
    //     }
    //   });
    // });

    // New tiles
    this.props.board.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell)
          cells.push(<Tile model={cell} merged={false} key={cell.key} />);
      });
    });

    return cells;
  }
}
