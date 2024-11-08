import React from 'react';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  onOptionSelect: (option: string) => void;
}

export function QuizQuestion({ question, onOptionSelect }: QuizQuestionProps) {
  return (
    <div className="mx-auto p-3 bg-white rounded-lg shadow-sm">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 flex-shrink-0">
          {question.icon}
        </div>
        <h2 className="text-base font-bold ml-2">{question.text}</h2>
      </div>
      
      <div className="space-y-1.5">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionSelect(option)}
            className="w-full text-left py-2 px-3 text-sm rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}