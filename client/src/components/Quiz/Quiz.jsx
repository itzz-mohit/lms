import React from "react";
import Quiz from "react-quiz-component";

const staticQuizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    correctAnswer: "Berlin",
  }
];

const Quizs = () => {
  console.log("staticQuizData:", staticQuizData);

  if (!staticQuizData || staticQuizData.length === 0) {
    return <div>No quiz data available.</div>;
  }

  return (
    <div>
      <h1>Quiz</h1>
      <Quiz quiz={staticQuizData} />
    </div>
  );
};

export default Quizs;
