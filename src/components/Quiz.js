import React, { useState } from "react";

const questions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      score: 1
    },
    {
      question: "What is the largest country in the world?",
      answer: "Russia",
      score: 1
    },
    {
      question: "What is the currency of Japan?",
      answer: "Yen",
      score: 1
    },
    {
      question: "What is the tallest mammal?",
      answer: "Giraffe",
      score: 1
    },
    {
      question: "What is the chemical symbol for gold?",
      answer: "Au",
      score: 1
    }
];

function Quiz() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [attempts, setAttempts] = useState(3);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    {console.log("attemps"+ " "  +attempts)}
    {console.log("game over"+gameOver)}

    const handleClick = ()=>{
      {console.log( "Inside handle "+ " " +attempts)}
      if(attempts ==  1) {
        setGameOver(true)
        return
      }

      if(questionIndex == questions.length-1){
        setGameOver(true);
        return
      }
     const ans =  questions[questionIndex].answer.toLowerCase() == answer;
     {console.log(ans)}
     if (ans){
      setScore((prev)=>prev = prev+1)
      setQuestionIndex((prev)=>prev = prev+1)
      setAttempts(3)
      setAnswer("")
     }
     else{
      setAttempts((prev)=>prev = prev-1)
     }
    }

    const handleRetry = ()=>{
      setGameOver((prev)=>!prev)
      setQuestionIndex(0)
      setAnswer("")
      setAttempts(3)
      setScore(0)


    }



    if (gameOver) {
      return (
        <div className="game-over-container">
          <h1 className="game-over-heading">Game Over</h1>
          <p className="score-para">Your score: {score/questions.length}</p>
          <button onClick={handleRetry} className="retry-btn">Retry</button>
        </div>
      );
    }
  
    return (
      <div>
        <h1 className="question-text">{questions[questionIndex].question}</h1>
        <input onChange={(e)=>{setAnswer(e.target.value)}} value={answer} className="answer-input"/><br />
        <button onClick={handleClick} className="submit-btn">Submit</button>
         {(attempts<3 && attempts >0) &&<p className="attempt-alert">{`Incorrect. ${attempts == 2?"Two attempts remaining.":attempts== 1?"One attempt remaining.":""}`}</p>}
      </div>
    );
}

export default Quiz;
