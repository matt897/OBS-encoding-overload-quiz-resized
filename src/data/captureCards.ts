import { CaptureCard } from '../types';

export const captureCards: Record<string, CaptureCard[]> = {
  'high-performance': [
    {
      name: "AVerMedia Live Gamer 4K",
      price: "$119",
      features: [
        "4K/60fps capture",
        "HDR support",
        "USB-C interface",
        "Ultra-low latency",
        "Hardware encoding support"
      ],
      imageUrl: "https://m.media-amazon.com/images/I/61zndgRggdL._AC_SL1000_.jpg",
      amazonUrl: "https://amzn.to/4fD1jzb",
      recommendedFor: ["Fast-paced games", "Very high (80-100%)", "Hardware (NVENC/AMD)"]
    },
    {
      name: "Elgato 4K60 Pro MK.2",
      price: "$280",
      features: [
        "4K/60fps capture",
        "HDR10 support",
        "PCIe interface",
        "Ultra-low latency",
        "Multi-app support"
      ],
      imageUrl: "https://m.media-amazon.com/images/I/61h6Z24d4QL._AC_SL1500_.jpg",
      amazonUrl: "https://amzn.to/4fh7pFL",
      recommendedFor: ["Fast-paced games", "Very high (80-100%)", "Professional"]
    }
  ],
  'budget-friendly': [
    {
      name: "EVGA XR1 Lite",
      price: "$50",
      features: [
        "1080p/60fps recording",
        "4K/60fps passthrough",
        "Compact design",
        "USB 3.0 interface"
      ],
      imageUrl: "https://m.media-amazon.com/images/I/714hz4QK0LL._AC_SL1500_.jpg",
      amazonUrl: "https://amzn.to/3YDQ9Dy",
      recommendedFor: ["Casual games", "Desktop/Browser", "Normal (below 60%)"]
    },
    {
      name: "AVerMedia Live Gamer Mini",
      price: "$80",
      features: [
        "1080p/60fps capture",
        "USB 2.0 interface",
        "Compact design",
        "Plug-and-play setup"
      ],
      imageUrl: "https://m.media-amazon.com/images/I/61IyVmgpAML._AC_SL1000_.jpg",
      amazonUrl: "https://amzn.to/3YWbEk1",
      recommendedFor: ["Casual games", "Desktop/Browser", "Budget"]
    }
  ],
  'console-gaming': [
    {
      name: "Elgato HD60 X",
      price: "$160",
      features: [
        "1080p/60fps capture",
        "4K/60fps passthrough",
        "HDR10 support",
        "VRR compatibility",
        "Console optimized"
      ],
      imageUrl: "https://m.media-amazon.com/images/I/61YKO2A3lYL._AC_SL1500_.jpg",
      amazonUrl: "https://amzn.to/4fCI0WO",
      recommendedFor: ["Console games", "Moderately high (60-80%)", "Gaming"]
    },
    {
      name: "AVerMedia Live Gamer Portable 2 Plus",
      price: "$150",
      features: [
        "1080p/60fps capture",
        "4K passthrough",
        "PC-free recording",
        "Console compatible"
      ],
      imageUrl: "https://m.media-amazon.com/images/I/81LAKhfgQ4L._AC_SL1500_.jpg",
      amazonUrl: "https://amzn.to/48JwJ4t",
      recommendedFor: ["Console games", "Portable", "Gaming"]
    }
  ],
  'casual-streaming': [
    {
      name: "EVGA XR1 Lite",
      price: "$50",
      features: [
        "1080p/60fps recording",
        "4K/60fps passthrough",
        "Compact design",
        "Perfect for beginners"
      ],
      imageUrl: "https://m.media-amazon.com/images/I/714hz4QK0LL._AC_SL1500_.jpg",
      amazonUrl: "https://amzn.to/3YDQ9Dy",
      recommendedFor: ["Casual games", "Desktop/Browser", "Normal (below 60%)"]
    }
  ],
  'professional': [
    {
      name: "AVerMedia Live Gamer 4K",
      price: "$300",
      features: [
        "4K/60fps capture",
        "HDR support",
        "PCIe interface",
        "Ultra-low latency"
      ],
      imageUrl: "https://m.media-amazon.com/images/I/61zndgRggdL._AC_SL1000_.jpg",
      amazonUrl: "https://amzn.to/4fD1jzb",
      recommendedFor: ["Professional", "Hardware (NVENC/AMD)", "Fast-paced games"]
    },
    {
      name: "Elgato 4K60 Pro MK.2",
      price: "$280",
      features: [
        "4K/60fps capture",
        "HDR10 support",
        "PCIe interface",
        "Ultra-low latency"
      ],
      imageUrl: "https://m.media-amazon.com/images/I/61h6Z24d4QL._AC_SL1500_.jpg",
      amazonUrl: "https://amzn.to/4fh7pFL",
      recommendedFor: ["Professional", "Hardware (NVENC/AMD)", "Fast-paced games"]
    }
  ]
};