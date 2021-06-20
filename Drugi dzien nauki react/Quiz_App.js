import './App.css';
import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state =  {
      playerScore : 0,
      questions: [
        {
          question: "What animal barks?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "What animal is more closely related to a tiger?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        }
      ]
    };
  }

  displayQuestion(index) {
    const question = this.state.questions[index];
    return (
      <div>
        <p>
          {question.question}
        </p>
        
        <button 
          onClick={() => this.answerQuestion(index, question.possibleAnswers[0])}>
            {question.possibleAnswers[0]}
        </button>
        
        <button 
          onClick={() => this.answerQuestion(index, question.possibleAnswers[1])}>
            {question.possibleAnswers[1]}
        </button>
        
        <br/>
        
        {this.displayResult(index)}
      
      </div>
    )
  }

  displayResult(index)
  {
    const question = this.state.questions[index];
    if(!question.playerChoice) {return;}

    if(question.playerChoice === question.rightAnswer)
      {
        return <p>Answer is correct!</p>
      }
      else
      {
        return <p>Answer is wrong!</p>
      }

  }

  updatePlayerScore() {
    const playerScore = this.state.questions.filter(
      q => q.rightAnswer === q.playerChoice).length;
    
      this.setState({playerScore});
      console.log("Score: ", playerScore);


  }

  answerQuestion(index, choice) {
    const answeredQuestion = this.state.questions[index];
    answeredQuestion.playerChoice = choice;
    const allQuestions = this.state.questions;
    allQuestions[index] = answeredQuestion;

    this.setState({
      questions : allQuestions
    }, () => {
      this.updatePlayerScore();
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Quiz Show!</h1>
        <hr/>
        {this.displayQuestion(0)}
        {this.displayQuestion(1)}
      </div>
    );
  }
}

export default App;
