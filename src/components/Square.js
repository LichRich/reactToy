import React, { Component } from 'react';

// class Square extends Component {
//   render() {
//     return(
//       <header>
//         <h1>{this.props.title}</h1>
//         {this.props.sub}
//       </header>
//     );
//   }
// }

// function Square(){
//     return(
//       <button className="square">
//         {props.value}
//       </button>
//     );
// }

class Square extends Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>)
  }
}

export default Square;
