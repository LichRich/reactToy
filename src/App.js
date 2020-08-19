import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Square from './components/Square'
import Board from './components/Board'


// function~은 함수형식 !!!
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Subject />
//       <Navi />
//       <Article />
//     </div>
//   );
// }
//
// function Subject() {
//   return (
//     <header>
//       <h1>WEB</h1>
//       Hello, This is web !!!
//     </header>
//   );
// }
//
// function Navi() {
//   return (
//     <nav>
//       <ul>
//         <li><a href="1.html">HTML</a></li>
//         <li><a href="2.css">CSS</a></li>
//         <li><a href="3.js">JavaScript</a></li>
//       </ul>
//     </nav>
//   );
// }
//
// function Article() {
//   return (
//     <article>
//       <h2>HTML</h2>
//       HTML is HyperText Markup Language.
//     </article>
//   );
// }
//
// // class ~ 는 클래스 형식 !!!
// class App extends Component {
//   render() {
//     return(
//       // components 폴더의 export 대상인 Subject를 import해와서 사용.
//       <div className="App">
//         <Subject title="WEB" sub="Hello, This is web !!!"/>
//         <Subject title="이것이" sub="유연함이다!" />
//         <Navi />
//         <Article />
//       </div>
//     );
//   }
// }

// class Subject extends Component {
//   render() {
//     return(
//       <header>
//         <h1>{this.props.title}</h1>
//         {this.props.sub}
//       </header>
//     );
//   }
// }

// class Navi extends Component {
//   render() {
//     return (
//       <nav>
//         <ul>
//           <li><a href="1.html">HTML</a></li>
//           <li><a href="2.css">CSS</a></li>
//           <li><a href="3.js">JavaScript</a></li>
//         </ul>
//       </nav>
//     );
//   }
// }

// class Article extends Component {
//   render() {
//     return (
//       <article>
//         <h2>HTML</h2>
//         HTML is HyperText Markup Language.
//       </article>
//     );
//   }
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i]){return;}
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
      'Go to move #' + move :
      'Go to game start';
      return (
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if(winner){
      status = 'Winner: ' + winner;
    } else {
      status = "Next player : " + (this.state.xIsNext ? "X" : "O");
    }

    return(
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i)=>this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for(let i = 0 ; i < lines.length ; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){return squares[a];}
  }
  return null;
}

export default App;
