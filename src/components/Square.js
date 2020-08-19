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

function Square(props){
    return(
      <button className="square"
        onClick={props.onClick}
      >
        {props.value}
      </button>
    );
}

// props = 매개변수, state = 기억하게 하는데 사용
// class Square extends Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={()=>this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }
// onClick={()=>this.setState({value:'X'})}

export default Square;
