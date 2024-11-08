export interface Question {
  id: number;
  text: string;
  options: string[];
  icon: React.ReactNode;
}

export interface CaptureCard {
  name: string;
  price: string;
  features: string[];
  imageUrl: string;
  amazonUrl: string;
  recommendedFor: string[];
}