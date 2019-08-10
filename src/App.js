// import React from 'react';
import Jumbotron from "./components/jumbotron/Jumbotron";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/cards/Card";
import Footer from "./components/footer/Footer";
import starwars from "./starwars.json";
import React, { Component } from "react";
import "./app.css";


//sets the state to zero
class App extends Component {
  state = {
    starwars,
    clickedstarwars: [],
    score: 0
  };

  //when you click a character, remove it from array
  imageClick = event => {
    const currentstarwars = event.target.alt;
    const starwarsPrevClicked = this.state.clickedstarwars.indexOf(currentstarwars) > -1;

    //if character has been selected, reset the game and reorder all cards
    if(starwarsPrevClicked) {
      this.setState({
        starwars: this.state.starwars.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedstarwars: [],
        score: 0
      });
      alert("The Force is Not With You. There is no Try....either Do or Do Not...play again?");

      //when clicking on a character that has not been clicked, score increased and character images reordered

    } else {
      this.setState(
        {
          starwars: this.state.starwars.sort(function(a, b){
            return 0.5 - Math.random();
          }),
          clickedstarwars: this.state.clickedstarwars.concat(currentstarwars),
          score: this.state.score + 1
        },
        //if the player manages to pick all 12 characters without repeating one, they receive a winner's message and the game resets
        () => {
          if(this.state.score === 12) {
            alert("The Force is with this one!");
            this.setState({
              starwars: this.state.starwars.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedstarwars: [],
              score: 0
            });
          }
        }
      );
    }
  };

  //main layout of the page with the components rendered in the appropriate order
  render() {
    return (
      <div>
        <Jumbotron />
        <Navbar score={this.state.score} />
        <div className="wrappers">
          {this.state.starwars.map(starwars => (
            <Card imageClick={this.imageClick}
            id={starwars.id}
            key={starwars.id}
            image={starwars.image} />
          )
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;







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

