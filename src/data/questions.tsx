import { Cpu, HardDrive, Gamepad2, Settings2 } from 'lucide-react';
import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "What's your CPU usage like when streaming?",
    options: [
      "Very high (80-100%)",
      "Moderately high (60-80%)",
      "Normal (below 60%)",
      "I'm not sure"
    ],
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: 2,
    text: "Which encoder are you currently using?",
    options: [
      "Software (x264)",
      "Hardware (NVENC/AMD)",
      "I don't know",
      "QuickSync"
    ],
    icon: <Settings2 className="w-6 h-6" />
  },
  {
    id: 3,
    text: "Are you experiencing storage or disk issues?",
    options: [
      "My disk is almost full",
      "I'm using an HDD",
      "I'm using an SSD",
      "Not sure"
    ],
    icon: <HardDrive className="w-6 h-6" />
  },
  {
    id: 4,
    text: "What type of content are you streaming?",
    options: [
      "Fast-paced games",
      "Casual games",
      "Desktop/Browser",
      "Console games"
    ],
    icon: <Gamepad2 className="w-6 h-6" />
  }
];