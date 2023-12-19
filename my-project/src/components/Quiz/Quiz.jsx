// src/Quiz.js
import React, { useState } from 'react';


const questions = [
  {
    question: 'How would you currently describe your overall mental well-being?',
    options: ['Excellent', 'Good', 'Fair', 'Poor'],
  },
  {
    question: 'In the past week, how frequently have you experienced feelings of stress or anxiety?',
    options: ['Rarely or never', 'Occasionally', 'Frequently', 'Constantly'],
  },
  {
    question: 'How would you rate your quality of sleep on a typical night?',
    options: ['Excellent', 'Good', 'Fair', 'Poor'],
  },
  {
    question: 'Are you currently engaging in activities that bring you joy and relaxation?',
    options: ['Yes, regularly', 'Occasionally', 'Rarely', 'Not at all'],
  },
  {
    question: 'In what ways would you like to improve your mental well-being and overall health?',
    options: [
      'Managing stress better',
      'Improving sleep habits',
      'Incorporating more physical activity',
      'Enhancing social connections',
      'All of the above',
      'Other (please specify)',
    ],
  },
  {
    question: 'On a scale of 1 to 10, how satisfied are you with your current work-life balance?',
    options: ['1-3 (Very dissatisfied)', '4-6 (Slightly dissatisfied)', '7-8 (Satisfied)', '9-10 (Very satisfied)'],
  },
  {
    question: 'Do you currently have a support system or someone you can talk to about your mental health?',
    options: ['Yes, regularly', 'Occasionally', 'Rarely', "No, I don't have a support system"],
  },
  {
    question: 'What specific steps or changes would you like to make to enhance your mental well-being in the next month?',
    options: [
      'Establishing a regular exercise routine',
      'Trying mindfulness or meditation practices',
      'Seeking professional counseling or therapy',
      'Improving time management skills',
      'Other (please specify)',
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    setUserAnswers([...userAnswers, { question: currentQuestion, answer: selectedAnswer }]);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
    <div className="max-w-md w-full mx-4 p-6 bg-white rounded-md shadow-md">
      {showResult ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-500">Quiz Result</h2>
          <ul className="text-lg">
            {userAnswers.map((ua, index) => (
              <li key={index} className="mb-2">
                {questions[ua.question].question}: {ua.answer}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-white">Mental Health Quiz</h1>
          <p className="mb-4 text-gray-700">{questions[currentQuestion].question}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
  

  );
};

export default Quiz;
