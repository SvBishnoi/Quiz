import React, { useState } from 'react'

export default function App() {
	const questions = [
		{
			questionText: 'What is the process at the most detailed level of the data flow diagrams known as?',
			answerOptions: [
				{ answerText: 'Interfaces', isCorrect: false },
				{ answerText: 'Functional Primitives', isCorrect: true },
				{ answerText: 'Data Flow', isCorrect: false },
				{ answerText: 'Transform Description', isCorrect: false },
			],
		},
		{
			questionText: 'Total bits used by the IPv6 address is ________',
			answerOptions: [
				{ answerText: '64 bit', isCorrect: false },
				{ answerText: '256 bit', isCorrect: false },
				{ answerText: '128 bit', isCorrect: true },
				{ answerText: '32 bit', isCorrect: false },
			],
		},
		{
			questionText: 'Identify the language which is mainly used for Artificial Intelligence',
			answerOptions: [
				{ answerText: 'JAVA', isCorrect: false },
				{ answerText: 'J2EE', isCorrect: false },
				{ answerText: 'Prolog', isCorrect: true },
				{ answerText: 'C', isCorrect: false },
			],
		},
		{
			questionText: 'How many levels are there in the architecture of the database?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '4', isCorrect: false },
				{ answerText: '5', isCorrect: false },
			],
		},
    {
			questionText: 'Among the following which is not a database management software',
			answerOptions: [
				{ answerText: 'MySQl', isCorrect: false },
				{ answerText: 'COBOL', isCorrect: true },
				{ answerText: 'Sybase', isCorrect: false },
				{ answerText: 'Oracle', isCorrect: false },
			],
		},
    {
			questionText: 'Identify the total standard color names that HTML supports.',
			answerOptions: [
				{ answerText: '30', isCorrect: false },
				{ answerText: '70', isCorrect: false },
				{ answerText: '140', isCorrect: true },
				{ answerText: '120', isCorrect: false },
			],
		},
    {
			questionText: 'Choose the port number of FTP.',
			answerOptions: [
				{ answerText: '23', isCorrect: false },
				{ answerText: '21', isCorrect: true },
				{ answerText: '110', isCorrect: false },
				{ answerText: '143', isCorrect: false },
			],
		},
    {
			questionText: 'Total number of layers in OSI model is ___________',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '7', isCorrect: true },
				{ answerText: '9', isCorrect: false },
				{ answerText: '11', isCorrect: false },
			],
		},
    {
			questionText: 'UNIX is written in which language?',
			answerOptions: [
				{ answerText: 'C#', isCorrect: false },
				{ answerText: 'C++', isCorrect: false },
				{ answerText: 'C', isCorrect: true },
				{ answerText: '.Net', isCorrect: false },
			],
		},
    {
			questionText: 'Identify the different features of Big Data Analytics.',
			answerOptions: [
				{ answerText: 'open sourse', isCorrect: false },
				{ answerText: 'data recovery', isCorrect: false },
				{ answerText: 'Scalability', isCorrect: false },
				{ answerText: 'All of the Above', isCorrect: true },
			],
		},
	]

  const [currentIndex, setCurrentIndex] = useState(0);  
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  function handleAnswerClick(isCorrect) {
    if(isCorrect){
      setScore((score) => score +1);
    }
    if(currentIndex === questions.length - 1){
      setQuizFinished(true);
    }
    else{
    setCurrentIndex((prev) => prev + 1);
    }
  }

	return (
		<div className="app">
			{quizFinished ? (
				<div className="score-section">
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							<span>Question {currentIndex + 1}</span>/{questions.length}
						</div>
					
						<div className="question-text">
              {questions[currentIndex].questionText}
						</div>
					</div>
					<div className="answer-section">
                 {questions[currentIndex].answerOptions.map((answer) => {
							// Add onClick listener to this button
							return (
								<button key={answer.answerText} onClick={() => handleAnswerClick(answer.isCorrect)}>
									{answer.answerText}
								</button>
							)
						})}
					</div>
				</>
			)}
		</div>
	)
}