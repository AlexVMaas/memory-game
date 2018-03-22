import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    guessed : [],
    score : 0,
    topscore : 0 
  };

  guessFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let score = this.state.score
    let guessed = this.state.guessed
    let topscore = this.state.topscore
    if (this.state.guessed.indexOf(id) === -1) {
      guessed.push(id);
      score = score + 1;
    } else {
        if (score > topscore) {
          topscore = score
        }
      guessed = [];
      score = 0
    }
    // Set this.state.friends equal to the new friends array
    this.setState({ guessed });
    this.setState({ score });
    this.setState({ topscore });    
  };


  shuffle = a => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    this.shuffle(this.state.friends)

    return (
      <Wrapper>
        <Title>Adventure Time! Score: {this.state.score} Top Score: {this.state.topscore}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            guessFriend={this.guessFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
