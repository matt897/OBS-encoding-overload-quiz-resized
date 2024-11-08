import React from 'react';
import { ExternalLink, RotateCcw } from 'lucide-react';
import { CaptureCard } from '../types';

interface CaptureCardGridProps {
  cards: CaptureCard[];
  description: string;
  onStartOver: () => void;
}

export function CaptureCardGrid({ cards, description, onStartOver }: CaptureCardGridProps) {
  return (
    <div className="mx-auto p-3">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Recommended Cards</h2>
        <button
          onClick={onStartOver}
          className="flex items-center px-2 py-1 text-xs bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <RotateCcw className="w-3 h-3 mr-1" /> Start Over
        </button>
      </div>
      <p className="text-xs text-gray-600 mb-3">
        {description}
      </p>
      <div className="grid grid-cols-1 gap-3">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex">
              <img src={card.imageUrl} alt={card.name} className="w-20 h-20 object-cover" />
              <div className="p-2 flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-bold">{card.name}</h3>
                  <span className="text-xs font-semibold text-blue-600">{card.price}</span>
                </div>
                <ul className="space-y-0.5 mb-2">
                  {card.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-600">
                      <span className="mr-1">•</span> {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={card.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-2 py-1 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View on Amazon <ExternalLink className="ml-1 w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}