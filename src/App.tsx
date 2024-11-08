import React, { useState } from 'react';
import { QuizQuestion } from './components/QuizQuestion';
import { CaptureCardGrid } from './components/CaptureCardGrid';
import { questions } from './data/questions';
import { captureCards } from './data/captureCards';
import { determineUserProfile } from './utils/recommendationLogic';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userResponses, setUserResponses] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    const newResponses = [...userResponses, option];
    setUserResponses(newResponses);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length);
    }
  };

  const handleStartOver = () => {
    setCurrentStep(0);
    setUserResponses([]);
  };

  const getRecommendedCards = () => {
    const userProfile = determineUserProfile(userResponses);
    return {
      cards: captureCards[userProfile.type],
      description: userProfile.description
    };
  };

  return (
    <div className="min-h-fit max-h-[600px] w-[80vw] mx-auto bg-gray-100 overflow-y-auto rounded-lg">
      <div className="p-3">
        <div className="text-center mb-2">
          <h1 className="text-xl font-bold">
            Is OBS Encoding Overloading Your System?
          </h1>
          <p className="text-xs text-gray-600">
            Take This Quick Quiz to Fix It Fast!
          </p>
        </div>
        
        {currentStep < questions.length ? (
          <QuizQuestion
            question={questions[currentStep]}
            onOptionSelect={handleOptionSelect}
          />
        ) : (
          <CaptureCardGrid
            {...getRecommendedCards()}
            onStartOver={handleStartOver}
          />
        )}
      </div>
    </div>
  );
}

export default App;