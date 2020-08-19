import React, {Component} from 'react';
import Square from './Square';

// function Board() {
//     return (
//       <nav>
//         <ul>
//           <li><a href="1.html">HTML</a></li>
//           <li><a href="2.css">CSS</a></li>
//           <li><a href="3.js">JavaScript</a></li>
//         </ul>
//       </nav>
//     );
// }

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={()=> this.props.onClick(i)}
        />
    );
  }
  // 여기서 value, onCLick은 prop.

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>);
  }
}

export default Board;
