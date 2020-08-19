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
  render(){
    return(
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol></ol>
        </div>
      </div>
    );
  }
}

export default App;
