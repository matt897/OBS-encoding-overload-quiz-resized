import { CaptureCard } from '../types';

type UserProfile = {
  type: 'high-performance' | 'budget-friendly' | 'console-gaming' | 'casual-streaming' | 'professional';
  description: string;
};

export function determineUserProfile(responses: string[]): UserProfile {
  // Check for high CPU usage and fast-paced gaming
  if (responses.includes('Very high (80-100%)') && 
      (responses.includes('Fast-paced games') || responses.includes('Software (x264)'))) {
    return {
      type: 'high-performance',
      description: 'Your setup requires high-performance capture solutions to handle demanding games and heavy CPU load.'
    };
  }

  // Check for console gaming focus
  if (responses.includes('Console games')) {
    return {
      type: 'console-gaming',
      description: 'These capture cards are perfect for console gaming streams and recordings.'
    };
  }

  // Check for casual/desktop streaming
  if ((responses.includes('Casual games') || responses.includes('Desktop/Browser')) && 
      responses.includes('Normal (below 60%)')) {
    return {
      type: 'casual-streaming',
      description: 'For your casual streaming needs, these budget-friendly options provide great value.'
    };
  }

  // Check for professional setup
  if (responses.includes('Hardware (NVENC/AMD)') && 
      responses.includes('I\'m using an SSD')) {
    return {
      type: 'professional',
      description: 'Based on your professional setup, these high-end capture cards will integrate perfectly.'
    };
  }

  // Default to budget-friendly
  return {
    type: 'budget-friendly',
    description: 'These affordable capture cards offer great value while solving your streaming issues.'
  };
}